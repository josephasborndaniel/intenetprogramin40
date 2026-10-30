// Dependency-free browser automation using Chrome's DevTools Protocol.
import {spawn} from 'node:child_process';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
const delay=ms=>new Promise(r=>setTimeout(r,ms));
export async function browser(){
 const executable=process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
 const profile=resolve('.browser-profile');await mkdir(profile,{recursive:true});
 const child=spawn(executable,['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--disable-background-networking','--remote-debugging-port=9231',`--user-data-dir=${profile}`,'about:blank'],{windowsHide:true,stdio:'ignore'});
 let version;for(let i=0;i<80;i++){try{version=await fetch('http://127.0.0.1:9231/json/version').then(r=>r.json());break;}catch{await delay(100);}}if(!version){child.kill();throw Error('Could not launch Chrome. Set CHROME_PATH to your Chrome executable.');}
 const ws=new WebSocket(version.webSocketDebuggerUrl);await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});let seq=0;const pending=new Map(),errors=[],missing=[];
 ws.onmessage=event=>{const data=JSON.parse(event.data);if(data.id){const p=pending.get(data.id);if(p){pending.delete(data.id);data.error?p.reject(Error(data.error.message)):p.resolve(data.result);}}else{if(data.method==='Runtime.exceptionThrown')errors.push(data.params.exceptionDetails.exception?.description||data.params.exceptionDetails.text);if(data.method==='Runtime.consoleAPICalled'&&data.params.type==='error')errors.push(data.params.args.map(a=>a.value||a.description).join(' '));if(data.method==='Network.responseReceived'&&data.params.response.status>=400)missing.push(data.params.response.url);}};
 const send=(method,params={},sessionId)=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));});
 const target=await send('Target.createTarget',{url:'about:blank'});const {sessionId}=await send('Target.attachToTarget',{targetId:target.targetId,flatten:true});const call=(method,params={})=>send(method,params,sessionId);
 await call('Page.enable');await call('Runtime.enable');await call('Network.enable');
 async function evaluate(expression){const result=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true,userGesture:true});if(result.exceptionDetails)throw Error(result.exceptionDetails.exception?.description||result.exceptionDetails.text);return result.result.value;}
 async function wait(expression,timeout=6000){const start=Date.now();while(Date.now()-start<timeout){try{if(await evaluate(expression))return;}catch{}await delay(40);}throw Error('Timed out waiting for '+expression);}
 async function goto(url){await call('Page.navigate',{url});await wait(`location.href===${JSON.stringify(url)} && document.readyState==='complete' && !!document.querySelector('#main')`);await delay(60);}
 async function click(selector){const found=await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)return false;e.click();return true;})()`);if(!found)throw Error('Missing control '+selector);await delay(40);}
 async function fill(selector,value){await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)throw Error('Missing input');e.value=${JSON.stringify(String(value))};e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));})()`);}
 async function form(selector){return evaluate(`(()=>{const f=document.querySelector(${JSON.stringify(selector)});if(!f)throw Error('Form missing');for(const el of f.elements){if(!el.required||el.disabled||el.type==='file'||el.type==='submit'||el.type==='select-one')continue;if(el.type==='checkbox'||el.type==='radio'){if(el.type==='checkbox')el.checked=true;else if(!f.querySelector('input[name="'+el.name+'"]:checked'))el.checked=true;}else if(!el.value.trim()){el.value=el.type==='email'?'qa@example.test':el.type==='number'?'1':el.type==='date'?'2026-11-10':el.type==='time'?'10:00':el.type==='month'?'2026-11':'QA fictional sample';}}if(!f.reportValidity())return {valid:false,invalid:[...f.querySelectorAll(':invalid')].map(x=>({name:x.name,type:x.type,value:x.value}))};f.requestSubmit();return {valid:true};})()`);}
 async function screenshot(path){const result=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(path,Buffer.from(result.data,'base64'));}
 return {evaluate,wait,goto,click,fill,form,call,screenshot,errors,missing,version:version.Browser,async close(){try{await send('Browser.close');}catch{}ws.close();child.kill();}};
}

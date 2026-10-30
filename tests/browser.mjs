import {browser} from './cdp.mjs';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:4173';
const experiments=JSON.parse(await readFile('docs/experiments.json','utf8'));
await mkdir('test-results',{recursive:true});
const page=await browser(),results=[];let portal;
const evaluate=page.evaluate;
const click=page.click;
const countRecords=e=>evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')||'{}').records?.length||0`);
const delay=ms=>new Promise(r=>setTimeout(r,ms));
try{
 await page.goto(base+'/');
 await evaluate('localStorage.clear()');await page.goto(base+'/');
 assert.equal(await evaluate('document.querySelectorAll(".launch").length'),47);
 await page.fill('#search','EXP01');assert.equal(await evaluate('document.querySelectorAll(".launch").length'),1);
 await page.fill('#search','');await click('[data-category="Shopping"]');assert.equal(await evaluate('document.querySelectorAll(".launch").length'),experiments.filter(e=>e.category==='Shopping').length);
 await click('[data-category="All experiments"]');
 const links=await evaluate('[...document.querySelectorAll(".launch")].map(a=>a.href)');for(const url of links)assert.equal((await fetch(url)).status,200);
 await page.screenshot('test-results/portal-desktop.png');
 await page.call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 assert(await evaluate('document.documentElement.scrollWidth<=innerWidth+2'));
 await page.screenshot('test-results/portal-mobile.png');
 await page.call('Emulation.clearDeviceMetricsOverride');portal='PASS: 47 launch links, search, categories, HTTP loads, desktop/mobile screenshots';
 for(const e of experiments){const checks={},errStart=page.errors.length,missingStart=page.missing.length;try{
  const url=`${base}/experiments/${e.folder}/`;
  await page.goto(url);await evaluate(`localStorage.removeItem('ipl-${e.id}-v1')`);await page.goto(url);
  assert((await evaluate('document.querySelector(".academic").textContent')).includes('INTERNET PROGRAMMING LAB'));checks.home='PASS';
  await page.fill('#search','unlikely-QA-no-match');assert.equal(await evaluate('document.querySelectorAll("#items .item").length'),0);await page.fill('#search','');
  const category=await evaluate('document.querySelector("#filter option:nth-child(2)").value');await page.fill('#filter',category);assert(await evaluate('document.querySelectorAll("#items .item").length>0'));await page.fill('#filter','');checks.searchFilters='PASS';
  // Every experiment completes a meaningful local workflow, then reloads persisted state.
  if(e.mode==='shop'){await click('#items [data-action="primary"]');await page.goto(url+'#workspace');await click('[data-action="quantity-up"]');assert.equal(await evaluate(`Object.values(JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).cart)[0]`),2);await click('[data-action="checkout"]');assert((await page.form('#checkout-form')).valid);}
  else if(e.mode==='library'){await click('#items [data-action="primary"]');}
  else if(['booking','transport','property'].includes(e.mode)){await click('#items [data-action="primary"]');if(e.mode==='transport')await click('.seat:not(:disabled)');assert((await page.form('#booking-form')).valid);}
  else if(e.mode==='cases'){assert((await page.form('#request-form')).valid);}
  else if(e.mode==='content'||e.mode==='painting'){await click('#items [data-action="primary"]');assert((await page.form('#review-form')).valid);assert.equal(await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).reviews.length`),1);}
  else if(e.mode==='recipe'){await click('#items [data-action="primary"]');await page.fill('[name="servings"]','4');assert((await page.form('#servings-form')).valid);assert((await evaluate('document.querySelector("#ingredients").textContent')).includes('320'));assert((await page.form('#review-form')).valid);}
  else if(e.mode==='vote'){await page.fill('[name="otp"]','246810');assert((await page.form('#vote-form')).valid);assert.equal(await evaluate(`Object.keys(JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).votes).length`),1);assert((await page.form('#vote-form')).valid);assert.equal(await evaluate(`Object.keys(JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).votes).length`),1);}
  else if(e.mode==='pass'){assert((await page.form('#pass-form')).valid);}
  else if(e.mode==='electricity'){assert((await page.form('#electricity-form')).valid);assert((await evaluate('document.querySelector("#bill-result").textContent')).includes('950'));await click('[data-action="pay-calculated-bill"]');}
  else if(e.mode==='tax'){assert((await page.form('#tax-form')).valid);assert.equal(await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).lastTax.tax`),32300);}
  else if(e.mode==='phone'){assert((await page.form('#phone-form')).valid);assert.equal(await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).outstanding`),0);}
  else if(e.mode==='exam'){await click('[data-action="exam-start"]');assert((await page.form('#exam-form')).valid);}
  await delay(80);
  const persistence=await evaluate(`localStorage.getItem('ipl-${e.id}-v1')`);assert(persistence);checks.mainWorkflow='PASS';
  await page.goto(url+'#workspace');assert.equal(await evaluate(`localStorage.getItem('ipl-${e.id}-v1')`),persistence);checks.persistence='PASS';
  // Listing CRUD is exercised independently for every website.
  await page.goto(url+'#admin');const before=await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).items.length`);
  await click('[data-action="add-item"]');await page.fill('#item-form [name="field0"]','QA fictional listing');await page.fill('#item-form [name="field1"]','QA');await page.fill('#item-form [name="field5"]','Test listing for CRUD verification.');assert((await page.form('#item-form')).valid);
  assert.equal(await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).items.length`),before+1);
  const newId=await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).items.at(-1).id`);
  await click(`[data-action="edit-item"][data-id="${newId}"]`);await page.fill('#item-form [name="field0"]','QA updated listing');assert((await page.form('#item-form')).valid);
  await click(`[data-action="delete-item"][data-id="${newId}"]`);assert.equal(await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).items.length`),before);checks.crud='PASS';
  // Specialist form CRUD, if this website defines resources.
  if(await evaluate('!!document.querySelector("[data-action=add-resource]")')){await click('[data-action="add-resource"]');const submitted=await page.form('#resource-form');assert(submitted.valid,JSON.stringify(submitted));assert(await evaluate(`Object.values(JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).resources).some(a=>a.length)`));checks.specialistForm='PASS';}
  await page.goto(url+'#about');await page.fill('#contact-form [name="message"]','Fictional QA contact submission');assert((await page.form('#contact-form')).valid);checks.contact='PASS';
  await page.goto(url);await page.call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});assert(await evaluate('document.documentElement.scrollWidth<=innerWidth+2'));await page.call('Emulation.setDeviceMetricsOverride',{width:768,height:1024,deviceScaleFactor:1,mobile:false});assert(await evaluate('document.documentElement.scrollWidth<=innerWidth+2'));await page.call('Emulation.clearDeviceMetricsOverride');checks.responsive='PASS';
  const unlabeled=await evaluate(`[...document.querySelectorAll('input,select,textarea')].filter(el=>!el.closest('label')&&!el.labels?.length&&!el.getAttribute('aria-label')).length`);assert.equal(unlabeled,0);checks.labels='PASS';
  await page.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await page.call('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});assert(await evaluate('document.activeElement!==document.body'));checks.keyboard='PASS';
  await click('[data-action="reset"]');await click('[data-action="confirm-reset"]');assert.equal(await countRecords(e),0);assert.equal(await evaluate(`JSON.parse(localStorage.getItem('ipl-${e.id}-v1')).reviews.length`),0);checks.reset='PASS';
  assert.deepEqual(page.errors.slice(errStart),[]);assert.deepEqual(page.missing.slice(missingStart),[]);checks.consoleAssets='PASS';
  results.push({id:e.id,title:e.title,status:'PASS',checks});console.log(`${e.id} PASS`);
 }catch(error){results.push({id:e.id,title:e.title,status:'FAIL',checks,error:error.message,console:page.errors.slice(errStart),missing:page.missing.slice(missingStart)});console.log(`${e.id} FAIL ${error.message.slice(0,200)}`);await page.screenshot(`test-results/${e.id}-failure.png`).catch(()=>{});await page.call('Emulation.clearDeviceMetricsOverride').catch(()=>{});}}
}finally{await writeFile('test-results/browser-results.json',JSON.stringify({date:new Date().toISOString(),browser:page.version,portal,results,console:page.errors,missing:page.missing},null,2));await page.close();}
console.log(`Browser results: ${results.filter(r=>r.status==='PASS').length}/${experiments.length} PASS`);if(results.some(r=>r.status==='FAIL'))process.exitCode=1;

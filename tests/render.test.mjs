// Node render smoke checks: deliberately not a substitute for a real browser.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {mount} from '../scripts/experiment.js';
const experiments=JSON.parse(await readFile(new URL('../docs/experiments.json',import.meta.url),'utf8'));
test('All experiment pages render every navigation view without runtime errors',()=>{
 for(const e of experiments){const app={innerHTML:''},handlers={};globalThis.location={hash:'',origin:'http://localhost',pathname:`/experiments/${e.folder}/`};globalThis.window={addEventListener:(event,fn)=>handlers[event]=fn,scrollTo:()=>{}};globalThis.document={querySelector:selector=>selector==='#app'?app:null};globalThis.localStorage={getItem:()=>null,setItem:()=>{}};
  mount(e);for(const view of ['home','workspace','admin','about','source']){location.hash='#'+view;handlers.hashchange();assert(app.innerHTML.includes(e.brand.replaceAll('&','&amp;')),`${e.id} ${view} brand`);assert(app.innerHTML.includes('INTERNET PROGRAMMING LAB'));assert(app.innerHTML.includes('Reset Demo Data'));assert(!app.innerHTML.includes('undefined'),`${e.id} ${view} undefined output`);assert(app.innerHTML.includes('id="main"'));}
 }
 delete globalThis.document;delete globalThis.window;delete globalThis.location;delete globalThis.localStorage;
});

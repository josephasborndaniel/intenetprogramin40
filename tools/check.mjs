import {readFile,stat,readdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {SourceTextModule} from 'node:vm';
import assert from 'node:assert/strict';
const root=resolve(import.meta.dirname,'..');const experiments=JSON.parse(await readFile(resolve(root,'docs/experiments.json'),'utf8'));
assert.equal(experiments.length,47);assert.equal(new Set(experiments.map(e=>e.folder)).size,47);
let links=0;
for(const e of experiments){for(const file of ['index.html','style.css','script.js'])assert((await stat(resolve(root,'experiments',e.folder,file))).isFile());const script=await readFile(resolve(root,'experiments',e.folder,'script.js'),'utf8');assert(script.includes(e.id));assert(script.includes('mount(experiment)'));assert(e.source.length>200);assert.equal(e.id,`EXP${String(e.number).padStart(2,'0')}`);}
async function walk(path){for(const d of await readdir(path,{withFileTypes:true})){if(d.name.startsWith('.')||['node_modules','test-results'].includes(d.name))continue;const full=resolve(path,d.name);if(d.isDirectory())await walk(full);else if(/\.(js|mjs)$/.test(d.name))new SourceTextModule(await readFile(full,'utf8'),{identifier:full});else if(/\.(html|css)$/.test(d.name)){const text=await readFile(full,'utf8');for(const m of text.matchAll(/(?:href|src)="([^"#]+)"|@import\s+url\("([^"]+)"\)/g)){const url=m[1]||m[2];if(/^(https?:|data:|mailto:|tel:)/.test(url))continue;const target=resolve(dirname(full),decodeURIComponent(url.split('#')[0].split('?')[0]));assert((await stat(target)).isFile()||(await stat(target)).isDirectory(),`${full}: ${url}`);links++;}}}}
await walk(root);console.log(`PASS: ${experiments.length} experiment entry points, JavaScript syntax, source metadata and ${links} static references.`);

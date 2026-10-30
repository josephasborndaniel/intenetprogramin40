import {test} from 'node:test';
import assert from 'node:assert/strict';
import {electricity,tax,days,esc} from '../scripts/core.js';
test('PDF domestic tariffs use marginal slab boundaries',()=>{for(const [units,expected] of [[0,0],[100,100],[101,102.5],[200,350],[500,1550],[501,1556]])assert.equal(electricity(units),expected);});
test('PDF commercial tariffs and configurable tariffs',()=>{assert.equal(electricity(501,true),2457);assert.equal(electricity(201,false,[1,2,3,4]),303);});
const base={gross:0,bonus:0,other:0,hra:0,pension:0,health:0};
test('PDF tax: nil threshold, slabs, capped pension and zero floor',()=>{assert.equal(tax({...base,other:550000}).tax,0);assert.equal(tax({...base,other:550001}).tax,12500.2);assert.equal(tax({...base,other:1050000}).tax,112500);assert.equal(tax({...base,other:1150000}).tax,142500);assert.equal(tax({...base,gross:100000,pension:20000}).deduction,200000);assert.equal(tax({...base,hra:20000}).taxable,0);});
test('Date differences are nonnegative calendar days',()=>{assert.equal(days('2026-11-04','2026-11-01'),3);assert.equal(days('2026-10-31','2026-11-01'),0);});
test('User input is escaped before HTML rendering',()=>{assert.equal(esc('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');});

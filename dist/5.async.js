webpackJsonp([5],{695:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=u(n),s=a(369),c=u(s);t.default={namespace:"example",state:{},subscriptions:{setup:function(e){e.dispatch,e.history}},effects:{fetch:c.default.mark(function e(t,a){var u=(t.payload,a.call,a.put);return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"save"});case 2:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,r.default)({},e,t.payload)}}},e.exports=t.default}});
"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[289],{85863:function(t,e,r){r.r(e);var n=r(64572),a=r(67294),c=r(365),o=r(67940),u=r(23431);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t="undefined"!=typeof window&&window,e=(0,a.useState)((function(){var e=t?t.localStorage.getItem("character"):"{}";return JSON.parse(e)||{}})),r=e[0],n=e[1],i=function(t){var e=t.target.name,r=t.target.value;n((function(t){var n;return l(l({},t),{},((n={})[e]=r,n))}))};(0,a.useEffect)((function(){var t=setTimeout((function(){return f(r)}),500);return function(){return clearTimeout(t)}}),[r]);var f=function(){t&&t.localStorage.setItem("character",JSON.stringify(r))};return(0,u.tZ)(c.Z,{title:"CHARACTER STATS"},(0,u.tZ)(o.Z,{title:"Character Stats"}),(0,u.tZ)("form",null,(0,u.tZ)("label",null,"Name:",(0,u.tZ)("input",{type:"text",name:"name",value:r.name||"",onChange:i})),(0,u.tZ)("label",null,"XP:",(0,u.tZ)("input",{type:"number",name:"xp",value:r.xp||"",onChange:i}))))}}}]);
//# sourceMappingURL=component---src-pages-character-stats-js-6a12df42793630353a2c.js.map
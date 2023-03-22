"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[647],{46671:function(t,a,e){e.r(a);var n=e(4942),c=e(67294),s=e(53047),l=e(67940),h=e(23431);function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){(0,n.Z)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}a.default=function(){var t="undefined"!=typeof window&&window,a=(0,c.useState)((function(){var a=t?t.localStorage.getItem("challenges"):"{}";return JSON.parse(a)||{}})),e=a[0],n=a[1],i=function(t){if("checkbox"==t.target.type){var a=t.target.name,e=t.target.checked;n((function(t){var n;return r(r({},t),{},((n={})[a]=e,n))}))}else if("number"==t.target.type){var c=t.target.name,s=t.target.value;n((function(t){var a;return r(r({},t),{},((a={})[c]=s,a))}))}else{var l=t.target.name,h=t.target.value;n((function(t){var a;return r(r({},t),{},((a={})[l]=h,a))}))}};(0,c.useEffect)((function(){var t=setTimeout((function(){return o(e)}),500);return function(){return clearTimeout(t)}}),[e]);var o=function(){t&&t.localStorage.setItem("challenges",JSON.stringify(e))};return(0,h.tZ)(s.Z,{title:"CHALLENGES"},(0,h.tZ)(l.Z,{title:"Challenges"}),(0,h.tZ)("h2",null,"CHALLENGE TRACKER"),(0,h.tZ)("form",{class:"challenges"},(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc1"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc1",type:"text",name:"chDesc1",class:"description",value:e.chDesc1,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress1"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress1",type:"number",name:"chProgress1",class:"progress",value:e.chProgress1,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank1",id:"chRank1_1",value:e.chRank1_1||"1",onChange:i,checked:"1"===e.chRank1}),(0,h.tZ)("label",{for:"chRank1_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank1",id:"chRank1_2",value:e.chRank1_2||"2",onChange:i,checked:"2"===e.chRank1}),(0,h.tZ)("label",{for:"chRank1_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank1",id:"chRank1_3",value:e.chRank1_3||"3",onChange:i,checked:"3"===e.chRank1}),(0,h.tZ)("label",{for:"chRank1_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank1",id:"chRank1_4",value:e.chRank1_4||"4",onChange:i,checked:"4"===e.chRank1}),(0,h.tZ)("label",{for:"chRank1_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank1",id:"chRank1_5",value:e.chRank1_5||"5",onChange:i,checked:"5"===e.chRank1}),(0,h.tZ)("label",{for:"chRank1_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState1",id:"chState1_1",value:e.chState1_1||"1",onChange:i,checked:"1"===e.chState1}),(0,h.tZ)("label",{for:"chState1_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState1",id:"chState1_2",value:e.chState1_2||"2",onChange:i,checked:"2"===e.chState1}),(0,h.tZ)("label",{for:"chState1_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState1",id:"chState1_3",value:e.chState1_3||"3",onChange:i,checked:"3"===e.chState1}),(0,h.tZ)("label",{for:"chState1_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc2"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc2",type:"text",name:"chDesc2",class:"description",value:e.chDesc2,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress2"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress2",type:"number",name:"chProgress2",class:"progress",value:e.chProgress2,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank2",id:"chRank2_1",value:e.chRank2_1||"1",onChange:i,checked:"1"===e.chRank2}),(0,h.tZ)("label",{for:"chRank2_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank2",id:"chRank2_2",value:e.chRank2_2||"2",onChange:i,checked:"2"===e.chRank2}),(0,h.tZ)("label",{for:"chRank2_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank2",id:"chRank2_3",value:e.chRank2_3||"3",onChange:i,checked:"3"===e.chRank2}),(0,h.tZ)("label",{for:"chRank2_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank2",id:"chRank2_4",value:e.chRank2_4||"4",onChange:i,checked:"4"===e.chRank2}),(0,h.tZ)("label",{for:"chRank2_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank2",id:"chRank2_5",value:e.chRank2_5||"5",onChange:i,checked:"5"===e.chRank2}),(0,h.tZ)("label",{for:"chRank2_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState2",id:"chState2_1",value:e.chState2_1||"1",onChange:i,checked:"1"===e.chState2}),(0,h.tZ)("label",{for:"chState2_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState2",id:"chState2_2",value:e.chState2_2||"2",onChange:i,checked:"2"===e.chState2}),(0,h.tZ)("label",{for:"chState2_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState2",id:"chState2_3",value:e.chState2_3||"3",onChange:i,checked:"3"===e.chState2}),(0,h.tZ)("label",{for:"chState2_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc3"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc3",type:"text",name:"chDesc3",class:"description",value:e.chDesc3,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress3"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress3",type:"number",name:"chProgress3",class:"progress",value:e.chProgress3,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank3",id:"chRank3_1",value:e.chRank3_1||"1",onChange:i,checked:"1"===e.chRank3}),(0,h.tZ)("label",{for:"chRank3_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank3",id:"chRank3_2",value:e.chRank3_2||"2",onChange:i,checked:"2"===e.chRank3}),(0,h.tZ)("label",{for:"chRank3_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank3",id:"chRank3_3",value:e.chRank3_3||"3",onChange:i,checked:"3"===e.chRank3}),(0,h.tZ)("label",{for:"chRank3_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank3",id:"chRank3_4",value:e.chRank3_4||"4",onChange:i,checked:"4"===e.chRank3}),(0,h.tZ)("label",{for:"chRank3_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank3",id:"chRank3_5",value:e.chRank3_5||"5",onChange:i,checked:"5"===e.chRank3}),(0,h.tZ)("label",{for:"chRank3_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState3",id:"chState3_1",value:e.chState3_1||"1",onChange:i,checked:"1"===e.chState3}),(0,h.tZ)("label",{for:"chState3_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState3",id:"chState3_2",value:e.chState3_2||"2",onChange:i,checked:"2"===e.chState3}),(0,h.tZ)("label",{for:"chState3_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState3",id:"chState3_3",value:e.chState3_3||"3",onChange:i,checked:"3"===e.chState3}),(0,h.tZ)("label",{for:"chState3_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc4"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc4",type:"text",name:"chDesc4",class:"description",value:e.chDesc4,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress4"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress4",type:"number",name:"chProgress4",class:"progress",value:e.chProgress4,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank4",id:"chRank4_1",value:e.chRank4_1||"1",onChange:i,checked:"1"===e.chRank4}),(0,h.tZ)("label",{for:"chRank4_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank4",id:"chRank4_2",value:e.chRank4_2||"2",onChange:i,checked:"2"===e.chRank4}),(0,h.tZ)("label",{for:"chRank4_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank4",id:"chRank4_3",value:e.chRank4_3||"3",onChange:i,checked:"3"===e.chRank4}),(0,h.tZ)("label",{for:"chRank4_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank4",id:"chRank4_4",value:e.chRank4_4||"4",onChange:i,checked:"4"===e.chRank4}),(0,h.tZ)("label",{for:"chRank4_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank4",id:"chRank4_5",value:e.chRank4_5||"5",onChange:i,checked:"5"===e.chRank4}),(0,h.tZ)("label",{for:"chRank4_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState4",id:"chState4_1",value:e.chState4_1||"1",onChange:i,checked:"1"===e.chState4}),(0,h.tZ)("label",{for:"chState4_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState4",id:"chState4_2",value:e.chState4_2||"2",onChange:i,checked:"2"===e.chState4}),(0,h.tZ)("label",{for:"chState4_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState4",id:"chState4_3",value:e.chState4_3||"3",onChange:i,checked:"3"===e.chState4}),(0,h.tZ)("label",{for:"chState4_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc5"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc5",type:"text",name:"chDesc5",class:"description",value:e.chDesc5,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress5"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress5",type:"number",name:"chProgress5",class:"progress",value:e.chProgress5,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank5",id:"chRank5_1",value:e.chRank5_1||"1",onChange:i,checked:"1"===e.chRank5}),(0,h.tZ)("label",{for:"chRank5_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank5",id:"chRank5_2",value:e.chRank5_2||"2",onChange:i,checked:"2"===e.chRank5}),(0,h.tZ)("label",{for:"chRank5_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank5",id:"chRank5_3",value:e.chRank5_3||"3",onChange:i,checked:"3"===e.chRank5}),(0,h.tZ)("label",{for:"chRank5_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank5",id:"chRank5_4",value:e.chRank5_4||"4",onChange:i,checked:"4"===e.chRank5}),(0,h.tZ)("label",{for:"chRank5_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank5",id:"chRank5_5",value:e.chRank5_5||"5",onChange:i,checked:"5"===e.chRank5}),(0,h.tZ)("label",{for:"chRank5_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState5",id:"chState5_1",value:e.chState5_1||"1",onChange:i,checked:"1"===e.chState5}),(0,h.tZ)("label",{for:"chState5_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState5",id:"chState5_2",value:e.chState5_2||"2",onChange:i,checked:"2"===e.chState5}),(0,h.tZ)("label",{for:"chState5_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState5",id:"chState5_3",value:e.chState5_3||"3",onChange:i,checked:"3"===e.chState5}),(0,h.tZ)("label",{for:"chState5_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc6"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc6",type:"text",name:"chDesc6",class:"description",value:e.chDesc6,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress6"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress6",type:"number",name:"chProgress6",class:"progress",value:e.chProgress6,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank6",id:"chRank6_1",value:e.chRank6_1||"1",onChange:i,checked:"1"===e.chRank6}),(0,h.tZ)("label",{for:"chRank6_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank6",id:"chRank6_2",value:e.chRank6_2||"2",onChange:i,checked:"2"===e.chRank6}),(0,h.tZ)("label",{for:"chRank6_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank6",id:"chRank6_3",value:e.chRank6_3||"3",onChange:i,checked:"3"===e.chRank6}),(0,h.tZ)("label",{for:"chRank6_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank6",id:"chRank6_4",value:e.chRank6_4||"4",onChange:i,checked:"4"===e.chRank6}),(0,h.tZ)("label",{for:"chRank6_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank6",id:"chRank6_5",value:e.chRank6_5||"5",onChange:i,checked:"5"===e.chRank6}),(0,h.tZ)("label",{for:"chRank6_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState6",id:"chState6_1",value:e.chState6_1||"1",onChange:i,checked:"1"===e.chState6}),(0,h.tZ)("label",{for:"chState6_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState6",id:"chState6_2",value:e.chState6_2||"2",onChange:i,checked:"2"===e.chState6}),(0,h.tZ)("label",{for:"chState6_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState6",id:"chState6_3",value:e.chState6_3||"3",onChange:i,checked:"3"===e.chState6}),(0,h.tZ)("label",{for:"chState6_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc7"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc7",type:"text",name:"chDesc7",class:"description",value:e.chDesc7,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress7"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress7",type:"number",name:"chProgress7",class:"progress",value:e.chProgress7,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank7",id:"chRank7_1",value:e.chRank7_1||"1",onChange:i,checked:"1"===e.chRank7}),(0,h.tZ)("label",{for:"chRank7_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank7",id:"chRank7_2",value:e.chRank7_2||"2",onChange:i,checked:"2"===e.chRank7}),(0,h.tZ)("label",{for:"chRank7_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank7",id:"chRank7_3",value:e.chRank7_3||"3",onChange:i,checked:"3"===e.chRank7}),(0,h.tZ)("label",{for:"chRank7_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank7",id:"chRank7_4",value:e.chRank7_4||"4",onChange:i,checked:"4"===e.chRank7}),(0,h.tZ)("label",{for:"chRank7_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank7",id:"chRank7_5",value:e.chRank7_5||"5",onChange:i,checked:"5"===e.chRank7}),(0,h.tZ)("label",{for:"chRank7_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState7",id:"chState7_1",value:e.chState7_1||"1",onChange:i,checked:"1"===e.chState7}),(0,h.tZ)("label",{for:"chState7_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState7",id:"chState7_2",value:e.chState7_2||"2",onChange:i,checked:"2"===e.chState7}),(0,h.tZ)("label",{for:"chState7_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState7",id:"chState7_3",value:e.chState7_3||"3",onChange:i,checked:"3"===e.chState7}),(0,h.tZ)("label",{for:"chState7_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED"))))),(0,h.tZ)("div",{class:"challenge-container"},(0,h.tZ)("div",{class:"challenge-inputs"},(0,h.tZ)("div",{class:"description-container"},(0,h.tZ)("label",{for:"chDesc8"},"CHALLENGE DESCRIPTION"),(0,h.tZ)("input",{id:"chDesc8",type:"text",name:"chDesc8",class:"description",value:e.chDesc8,onChange:i})),(0,h.tZ)("div",{class:"progress-container"},(0,h.tZ)("label",{for:"chProgress8"},"PROGRESS"),(0,h.tZ)("input",{id:"chProgress8",type:"number",name:"chProgress8",class:"progress",value:e.chProgress8,onChange:i,min:"1",max:"99"}))),(0,h.tZ)("div",{class:"ranks-container"},(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank8",id:"chRank8_1",value:e.chRank8_1||"1",onChange:i,checked:"1"===e.chRank8}),(0,h.tZ)("label",{for:"chRank8_1"},(0,h.tZ)("span",{class:"rank-type"},"SHORT:")," +30%; 2XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank8",id:"chRank8_2",value:e.chRank8_2||"2",onChange:i,checked:"2"===e.chRank8}),(0,h.tZ)("label",{for:"chRank8_2"},(0,h.tZ)("span",{class:"rank-type"},"MEDIUM:")," +20%; 5XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank8",id:"chRank8_3",value:e.chRank8_3||"3",onChange:i,checked:"3"===e.chRank8}),(0,h.tZ)("label",{for:"chRank8_3"},(0,h.tZ)("span",{class:"rank-type"},"LONG:")," +10%; 10XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank8",id:"chRank8_4",value:e.chRank8_4||"4",onChange:i,checked:"4"===e.chRank8}),(0,h.tZ)("label",{for:"chRank8_4"},(0,h.tZ)("span",{class:"rank-type"},"EXTREME:")," +5%; 20XP")),(0,h.tZ)("div",{class:"rank-button"},(0,h.tZ)("input",{type:"radio",name:"chRank8",id:"chRank8_5",value:e.chRank8_5||"5",onChange:i,checked:"5"===e.chRank8}),(0,h.tZ)("label",{for:"chRank8_5"},(0,h.tZ)("span",{class:"rank-type"},"EPIC:")," +2%; 50XP"))),(0,h.tZ)("div",{class:"state-buttons-container"},(0,h.tZ)("div",{class:"state-button state-button-active"},(0,h.tZ)("input",{type:"radio",name:"chState8",id:"chState8_1",value:e.chState8_1||"1",onChange:i,checked:"1"===e.chState8}),(0,h.tZ)("label",{for:"chState8_1"},(0,h.tZ)("span",{class:"rank-state-active"},"ACTIVE"))),(0,h.tZ)("div",{class:"state-button state-button-fulfilled"},(0,h.tZ)("input",{type:"radio",name:"chState8",id:"chState8_2",value:e.chState8_2||"2",onChange:i,checked:"2"===e.chState8}),(0,h.tZ)("label",{for:"chState8_2"},(0,h.tZ)("span",{class:"rank-state-fulfilled"},"FULFILLED"))),(0,h.tZ)("div",{class:"state-button state-button-failed"},(0,h.tZ)("input",{type:"radio",name:"chState8",id:"chState8_3",value:e.chState8_3||"3",onChange:i,checked:"3"===e.chState8}),(0,h.tZ)("label",{for:"chState8_3"},(0,h.tZ)("span",{class:"rank-state-failed"},"FAILED")))))))}}}]);
//# sourceMappingURL=component---src-pages-challenges-js-ae1ae4f15a59ea9270a4.js.map
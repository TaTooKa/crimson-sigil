"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[674],{83084:function(e,t,a){a.r(t);var r=a(4942),l=a(67294),n=a(53047),i=a(67940),s=a(23431);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e="undefined"!=typeof window&&window,t=(0,l.useState)((function(){var t=e?e.localStorage.getItem("traits"):"{}";return JSON.parse(t)||{}})),a=t[0],r=t[1],o=function(e){if(console.log(e,e.target.name,e.target.value,e.target.checked),"checkbox"==e.target.type){var t=e.target.name,a=e.target.checked;r((function(e){var r;return c(c({},e),{},((r={})[t]=a,r))}))}else{var l=e.target.name,n=e.target.value;r((function(e){var t;return c(c({},e),{},((t={})[l]=n,t))}))}};(0,l.useEffect)((function(){var e=setTimeout((function(){return p(a)}),500);return function(){return clearTimeout(e)}}),[a]);var p=function(){e&&e.localStorage.setItem("traits",JSON.stringify(a))};return(0,s.tZ)(n.Z,{title:"CHARACTER TRAITS",headings:[{depth:2,value:"SKILLS AND BACKGROUND"},{depth:2,value:"GEAR AND CYBERWARE"},{depth:2,value:"CONTACTS"}]},(0,s.tZ)(i.Z,{title:"Character Traits"}),(0,s.tZ)("form",{class:"character-traits"},(0,s.tZ)("div",{class:"traits-container",id:"skills-container"},(0,s.tZ)("h2",{id:"skills-and-background"},"SKILLS AND BACKGROUND"),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillBlademaster",type:"checkbox",name:"skillBlademaster",value:a.skillBlademaster,onChange:o,defaultChecked:a.skillBlademaster}),(0,s.tZ)("label",{for:"skillBlademaster"}," ",(0,s.tZ)("span",{class:"trait-name"},"BLADEMASTER"),": when wielding a long blade, gain a ",(0,s.tZ)("b",null,"BOOST")," when you test ",(0,s.tZ)("span",{class:"stat"},"CHROME")," to ",(0,s.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," or when you ",(0,s.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," to defend.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillBountyHunter",type:"checkbox",name:"skillBountyHunter",value:a.skillBountyHunter,onChange:o,defaultChecked:a.skillBountyHunter}),(0,s.tZ)("label",{for:"skillBountyHunter"}," ",(0,s.tZ)("span",{class:"trait-name"},"BOUNTY HUNTER"),": gain a ",(0,s.tZ)("b",null,"BOOST")," whenever you ",(0,s.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION"),", ",(0,s.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," or ",(0,s.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," related to a bounty.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillBrawler",type:"checkbox",name:"skillBrawler",value:a.skillBrawler,onChange:o,defaultChecked:a.skillBrawler}),(0,s.tZ)("label",{for:"skillBrawler"}," ",(0,s.tZ)("span",{class:"trait-name"},"BRAWLER"),": gain a ",(0,s.tZ)("b",null,"BOOST")," when you ",(0,s.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,s.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,s.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," as long as you are leveraging your unarmed fighting prowess.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillDiplomat",type:"checkbox",name:"skillDiplomat",value:a.skillDiplomat,onChange:o,defaultChecked:a.skillDiplomat}),(0,s.tZ)("label",{for:"skillDiplomat"}," ",(0,s.tZ)("span",{class:"trait-name"},"DIPLOMAT"),": gain a ",(0,s.tZ)("b",null,"BOOST")," for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillDriver",type:"checkbox",name:"skillDriver",value:a.skillDriver,onChange:o,defaultChecked:a.skillDriver}),(0,s.tZ)("label",{for:"skillDriver"}," ",(0,s.tZ)("span",{class:"trait-name"},"DRIVER"),": gain a ",(0,s.tZ)("b",null,"BOOST")," whenever you ",(0,s.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,s.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,s.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," while piloting a vehicle.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillFace",type:"checkbox",name:"skillFace",value:a.skillFace,onChange:o,defaultChecked:a.skillFace}),(0,s.tZ)("label",{for:"skillFace"}," ",(0,s.tZ)("span",{class:"trait-name"},"FACE"),": gain a ",(0,s.tZ)("b",null,"BOOST")," when attempting to ",(0,s.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," with leadership, coordination or planning; or when you ",(0,s.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," by testing your ",(0,s.tZ)("span",{class:"stat"},"FLASH"),".")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillInfiltrator",type:"checkbox",name:"skillInfiltrator",value:a.skillInfiltrator,onChange:o,defaultChecked:a.skillInfiltrator}),(0,s.tZ)("label",{for:"skillInfiltrator"}," ",(0,s.tZ)("span",{class:"trait-name"},"INFILTRATOR"),": gain a ",(0,s.tZ)("b",null,"BOOST")," for any test involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillMedic",type:"checkbox",name:"skillMedic",value:a.skillMedic,onChange:o,defaultChecked:a.skillMedic}),(0,s.tZ)("label",{for:"skillMedic"}," ",(0,s.tZ)("span",{class:"trait-name"},"MEDIC"),": gain a ",(0,s.tZ)("b",null,"BOOST")," when you ",(0,s.tZ)("a",{href:"/prompts/recovery-prompts#heal"},"HEAL"),", and if you ",(0,s.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES")," for it, spend 1 less GEAR than needed to gain the same benefits.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillNetrunner",type:"checkbox",name:"skillNetrunner",value:a.skillNetrunner,onChange:o,defaultChecked:a.skillNetrunner}),(0,s.tZ)("label",{for:"skillNetrunner"}," ",(0,s.tZ)("span",{class:"trait-name"},"NETRUNNER"),": gain a ",(0,s.tZ)("b",null,"BOOST")," for any test involving hacking or surfing the NET.")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillSniper",type:"checkbox",name:"skillSniper",value:a.skillSniper,onChange:o,defaultChecked:a.skillSniper}),(0,s.tZ)("label",{for:"skillSniper"}," ",(0,s.tZ)("span",{class:"trait-name"},"SNIPER"),": while attacking at long range, gain a ",(0,s.tZ)("b",null,"BOOST")," in ",(0,s.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," and ",(0,s.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," as long as you are ",(0,s.tZ)("i",null,"IN CONTROL"),".")),(0,s.tZ)("div",{class:"trait skill"},(0,s.tZ)("input",{id:"skillStreetRat",type:"checkbox",name:"skillStreetRat",value:a.skillStreetRat,onChange:o,defaultChecked:a.skillStreetRat}),(0,s.tZ)("label",{for:"skillStreetRat"}," ",(0,s.tZ)("span",{class:"trait-name"},"STREET RAT"),": gain a ",(0,s.tZ)("b",null,"BOOST")," for any test involving lying, bluffing, stealing or cheating."))),(0,s.tZ)("hr",null),(0,s.tZ)("div",{class:"traits-container",id:"gear-container"},(0,s.tZ)("h2",{id:"gear-and-cyberware"},"GEAR AND CYBERWARE"),(0,s.tZ)("div",{class:"trait gear"},(0,s.tZ)("input",{id:"gearArmored",type:"checkbox",name:"gearArmored",value:a.gearArmored,onChange:o,defaultChecked:a.gearArmored}),(0,s.tZ)("label",{for:"gearArmored"}," ",(0,s.tZ)("span",{class:"trait-name"},"ARMORED"),": ",(0,s.tZ)("i",null,"Shiny and Chrome"),". gain a ",(0,s.tZ)("b",null,"BOOST")," when you ",(0,s.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," or ",(0,s.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," against physical attacks or impact damage.")),(0,s.tZ)("div",{class:"trait gear"},(0,s.tZ)("input",{id:"gearCyberClaws",type:"checkbox",name:"gearCyberClaws",value:a.gearCyberClaws,onChange:o,defaultChecked:a.gearCyberClaws}),(0,s.tZ)("label",{for:"gearCyberClaws"}," ",(0,s.tZ)("span",{class:"trait-name"},"CYBERCLAWS"),": Retracting Mollies or Logans. Gain a BOOST when you ACCEPT A CHALLENGE of violence, when you CLASH or when you COMPEL with CHROME."))),(0,s.tZ)("hr",null),(0,s.tZ)("div",{class:"traits-container",id:"contacts-container"},(0,s.tZ)("h2",{id:"contacts"},"CONTACTS"),(0,s.tZ)("div",{class:"trait contact"},(0,s.tZ)("input",{id:"contactInfoBroker",type:"checkbox",name:"contactInfoBroker",value:a.contactInfoBroker,onChange:o,defaultChecked:a.contactInfoBroker}),(0,s.tZ)("label",{for:"contactInfoBroker"}," ",(0,s.tZ)("span",{class:"trait-name"},"INFOBROKER"),": gain a BOOST when you resort to this contact to GATHER INFORMATION, or gain an automatic SUCCESS if you SACRIFICE RESOURCES."),(0,s.tZ)("div",{class:"name-container"},(0,s.tZ)("label",{for:"contactInfoBrokerName"},"NAME / ALIAS:"),(0,s.tZ)("input",{id:"contactInfoBrokerName",type:"text",name:"contactInfoBrokerName",value:a.contactInfoBrokerName,onChange:o})))),(0,s.tZ)("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-character-traits-js-8cd4992bf4c90b8a2449.js.map
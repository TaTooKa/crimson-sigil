import React from 'react';

const Oracle = ({oracleName, oracleDatatable, oracleLogName, combined=false, template=false}) => {

  const textboxId = "oracle-"+oracleName+"-result";

  let textboxClass = "oracle-result";
  if ( combined ) { textboxClass += " combined"; }
  if ( template ) { textboxClass += " template"; } 
  
  const buttonId = "oracle-"+oracleName+"-button";

  const windowGlobal = typeof window !== 'undefined' && window

  const renderTemplate = (string, obj) => {
    var s = string;
    for(var prop in obj) {
      s = s.replace(new RegExp('{'+ prop +'}','g'), obj[prop]);
    }
    return s;
  }

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      oracleDatatable[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join("");
    } else if ( inputResult.classList.contains("template") ) {

      var template = oracleDatatable[desiredElementId].template[Math.floor(Math.random()*oracleDatatable[desiredElementId].template.length)];
      var params = {};

      for (const [key, value] of Object.entries(oracleDatatable[desiredElementId].tables)) {
        params[key] = oracleDatatable[desiredElementId].tables[key][Math.floor(Math.random()*oracleDatatable[desiredElementId].tables[key].length)];
      }
      oracleResult = renderTemplate(template, params);


    } else {
      // Result is built from a single table
      oracleResult = oracleDatatable[desiredElementId][Math.floor(Math.random()*oracleDatatable[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    /* Oracle LOG */
    const titleElement = inputResult.parentElement.closest('div.oracle-container').previousElementSibling;
    const oraclesLog = document.getElementById('oracles-log');
    const log = "<span class=\"log-entry\"><b>"+titleElement.innerHTML+":</b> "+oracleResult+"</span><br/>";
    oraclesLog.innerHTML += log;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
    windowGlobal.localStorage.setItem(oracleLogName, oraclesLog.innerHTML);

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <div class="oracle-container">
      <span role="textbox" id={textboxId} class={textboxClass}></span>
      <button type="button" id={buttonId} class="randomize-button" onClick={handleOnClick}></button>
    </div>
  )
};

export default Oracle;
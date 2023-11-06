import React, { useState, useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import monsterOracleResults from '/src/datatables/monster-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

import OpenInNewIcon from '@material-ui/icons/OpenInNew';


export default function MonsterOracles() {
  const headings = [
    {depth: 2, value: "MONSTROSITY"},
    {depth: 3, value: "MONSTROSITY TYPE"},
    {depth: 3, value: "MONSTROSITY SIZE"},
    {depth: 3, value: "MONSTROSITY PRIMARY FORM"},
    {depth: 3, value: "MONSTROSITY CHARACTERISTICS"},
    {depth: 3, value: "MONSTROSITY ABILITIES"},

  ]

  const oracleLogName = "monsterOracleLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  const [generatorKeywords, setGeneratorKeywords] = useState({});

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  function stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html.replace('<br/>', ' ');
    return tmp.textContent || tmp.innerText || "";
  }

  const saveGeneratorKeyword = (name, value) => {
    var genKeywords = {};
    if ( name == "monstrosity-size" ) {
      value = value.split(" ")[0];
    }

    genKeywords[name] = stripHtml(value);
    setGeneratorKeywords({ ...generatorKeywords, ...genKeywords });
  };

  function openAIGeneratedMonsterPortrait(e) {
    e.preventDefault();
    var url = new URL("https://perchance.org/grimdark-fantasy-monster");
    var searchParams = {};
    const keywords = ["monstrosity-size", "monstrosity-type", "monstrosity-form", "monstrosity-characteristics", "monstrosity-abilities"];

    keywords.forEach((keyword) => {
      var key = keyword;
      if ( generatorKeywords[key] ) {
        searchParams[key] = generatorKeywords[key];
      }
    });
    url.search = new URLSearchParams(searchParams);

    window.open(url, '_blank');
  }

  return (
    <Layout title="MONSTER ORACLES" headings={headings}>
      <Seo title="Monster Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="monstrosity">MONSTROSITY</h2>
        <blockquote><p>Use these oracles when you need to come up with a strange monster.</p></blockquote>

        <h3 id="monstrosity-type">MONSTROSITY TYPE</h3>
        <Oracle oracleName="monstrosity-type" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName} saveGeneratorKeyword={saveGeneratorKeyword}/>

        <h3 id="monstrosity-size">MONSTROSITY SIZE</h3>
        <Oracle oracleName="monstrosity-size" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName} saveGeneratorKeyword={saveGeneratorKeyword}/>

        <h3 id="monstrosity-form">MONSTROSITY PRIMARY FORM</h3>
        <Oracle oracleName="monstrosity-form" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName} saveGeneratorKeyword={saveGeneratorKeyword}/>

        <h3 id="monstrosity-characteristics">MONSTROSITY CHARACTERISTICS</h3>
        <Oracle oracleName="monstrosity-characteristics" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName} saveGeneratorKeyword={saveGeneratorKeyword}/>

        <h3 id="monstrosity-abilities">MONSTROSITY ABILITIES</h3>
        <Oracle oracleName="monstrosity-abilities" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName} saveGeneratorKeyword={saveGeneratorKeyword}/>

        <br/>
        <button class="ai-generator-button" onClick={openAIGeneratedMonsterPortrait}><OpenInNewIcon/>Generate an AI image for <br/>A <i>{generatorKeywords['monstrosity-size'] || "[undefined size]"}</i> <i>{generatorKeywords['monstrosity-form'] || "[undefined form]"}</i> monster. Its type is <i>{generatorKeywords['monstrosity-type'] || "[undefined type]"}</i> characteristics: <i>{generatorKeywords['monstrosity-characteristics'] || "[undefined characteristics]"}</i>. abilities: <i>{generatorKeywords['monstrosity-abilities'] || "[undefined abilities]"}</i>.</button>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}
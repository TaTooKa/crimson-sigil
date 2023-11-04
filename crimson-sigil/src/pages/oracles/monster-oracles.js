import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import monsterOracleResults from '/src/datatables/monster-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

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

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="MONSTER ORACLES" headings={headings}>
      <Seo title="Monster Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="monstrosity">MONSTROSITY</h2>
        <blockquote><p>Use these oracles when you need to come up with a strange monster.</p></blockquote>

        <h3 id="monstrosity-type">MONSTROSITY TYPE</h3>
        <Oracle oracleName="monstrosity-type" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="monstrosity-size">MONSTROSITY SIZE</h3>
        <Oracle oracleName="monstrosity-size" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="monstrosity-form">MONSTROSITY PRIMARY FORM</h3>
        <Oracle oracleName="monstrosity-form" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="monstrosity-characteristics">MONSTROSITY CHARACTERISTICS</h3>
        <Oracle oracleName="monstrosity-characteristics" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="monstrosity-abilities">MONSTROSITY ABILITIES</h3>
        <Oracle oracleName="monstrosity-abilities" oracleDatatable={monsterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}
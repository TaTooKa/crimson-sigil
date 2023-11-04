import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import treasureOracleResults from '/src/datatables/treasure-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function MiscOracles() {
  const headings = [
    {depth: 2, value: "TREASURE"},
    {depth: 2, value: "EQUIPMENT"},
    {depth: 2, value: "ITEM FEATURES"},
    {depth: 2, value: "MAGIC ITEMS"},
    {depth: 3, value: "SENTIENT ITEMS"},
  ]

  const oracleLogName = "treasureOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="TREASURE ORACLES" headings={headings}>
      <Seo title="treasure Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">
        <h2 id="treasure">TREASURE</h2>
        <blockquote><p>Use this oracle to visualize what type of treasure you find.</p></blockquote>

        <h3 id="treasure-type">TREASURE TYPE</h3>
        <Oracle oracleName="treasure-type" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="equipment">EQUIPMENT</h2>
        <blockquote><p>Use these oracles to generate equipable items like weapons, armor or accessories.</p></blockquote>

        <br/>
        <h3 id="equipment-melee-weapons">MELEE WEAPONS</h3>
        <Oracle oracleName="equipment-melee-weapons" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="equipment-ranged-weapons">RANGED WEAPONS</h3>
        <Oracle oracleName="equipment-ranged-weapons" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="equipment-armor">ARMOR OR ACCESSORIES</h3>
        <Oracle oracleName="equipment-armor" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="item-features">ITEM FEATURES</h2>
        <blockquote><p>Use these oracles to reveal strange features of particular weapons or armor, magic or not.</p></blockquote>

        <h3 id="weapon-features">WEAPON FEATURES</h3>
        <Oracle oracleName="weapon-features" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="armor-features">ARMOR FEATURES</h3>
        <Oracle oracleName="armor-features" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>
        <h2 id="magic-items">MAGIC ITEMS</h2>
        <blockquote><p>Use these oracles to generate magic items. Interpret their prefix and suffix as inherent powers or abilities they might give the wielder.</p></blockquote>

        <br/>
        <h3 id="magic-melee-weapon">MAGIC MELEE WEAPON</h3>
        <Oracle oracleName="magic-melee-weapon" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName} template/>

        <br/>
        <h3 id="magic-ranged-weapon">MAGIC RANGED WEAPON</h3>
        <Oracle oracleName="magic-ranged-weapon" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName} template/>

        <br/>
        <h3 id="magic-armor">MAGIC ARMOR OR ACCESSORY</h3>
        <Oracle oracleName="magic-armor" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName} template/>

        <br/>
        <h3 id="sentient-items">SENTIENT ITEMS</h3>
        <blockquote><p>Some magic items are sentient and have a personality of their own. Use these oracles to generate their Virtues and Flaws.</p></blockquote>

        <h4 id="sentient-item-virtue">VIRTUE</h4>
        <Oracle oracleName="sentient-item-virtue" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="sentient-item-flaw">FLAW</h4>
        <Oracle oracleName="sentient-item-flaw" oracleDatatable={treasureOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}
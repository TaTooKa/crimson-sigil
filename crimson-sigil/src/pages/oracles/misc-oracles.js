import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import miscOracleResults from '/src/datatables/misc-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function MiscOracles() {
  const headings = [
    {depth: 2, value: "COMBAT ACTION"},
    {depth: 2, value: "TRAPS"},
    {depth: 2, value: "FACTIONS"},
    {depth: 2, value: "ARCANE BACKLASH"},


  ]

  const oracleLogName = "miscOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="MISC ORACLES" headings={headings}>
      <Seo title="Misc Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="combat-action">COMBAT ACTION</h2>
        <Oracle oracleName="combat-action" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use this oracle when you need ideas to visualize beats of combat or to generate descriptive situations in an ongoing battle other than "attack" or "defend".</p></blockquote>
        <br/>
        <hr/>

        <h2 id="traps">TRAPS</h2>
        <blockquote><p>Use this oracle when you find a trap and want details on what it does.</p></blockquote>

        <h3 id="trap-event">TRAP EVENT</h3>
        <Oracle oracleName="trap-event" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="trap-component">TRAP COMPONENT</h3>
        <Oracle oracleName="trap-component" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h2 id="factions">FACTIONS</h2>
        <blockquote><p>Use these oracles to generate a Faction.</p></blockquote>

        <h3 id="faction-name">FACTION NAME</h3>
        <Oracle oracleName="faction-name" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName} template/>

        <h3 id="faction-type">FACTION TYPE</h3>
        <Oracle oracleName="faction-type" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-influence">FACTION INFLUENCE</h3>
        <Oracle oracleName="faction-influence" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="faction-dominion">DOMINION</h3>
        <h4 id="faction-dominion-type">DOMINION TYPE</h4>
        <Oracle oracleName="faction-dominion-type" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="faction-dominion-leadership">DOMINION LEADERSHIP</h4>
        <Oracle oracleName="faction-dominion-leadership" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="faction-guild">GUILD</h3>
        <h4 id="faction-guild-type">GUILD TYPE</h4>
        <Oracle oracleName="faction-guild-type" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="faction-fringe-group">FRINGE GROUP</h3>
        <h4 id="faction-fringe-type">FRINGE GROUP TYPE</h4>
        <Oracle oracleName="faction-fringe-type" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="faction-project">FACTION PROJECT</h3>
        <Oracle oracleName="faction-project" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-quirks">FACTION QUIRKS</h3>
        <Oracle oracleName="faction-quirks" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-rumors">FACTION RUMORS</h3>
        <Oracle oracleName="faction-rumors" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <br/>
        <hr/>
        <h2 id="arcane-backlash">ARCANE BACKLASH</h2>
        <Oracle oracleName="arcane-backlash" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use this oracle when you use magic and it goes horribly wrong.</p></blockquote>
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
        <br/>

      </div>
    </Layout>
  );
}
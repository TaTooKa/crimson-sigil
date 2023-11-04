import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import locationOracleResults from '/src/datatables/location-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function LocationOracles() {
  const headings = [
    {depth: 2, value: "WILDERNESS"},
    {depth: 3, value: "BIOME"},
    {depth: 3, value: "LOCATION"},
    {depth: 2, value: "CIVILIZATION"},
    {depth: 3, value: "SETTLEMENT"},
    {depth: 3, value: "CITY"},
    {depth: 2, value: "INCURSIONS"},
    {depth: 3, value: "INCURSION THEME"},
    {depth: 3, value: "INCURSION DOMAIN"},
    {depth: 3, value: "INCURSION DETAILS"},
    {depth: 3, value: "INCURSION DANGER"},
  ]

  const oracleLogName = "locationOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="LOCATION ORACLES" headings={headings}>
      <Seo title="Location Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="wilderness">WILDERNESS</h2>
        <h3 id="biome">BIOME</h3>
        <Oracle oracleName="biome" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="location">LOCATION</h3>
        <blockquote><p>Use these oracles to generate a location inside a particular biome.</p></blockquote>

        <h4 id="locations-desert">DESERT / WASTELAND / TUNDRA</h4>
        <Oracle oracleName="locations-desert" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="locations-alpine">MOUNTAIN / ALPINE HILLS</h4>
        <Oracle oracleName="locations-alpine" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="locations-plains">PLAINS AND HILLS</h4>
        <Oracle oracleName="locations-plains" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="locations-woodlands">FOREST / SHRUBLANDS / JUNGLE / SWAMP</h4>
        <Oracle oracleName="locations-woodlands" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="locations-frigid">FRIGID / TAIGA / GLACIER</h4>
        <Oracle oracleName="locations-frigid" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="locations-coast">COAST / WATER MASS</h4>
        <Oracle oracleName="locations-coast" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="location-descriptor">LOCATION DESCRIPTOR</h3>
        <Oracle oracleName="location-descriptor" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="location-feature">LOCATION FEATURE</h3>
        <blockquote><p>Use these oracles to generate a feature, object or situation found in this location.</p></blockquote>

        <h4 id="location-feature-aspect">FEATURE ASPECT</h4>
        <Oracle oracleName="location-feature-aspect" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="location-feature-focus">FEATURE FOCUS</h4>
        <Oracle oracleName="location-feature-focus" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="civilization">CIVILIZATION</h2>

        <h3 id="settlement">SETTLEMENT</h3>
        <blockquote><p>Use these oracles to generate small settlements like villages or hamlets.</p></blockquote>

        <h4 id="settlement-name">SETTLEMENT NAME</h4>
        <Oracle oracleName="settlement-name" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} combined/>

        <h4 id="settlement-trouble">SETTLEMENT TROUBLE</h4>
        <Oracle oracleName="settlement-trouble" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="city">CITY</h3>
        <blockquote><p>Use these oracles to generate big hubs of civilization.</p></blockquote>

        <h4 id="city-name">CITY NAME</h4>
        <Oracle oracleName="city-name" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} combined/>

        <h4 id="city-background">CITY LOCATION BACKGROUND</h4>
        <Oracle oracleName="city-background" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>
        
        <h4 id="city-history">CITY HISTORY</h4>
        <Oracle oracleName="city-history" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="city-description">CITY DESCRIPTION</h4>
        <Oracle oracleName="city-description" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="city-industry">CITY PRIMARY INDUSTRY OR TRADE</h4>
        <Oracle oracleName="city-industry" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="city-location">LOCATION IN THE CITY</h4>
        <Oracle oracleName="city-location" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="city-tavern">TAVERN IN THE CITY</h4>
        <Oracle oracleName="city-tavern" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="incursions">INCURSIONS</h2>
        <blockquote><p>Use these oracles when envisioning a perilous site to explore or traverse. You might want to <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> to wander through it.</p></blockquote>

        <h3 id="incursion-theme">INCURSION THEME</h3>
        <Oracle oracleName="incursion-theme" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="incursion-domain">INCURSION DOMAIN</h3>
        <Oracle oracleName="incursion-domain" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="incursion-details">INCURSION DETAILS</h3>
        <blockquote><p>Use these oracles to reveal the incursion site name, depending on the Domain.<br/>When you explore or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to advance and get a <span class="primary">SUCCESS</span>, reveal a new Feature.</p></blockquote>

        <h4>BARROW</h4>
        <h5 id="incursion-name-barrow">SITE NAME</h5>
        <Oracle oracleName="incursion-name-barrow" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-barrow">FEATURE</h5>
        <Oracle oracleName="incursion-feature-barrow" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h4>CAVERN</h4>
        <h5 id="incursion-name-cavern">SITE NAME</h5>
        <Oracle oracleName="incursion-name-cavern" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-cavern">FEATURE</h5>
        <Oracle oracleName="incursion-feature-cavern" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h4>ICEREACH</h4>
        <h5 id="incursion-name-icereach">SITE NAME</h5>
        <Oracle oracleName="incursion-name-icereach" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-icereach">FEATURE</h5>
        <Oracle oracleName="incursion-feature-icereach" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h4>MINE</h4>
        <h5 id="incursion-name-mine">SITE NAME</h5>
        <Oracle oracleName="incursion-name-mine" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-mine">FEATURE</h5>
        <Oracle oracleName="incursion-feature-mine" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>
        
        <br/>
        <h4>PASS OR EYRIE</h4>
        <h5 id="incursion-name-pass">SITE NAME</h5>
        <Oracle oracleName="incursion-name-pass" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-pass">FEATURE</h5>
        <Oracle oracleName="incursion-feature-pass" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h4>RUIN, SETTLEMENT, TUNDRA OR DESERT</h4>
        <h5 id="incursion-name-ruin">SITE NAME</h5>
        <Oracle oracleName="incursion-name-ruin" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-ruin">FEATURE</h5>
        <Oracle oracleName="incursion-feature-ruin" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h4>SEA CAVE</h4>
        <h5 id="incursion-name-seacave">SITE NAME</h5>
        <Oracle oracleName="incursion-name-seacave" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-seacave">FEATURE</h5>
        <Oracle oracleName="incursion-feature-seacave" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h4>JUNGLE OR SHADOWFEN</h4>
        <h5 id="incursion-name-jungle">SITE NAME</h5>
        <Oracle oracleName="incursion-name-jungle" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-jungle">FEATURE</h5>
        <Oracle oracleName="incursion-feature-jungle" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h4>STRONGHOLD OR ZIGGURAT</h4>
        <h5 id="incursion-name-stronghold">SITE NAME</h5>
        <Oracle oracleName="incursion-name-stronghold" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-stronghold">FEATURE</h5>
        <Oracle oracleName="incursion-feature-stronghold" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h4>TANGLEWOOD</h4>
        <h5 id="incursion-name-tanglewood">SITE NAME</h5>
        <Oracle oracleName="incursion-name-tanglewood" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-tanglewood">FEATURE</h5>
        <Oracle oracleName="incursion-feature-tanglewood" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h4>UNDERKEEP</h4>
        <h5 id="incursion-name-underkeep">SITE NAME</h5>
        <Oracle oracleName="incursion-name-underkeep" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} template/>

        <h5 id="incursion-feature-underkeep">FEATURE</h5>
        <Oracle oracleName="incursion-feature-underkeep" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName} />

        <br/>
        <h3 id="incursion-danger">INCURSION DANGER</h3>
        <Oracle oracleName="incursion-danger" oracleDatatable={locationOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to advance in the incursion, get a <span class="secondary">FAILURE</span> and reveal something perilous.</p></blockquote>

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
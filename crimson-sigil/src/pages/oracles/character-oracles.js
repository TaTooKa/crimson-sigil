import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import characterOracleResults from '/src/datatables/character-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function CharacterOracles() {
  const headings = [
    {depth: 2, value: "CHARACTER BASICS"},
    {depth: 2, value: "CHARACTER BACKGROUND"},
    {depth: 2, value: "CHARACTER CURRENT STATE"},
    {depth: 2, value: "CHARACTER NAME"},

  ]

  const oracleLogName = "characterOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);


  return (
    <Layout title="CHARACTER ORACLES" headings={headings}>
      <Seo title="Character Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

 
        <h2 id="character-basics">CHARACTER BASICS</h2>

        <h3 id="character-role">CHARACTER ROLE</h3>
        <Oracle oracleName="character-role" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-descriptor">CHARACTER DESCRIPTOR</h3>
        <Oracle oracleName="character-descriptor" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-goal">CHARACTER GOAL</h3>
        <Oracle oracleName="character-goal" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-traits">CHARACTER TRAITS</h3>
        <Oracle oracleName="character-traits" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-mannerisms">CHARACTER MANNERISMS</h3>
        <Oracle oracleName="character-mannerisms" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="character-background">CHARACTER BACKGROUND</h2>
        
        <h3 id="character-ethnicity">CHARACTER ETHNICITY</h3>
        <Oracle oracleName="character-ethnicity" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-caste">CHARACTER CASTE</h3>
        <Oracle oracleName="character-caste" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-education">CHARACTER EDUCATION</h3>
        <Oracle oracleName="character-education" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-war-story">CHARACTER WAR STORY</h3>
        <Oracle oracleName="character-war-story" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="character-current-state">CHARACTER CURRENT STATE</h2>

        <h3 id="character-disposition">CHARACTER DISPOSITION</h3>
        <Oracle oracleName="character-disposition" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-activity">CHARACTER ACTIVITY</h3>
        <Oracle oracleName="character-activity" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2 id="character-name">CHARACTER NAME</h2>

        <h3 id="character-faeborn">FAEBORN</h3>

        <h4 id="character-faeborn-male">FAEBORN MALE NAME</h4>
        <Oracle oracleName="character-faeborn-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-faeborn-female">FAEBORN FEMALE NAME</h4>
        <Oracle oracleName="character-faeborn-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-faeborn-clan">FAEBORN CLAN NAME</h4>
        <Oracle oracleName="character-faeborn-clan" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-arabic">ARABIC</h3>
        <h4 id="character-arabic-male">ARABIC MALE NAME</h4>
        <Oracle oracleName="character-arabic-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-arabic-female">ARABIC FEMALE NAME</h4>
        <Oracle oracleName="character-arabic-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-celtic">CELTIC</h3>
        <h4 id="character-celtic-male">CELTIC MALE NAME</h4>
        <Oracle oracleName="character-celtic-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-celtic-female">CELTIC FEMALE NAME</h4>
        <Oracle oracleName="character-celtic-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-chinese">CHINESE</h3>
        <h4 id="character-chinese-male">CHINESE MALE NAME</h4>
        <Oracle oracleName="character-chinese-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-chinese-female">CHINESE FEMALE NAME</h4>
        <Oracle oracleName="character-chinese-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-egyptian">EGYPTIAN</h3>
        <h4 id="character-egyptian-male">EGYPTIAN MALE NAME</h4>
        <Oracle oracleName="character-egyptian-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-egyptian-female">EGYPTIAN FEMALE NAME</h4>
        <Oracle oracleName="character-egyptian-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-english">ENGLISH</h3>
        <h4 id="character-english-male">ENGLISH MALE NAME</h4>
        <Oracle oracleName="character-english-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-english-female">ENGLISH FEMALE NAME</h4>
        <Oracle oracleName="character-english-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-french">FRENCH</h3>
        <h4 id="character-french-male">FRENCH MALE NAME</h4>
        <Oracle oracleName="character-french-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-french-female">FRENCH FEMALE NAME</h4>
        <Oracle oracleName="character-french-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-german">GERMAN</h3>
        <h4 id="character-german-male">GERMAN MALE NAME</h4>
        <Oracle oracleName="character-german-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-german-female">GERMAN FEMALE NAME</h4>
        <Oracle oracleName="character-german-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-greek">GREEK</h3>
        <h4 id="character-greek-male">GREEK MALE NAME</h4>
        <Oracle oracleName="character-greek-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-greek-female">GREEK FEMALE NAME</h4>
        <Oracle oracleName="character-greek-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-indian">INDIAN</h3>
        <h4 id="character-indian-male">INDIAN MALE NAME</h4>
        <Oracle oracleName="character-indian-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-indian-female">INDIAN FEMALE NAME</h4>
        <Oracle oracleName="character-indian-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-mesoamerican">MESOAMERICAN</h3>
        <h4 id="character-mesoamerican-male">MESOAMERICAN MALE NAME</h4>
        <Oracle oracleName="character-mesoamerican-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-mesoamerican-female">MESOAMERICAN FEMALE NAME</h4>
        <Oracle oracleName="character-mesoamerican-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-nigercongo">NIGER-CONGO</h3>
        <h4 id="character-nigercongo-male">NIGER-CONGO MALE NAME</h4>
        <Oracle oracleName="character-nigercongo-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-nigercongo-female">NIGER-CONGO FEMALE NAME</h4>
        <Oracle oracleName="character-nigercongo-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-norse">NORSE</h3>
        <h4 id="character-norse-male">NORSE MALE NAME</h4>
        <Oracle oracleName="character-norse-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-norse-female">NORSE FEMALE NAME</h4>
        <Oracle oracleName="character-norse-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-polynesian">POLYNESIAN</h3>
        <h4 id="character-polynesian-male">POLYNESIAN MALE NAME</h4>
        <Oracle oracleName="character-polynesian-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-polynesian-female">POLYNESIAN FEMALE NAME</h4>
        <Oracle oracleName="character-polynesian-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-roman">ROMAN</h3>
        <h4 id="character-roman-male">ROMAN MALE NAME</h4>
        <Oracle oracleName="character-roman-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-roman-female">ROMAN FEMALE NAME</h4>
        <Oracle oracleName="character-roman-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-slavic">SLAVIC</h3>
        <h4 id="character-slavic-male">SLAVIC MALE NAME</h4>
        <Oracle oracleName="character-slavic-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-slavic-female">SLAVIC FEMALE NAME</h4>
        <Oracle oracleName="character-slavic-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="character-spanish">SPANISH</h3>
        <h4 id="character-spanish-male">SPANISH MALE NAME</h4>
        <Oracle oracleName="character-spanish-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="character-spanish-female">SPANISH FEMALE NAME</h4>
        <Oracle oracleName="character-spanish-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

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
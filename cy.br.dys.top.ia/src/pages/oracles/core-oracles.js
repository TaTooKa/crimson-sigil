import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function CoreOracles() {
  const headings = [
    // {depth: 2, value: "ACTION"},
    // {depth: 2, value: "THEME"},
    // {depth: 2, value: "DESCRIPTOR"},
    // {depth: 2, value: "FOCUS"},
  ]

  const oracleResults = {
    "oracle-action-result": [
      "Abandon",
      "Acquire",
      "Advance",
      "Affect",
      "Aid",
      "Arrive",
      "Assault",
      "Attack",
      "Avenge",
      "Avoid",
      "Await",
      "Begin",
      "Betray",
      "Bolster",
      "Breach",
      "Break",
      "Capture",
      "Challenge",
      "Change",
      "Charge",
      "Clash",
      "Command",
      "Communicate",
      "Construct",
      "Control",
      "Coordinate",
      "Create",
      "Debate",
      "Defeat",
      "Defend",
      "Deflect",
      "Defy",
      "Deliver",
      "Demand",
      "Depart",
      "Destroy",
      "Distract",
      "Eliminate",
      "Endure",
      "Escalate",
      "Escort",
      "Evade",
      "Explore",
      "Falter",
      "Find",
      "Finish",
      "Focus",
      "Follow",
      "Fortify",
      "Gather",
      "Guard",
      "Hide",
      "Hold",
      "Hunt",
      "Impress",
      "Initiate",
      "Inspect",
      "Investigate",
      "Journey",
      "Learn",
      "Leave",
      "Locate",
      "Lose",
      "Manipulate",
      "Mourn",
      "Move",
      "Oppose",
      "Overwhelm",
      "Persevere",
      "Preserve",
      "Protect",
      "Raid",
      "Reduce",
      "Refuse",
      "Reject",
      "Release",
      "Remove",
      "Research",
      "Resist",
      "Restore",
      "Reveal",
      "Risk",
      "Scheme",
      "Search",
      "Secure",
      "Seize",
      "Serve",
      "Share",
      "Strengthen",
      "Summon",
      "Support",
      "Suppress",
      "Surrender",
      "Swear",
      "Threaten",
      "Transform",
      "Uncover",
      "Uphold",
      "Weaken",
      "Withdraw",
    ],
    "oracle-theme-result": [
      "Ability",
      "Advantage",
      "Alliance",
      "Authority",
      "Balance",
      "Barrier",
      "Belief",
      "Blood",
      "Bond",
      "Burden",
      "Commerce",
      "Community",
      "Corruption",
      "Creation",
      "Crime",
      "Culture",
      "Cure",
      "Danger",
      "Death",
      "Debt",
      "Decay",
      "Deception",
      "Defense",
      "Destiny",
      "Disaster",
      "Discovery",
      "Disease",
      "Dominion",
      "Dream",
      "Duty",
      "Enemy",
      "Expedition",
      "Faction",
      "Fame",
      "Family",
      "Fear",
      "Fellowship",
      "Freedom",
      "Greed",
      "Hardship",
      "Hate",
      "Health",
      "History",
      "Home",
      "Honor",
      "Hope",
      "Humanity",
      "Innocence",
      "Knowledge",
      "Labor",
      "Language",
      "Law",
      "Legacy",
      "Life",
      "Love",
      "Memory",
      "Nature",
      "Opportunity",
      "Passage",
      "Peace",
      "Phenomenon",
      "Possession",
      "Power",
      "Price",
      "Pride",
      "Prize",
      "Prophesy",
      "Protection",
      "Quest",
      "Relationship",
      "Religion",
      "Reputation",
      "Resource",
      "Revenge",
      "Rival",
      "Rumor",
      "Safety",
      "Sanctuary",
      "Secret",
      "Solution",
      "Spirit",
      "Stranger",
      "Strategy",
      "Strength",
      "Superstition",
      "Supply",
      "Survival",
      "Technology",
      "Time",
      "Tool",
      "Trade",
      "Truth",
      "Vengeance",
      "Vow",
      "War",
      "Warning",
      "Weakness",
      "Wealth",
      "Weapon",
      "World",
    ],
    "oracle-descriptor-result": [
      "A short text",
      "A very long text, check this out: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis dui felis, vel vehicula tortor cursus nec",
      "A medium-length text, like so: 123456789, 123456789.",
    ],
    "oracle-focus-result": [
     "1",
     "", 
    ],
  }

  const handleOnClick = (event) => {
    // console.log(event.target.id);
    if ( event.target.id == "oracle-action-button") {
      var desiredElementId = "oracle-action-result";
    } else if ( event.target.id == "oracle-theme-button") {
      var desiredElementId = "oracle-theme-result";
    } else if ( event.target.id == "oracle-descriptor-button") {
      var desiredElementId = "oracle-descriptor-result";
    } else if ( event.target.id == "oracle-focus-button") {
      var desiredElementId = "oracle-focus-result";
    }
    const inputResult = document.getElementById(desiredElementId);
    const oracleResult = oracleResults[desiredElementId][Math.floor(Math.random()*oracleResults[desiredElementId].length)];
    inputResult.classList.add("toggled");
    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;

      if ( oracleResult.length <= 26 ) {
        inputResult.style.fontSize = "1em";
      } else if ( oracleResult.length <= 60 ) {
        inputResult.style.fontSize = "0.9em";
      } else if ( oracleResult.length <= 80 ) {
        inputResult.style.fontSize = "0.7em";
      } else {
        inputResult.style.fontSize = "0.6em";
      }
    }, 500);


  }

  return (
    <Layout title="CORE ORACLES" headings={headings}>
      <Seo title="Core Oracles" />
      <div class="oracles-container">
        <h2 id="action">ACTION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-action-result" class="oracle-result"></span>
          <button type="button" id="oracle-action-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="action">THEME</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-theme-result" class="oracle-result"></span>
          <button type="button" id="oracle-theme-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="action">DESCRIPTOR</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-descriptor-result" class="oracle-result"></span>
          <button type="button" id="oracle-descriptor-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="action">FOCUS</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-focus-result" class="oracle-result"></span>
          <button type="button" id="oracle-focus-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
      </div>
    </Layout>
  );
}
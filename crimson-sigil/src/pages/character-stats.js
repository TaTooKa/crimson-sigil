import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window
  var activeTraits = windowGlobal ? windowGlobal.localStorage.getItem("activeTraits") : "";

  const [inputs, setInputs] = useState(() => {
    const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
    const savedCharacter = JSON.parse(savedCharacterStr)
    return savedCharacter || {
      name: "",
      xpCurrent: "0",
      xpTotal: "0",
      state: "inControl",
      grit: "5",
      will: "5",
      gear: "5",
      angleProgress: "1",
    }
  })

  const handleChange = (event) => {
    if ( event.target.type == "number" ) {
      const name = event.target.name;
      //const value = Math.max(event.target.min, Math.min(event.target.max, Number(event.target.value)));
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } else {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    if ( event.target.name == "quest" ) {
      const name = "questDescription"
      const value = event.target.alt;
      var descriptionEl = document.getElementById('questDescription');
      descriptionEl.innerHTML = value;
      setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    // Traits 
    var traitsContainerEl = document.getElementById('traits-container');
    if (!activeTraits) {
      activeTraits = "NONE YET. Pick 3 in the <a href=\"/character-traits\">TRAITS PAGE</a>.";
    }
    traitsContainerEl.innerHTML = "Your current <a href=\"/character-traits\">TRAITS</a>:<br/>"+activeTraits;

    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("character", JSON.stringify(inputs))
    }
  }

  return (
    <Layout title="Character Stats">
      <Seo title="Character Stats" />
      <form class="character-stats">

        <div class="left-side">

          <div class="first-row">
            <div class="left-col">
              <label>NAME / ALIAS <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/></label>
            </div>
            <div class="right-col">
                <span class="xp-title">XP </span><span class="curtot">current / total</span>
                <div class="input-container">
                  <input type="number" id="xpCurrent" name="xpCurrent" value={inputs.xpCurrent || ""} onChange={handleChange} />
                  <input type="number" id="xpTotal" name="xpTotal" value={inputs.xpTotal || ""} onChange={handleChange} />
                </div>
            </div>
          </div>

          <div class="state-container">
            <div class="input-container">
              <input id="inControlInput" type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.state==="inControl"}/><label for="inControlInput"> IN CONTROL</label>
              <input id="inABadSpotInput" type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.state==="inABadSpot"}/><label for="inABadSpotInput"> IN A BAD SPOT</label>
            </div>
          </div>

          <div class="stats-container">
            <div class="stat-container">
              <div class="left-col">
                <label class="stat">WITS <input type="number" name="wits" value={inputs.wits || ""} onChange={handleChange} min="1" max="99" /></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">cunning and knowledge</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">MIGHT <input type="number" name="might" value={inputs.might || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">strength and endurance</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">HASTE <input type="number" name="haste" value={inputs.haste || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">speed and precision</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">CHARM <input type="number" name="charm" value={inputs.charm || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">personality and empathy</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">GUILE <input type="number" name="guile" value={inputs.guile || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">deception and stealth</span>
              </div>
            </div>
          </div>

          <div class="stat-bar" id="grit-stat-bar">
            <span class="title">GRIT</span>
            <input type="radio" name="grit" id="grit0" value={inputs.grit0 || "0"} onChange={handleChange} checked={inputs.grit==="0"}/><label for="grit0">0</label>
            <input type="radio" name="grit" id="grit1" value={inputs.grit1 || "1"} onChange={handleChange} checked={inputs.grit==="1"}/><label for="grit1">1</label>
            <input type="radio" name="grit" id="grit2" value={inputs.grit2 || "2"} onChange={handleChange} checked={inputs.grit==="2"}/><label for="grit2">2</label>
            <input type="radio" name="grit" id="grit3" value={inputs.grit3 || "3"} onChange={handleChange} checked={inputs.grit==="3"}/><label for="grit3">3</label>
            <input type="radio" name="grit" id="grit4" value={inputs.grit4 || "4"} onChange={handleChange} checked={inputs.grit==="4"}/><label for="grit4">4</label>
            <input type="radio" name="grit" id="grit5" value={inputs.grit5 || "5"} onChange={handleChange} checked={inputs.grit==="5"}/><label for="grit5">5</label>
          </div>

          <div class="stat-bar" id="will-stat-bar">
            <span class="title">WILL</span>
            <input type="radio" name="will" id="will0" value={inputs.will0 || "0"} onChange={handleChange} checked={inputs.will==="0"}/><label for="will0">0</label>
            <input type="radio" name="will" id="will1" value={inputs.will1 || "1"} onChange={handleChange} checked={inputs.will==="1"}/><label for="will1">1</label>
            <input type="radio" name="will" id="will2" value={inputs.will2 || "2"} onChange={handleChange} checked={inputs.will==="2"}/><label for="will2">2</label>
            <input type="radio" name="will" id="will3" value={inputs.will3 || "3"} onChange={handleChange} checked={inputs.will==="3"}/><label for="will3">3</label>
            <input type="radio" name="will" id="will4" value={inputs.will4 || "4"} onChange={handleChange} checked={inputs.will==="4"}/><label for="will4">4</label>
            <input type="radio" name="will" id="will5" value={inputs.will5 || "5"} onChange={handleChange} checked={inputs.will==="5"}/><label for="will5">5</label>
          </div>

          <div class="stat-bar" id="gear-stat-bar">
            <span class="title">GEAR</span>
            <input type="radio" name="gear" id="gear0" value={inputs.gear0 || "0"} onChange={handleChange} checked={inputs.gear==="0"}/><label for="gear0">0</label>
            <input type="radio" name="gear" id="gear1" value={inputs.gear1 || "1"} onChange={handleChange} checked={inputs.gear==="1"}/><label for="gear1">1</label>
            <input type="radio" name="gear" id="gear2" value={inputs.gear2 || "2"} onChange={handleChange} checked={inputs.gear==="2"}/><label for="gear2">2</label>
            <input type="radio" name="gear" id="gear3" value={inputs.gear3 || "3"} onChange={handleChange} checked={inputs.gear==="3"}/><label for="gear3">3</label>
            <input type="radio" name="gear" id="gear4" value={inputs.gear4 || "4"} onChange={handleChange} checked={inputs.gear==="4"}/><label for="gear4">4</label>
            <input type="radio" name="gear" id="gear5" value={inputs.gear5 || "5"} onChange={handleChange} checked={inputs.gear==="5"}/><label for="gear5">5</label>
          </div>

        </div>

        <div id="traits-container"></div>

        <div class="right-side">

          <div class="character-arc-container">

              <div class="character-arc-header">
                <div class="character-arc-title-container">
                  <span class="character-arc-title">CHARACTER ARC</span>
                </div>
                <div class="character-arc-explanation-container">
                  <p class="character-arc-explanation">Each of these is an <b>EPIC Challenge</b> (they increase by +2% when you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> on them)</p>
                </div>
              </div>

              <div class="quest-container arc-container">
                <span class="quest-title arc-subtitle">Personal Quest</span>
                <label class="quest-progress arc-progress">PROGRESS <input type="number" name="questProgress" value={inputs.questProgress || ""} onChange={handleChange} min="1" max="99"/></label>

                <div class="quest-options">
                  <span class="quest-subtitle">Choose One:</span>
                  <div class="columns">
                    <div class="col left-col">
                      <input id="questInput1" type="radio" name="quest" value={inputs.quest1 || "Revenge"} onChange={handleChange} checked={inputs.quest==="Revenge"} alt="An individual or faction wronged you in some way. You will make'em pay for it."/><label for="questInput1"> Revenge</label>
                      <input id="questInput2" type="radio" name="quest" value={inputs.quest2 || "Heirloom"} onChange={handleChange} checked={inputs.quest==="Heirloom"} alt="Something (an object of symbolic significance or with true power) belongs to you by right or heritage. You must reclaim it, wherever it is."/><label for="questInput2"> Heirloom</label>
                      <input id="questInput3" type="radio" name="quest" value={inputs.quest3 || "Birthright"} onChange={handleChange} checked={inputs.quest==="Birthright"} alt="You have a claim to something important (a position, a deed, a legacy, some sort of power) that you must reach or redeem."/><label for="questInput3"> Birthright</label>
                      <input id="questInput4" type="radio" name="quest" value={inputs.quest4 || "Heroism"} onChange={handleChange} checked={inputs.quest==="Heroism"} alt="A great evil must be thwarted. The Innocent and the weak must be protected or saved. Peace must be reclaimed. You are the one who can do it."/><label for="questInput4"> Heroism</label>
                      <input id="questInput5" type="radio" name="quest" value={inputs.quest5 || "Rescue"} onChange={handleChange} checked={inputs.quest==="Rescue"} alt="Someone has been captured or lost. You must rescue them, or no one else will."/><label for="questInput5"> Rescue</label>
                      <input id="questInput6" type="radio" name="quest" value={inputs.quest6 || "Empowerment"} onChange={handleChange} checked={inputs.quest==="Empowerment"} alt="either out of selfishness or for the benefit of others, you need to achieve greater power by doing something that will make you supreme among others."/><label for="questInput6"> Empowerment</label>
                      <input id="questInput7" type="radio" name="quest" value={inputs.quest7 || "Recognition"} onChange={handleChange} checked={inputs.quest==="Recognition"} alt="Honor and virtue are on your destiny, but that's not enough: You need for it to be known, becoming famous and recognized for your deeds across all of the land."/><label for="questInput7"> Recognition</label>
                    </div>
                    <div class="col right-col">
                      <input id="questInput8" type="radio" name="quest" value={inputs.quest8 || "Enrichment"} onChange={handleChange} checked={inputs.quest==="Enrichment"} alt="Either out of pure greed, or as a means to an end, you want to become rich and have a life full of luxuries."/><label for="questInput8"> Enrichment</label>
                      <input id="questInput9" type="radio" name="quest" value={inputs.quest9 || "Conquest"} onChange={handleChange} checked={inputs.quest==="Conquest"} alt="The fate of a region or faction cannot be left to their own whims. You know better; you must subdue and control it from the top."/><label for="questInput9"> Conquest</label>
                      <input id="questInput10" type="radio" name="quest" value={inputs.quest10 || "Love"} onChange={handleChange} checked={inputs.quest==="Love"} alt="You are focused on a loved one; either a familiar bond or a romantic interest. You must win their love, nurture that relationship or protect it from something."/><label for="questInput10"> Love</label>
                      <input id="questInput11" type="radio" name="quest" value={inputs.quest11 || "Belief"} onChange={handleChange} checked={inputs.quest==="Belief"} alt="You have a creed or dogma that you consider ideal, but most others don't share it. You must convince, proselitize or forcefully impose it until the majority accepts and embraces it."/><label for="questInput11"> Belief</label>
                      <input id="questInput12" type="radio" name="quest" value={inputs.quest12 || "Justice"} onChange={handleChange} checked={inputs.quest==="Justice"} alt="Some laws are sacred, and everyone must abide to them. Your code might seem extreme or too radical, but you must enforce it until it is the rule of the land."/><label for="questInput12"> Justice</label>
                      <input id="questInput13" type="radio" name="quest" value={inputs.quest13 || "Duty"} onChange={handleChange} checked={inputs.quest==="Duty"} alt="You are bound to some sort of code or service (an organization, a religion, an order) and you firmly believe in it. You must pursue your obligation until the final objective (usually idealistic and utopic) is achieved."/><label for="questInput13"> Duty</label>
                      <input id="questInput14" type="radio" name="quest" value={inputs.quest14 || "Debt"} onChange={handleChange} checked={inputs.quest==="Debt"} alt="You owe something important (probably your life) to someone you admire. You will do whatever it takes to repay that great favor."/><label for="questInput14"> Debt</label>
                    </div>
                  </div>
                </div>
                <div class="quest-description-container">
                  <span role="textbox" name="questDescription" id="questDescription">{inputs.questDescription || "N/A"}</span>
                </div>
                <div class="quest-notes-container">
                  <label class="quest_notes">PERSONAL QUEST NOTES (Who? What?)<textarea name="questNotes" value={inputs.questNotes || ""} onChange={handleChange} /></label>
                </div>
              </div>

              <div class="exploration-container arc-container">
                <div class="arc-subtitle">
                  <span class="exploration-title">Exploration</span><br/>
                  <span class="arc-sub-subtitle">& Discoveries</span>
                </div>
                <div>
                  <label class="exploration-progress arc-progress">PROGRESS <input type="number" name="explorationProgress" value={inputs.explorationProgress || ""} onChange={handleChange} min="1" max="99"/></label>
                </div>
                <div class="exploration-notes-container">
                  <label class="exploration_notes">EXPLORATION & DISCOVERIES NOTES<textarea name="explorationNotes" value={inputs.explorationNotes || ""} onChange={handleChange} /></label>
                </div>
              </div>

              <div class="companionship-container arc-container">
                <div class="arc-subtitle">
                  <span class="companionship-title">Companionship</span><br/>
                  <span class="arc-sub-subtitle">& Alliances</span>
                </div>
                <label class="companionship-progress arc-progress">PROGRESS <input type="number" name="companionshipProgress" value={inputs.companionshipProgress || ""} onChange={handleChange} min="1" max="99"/></label>

                <div class="companionship-notes-container">
                  <label class="companionship_notes">COMPANIONS AND ALLIANCES NOTES<textarea name="companionshipNotes" value={inputs.companionshipNotes || ""} onChange={handleChange} /></label>
                </div>
              </div>

            </div>

          <div class="notes-container">
            <label class="equipment_notes">EQUIPMENT + OTHER NOTES <textarea name="notes" value={inputs.notes || ""} onChange={handleChange} /></label>
          </div>

        </div>

        
      </form>
    </Layout>
  )
}

export default CharacterStats
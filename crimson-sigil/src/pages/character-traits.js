import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Trait from '/src/@rocketseat/gatsby-theme-docs/components/Trait'

import alchemist_art from '/src/images/alchemist.jpg';
import arcanist_art from '/src/images/arcanist.jpg';
import assassin_art from '/src/images/assassin.jpg';
import bard_art from '/src/images/bard.jpg';
import berserker_art from '/src/images/berserker.jpg';
import blademaster_art from '/src/images/blademaster.jpg';
import bloodletter_art from '/src/images/bloodletter.jpg';
import brawler_art from '/src/images/brawler.jpg';
import cutthroat_art from '/src/images/cutthroat.jpg';
import duelist_art from '/src/images/duelist.jpg';
import explorer_art from '/src/images/explorer.jpg';
import exorcist_art from '/src/images/exorcist.jpg';
import faeborn_art from '/src/images/faeborn.jpg';
import halffiend_art from '/src/images/halffiend.jpg';
import illusionist_art from '/src/images/illusionist.jpg';
import ironclad_art from '/src/images/ironclad.jpg';
import knight_art from '/src/images/knight.jpg';
import lightfooted_art from '/src/images/lightfooted.jpg';
import marksman_art from '/src/images/marksman.jpg';
import monsterhunter_art from '/src/images/monsterhunter.jpg';
import nobleblood_art from '/src/images/nobleblood.jpg';
import pretender_art from '/src/images/pretender.jpg';
import rider_art from '/src/images/rider.jpg';
import scholar_art from '/src/images/scholar.jpg';
import shapeshifter_art from '/src/images/shapeshifter.jpg';
import shieldbearer_art from '/src/images/shieldbearer.jpg';
import skirmisher_art from '/src/images/skirmisher.jpg';
import swashbuckler_art from '/src/images/swashbuckler.jpg';
import tactician_art from '/src/images/tactician.jpg';
import thief_art from '/src/images/thief.jpg';
import branded_art from '/src/images/branded.jpg';
import beastmaster_art from '/src/images/beastmaster.jpg';
import commander_art from '/src/images/commander.jpg';
import conqueror_art from '/src/images/conqueror.jpg';
import demonslayer_art from '/src/images/demonslayer.jpg';
import hybridguardian_art from '/src/images/hybridguardian.jpg';
import magus_art from '/src/images/magus.jpg';
import necromancer_art from '/src/images/necromancer.jpg';
import paladin_art from '/src/images/paladin.jpg';
import spellblade_art from '/src/images/spellblade.jpg';
import summoner_art from '/src/images/summoner.jpg';
import wielder_art from '/src/images/wielder.jpg';
import wildwarden_art from '/src/images/wildwarden.jpg';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "GENERAL TRAITS"},
    {depth: 3, value: "ALCHEMIST"},
    {depth: 3, value: "ARCANIST"},
    {depth: 3, value: "ASSASSIN"},
    {depth: 3, value: "BARD"},
    {depth: 3, value: "BERSERKER"},
    {depth: 3, value: "BLADEMASTER"},
    {depth: 3, value: "BLOODLETTER"},
    {depth: 3, value: "BRAWLER"},
    {depth: 3, value: "CUTTHROAT"},
    {depth: 3, value: "DUELIST"},
    {depth: 3, value: "EXPLORER"},
    {depth: 3, value: "EXORCIST"},
    {depth: 3, value: "FAEBORN"},
    {depth: 3, value: "HALF-FIEND"},
    {depth: 3, value: "ILLUSIONIST"},
    {depth: 3, value: "IRONCLAD"},
    {depth: 3, value: "KNIGHT"},
    {depth: 3, value: "LIGHT-FOOTED"},
    {depth: 3, value: "MARKSMAN"},
    {depth: 3, value: "MONSTER HUNTER"},
    {depth: 3, value: "NOBLE BLOOD"},
    {depth: 3, value: "PRETENDER"},
    {depth: 3, value: "RIDER"},
    {depth: 3, value: "SCHOLAR"},
    {depth: 3, value: "SHAPESHIFTER"},
    {depth: 3, value: "SHIELD-BEARER"},
    {depth: 3, value: "SKIRMISHER"},
    {depth: 3, value: "SWASHBUCKLER"},
    {depth: 3, value: "TACTICIAN"},
    {depth: 3, value: "THIEF"},
    {depth: 2, value: "PRESTIGE TRAITS"},
    {depth: 3, value: "BRANDED"},
    {depth: 3, value: "BEASTMASTER"},
    {depth: 3, value: "COMMANDER"},
    {depth: 3, value: "CONQUEROR"},
    {depth: 3, value: "DEMON SLAYER"},
    {depth: 3, value: "HYBRID GUARDIAN"},
    {depth: 3, value: "MAGUS"},
    {depth: 3, value: "NECROMANCER"},
    {depth: 3, value: "PALADIN"},
    {depth: 3, value: "SPELLBLADE"},
    {depth: 3, value: "SUMMONER"},
    {depth: 3, value: "WIELDER"},
    {depth: 3, value: "WILDWARDEN"},
]

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [inputs, setInputs] = useState(() => {
    const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
    let savedTraits = JSON.parse(savedTraitsStr)
    if ( !savedTraits ) {
      savedTraits = {};
    }
    if ( !savedTraits['trait-toggle']) {
      savedTraits['trait-toggle'] = 'toggleVisibilityAll';
    }
    return savedTraits;
  })

  const handleChange = (event) => {
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
        if ( name == "trait-toggle") {
          toggleVisibility(event.target.id);
        }
        setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("traits", JSON.stringify(inputs))
    }

    // Update current traits textbox
    var active_traits_el = document.getElementById('active-traits-text');
    var all_traits_names_and_links = [];
    Object.keys(inputs).map((key, index) => {
        var element = document.getElementById(key);
        if ( element && element.type == "checkbox" ) {
            var trait_label = element.nextElementSibling;
            var trait_name = trait_label.querySelector('.trait-name').innerHTML;
            if ( element.checked == true ) {
                all_traits_names_and_links.push({'name': trait_name, 'id': key});
            }
        }
    })
    var all_traits_anchors = [];
    var activeTraits = "";
    if ( all_traits_names_and_links.length > 0 ) {
        all_traits_names_and_links.forEach((element) => {
            all_traits_anchors.push('<a href="/character-traits#'+element.id+'">'+element.name+'</a>');
        })
        activeTraits = all_traits_anchors.join(", ");
        active_traits_el.innerHTML = activeTraits;
    } else {
        activeTraits = "NONE YET. Pick 3 TRAITS to start."
        active_traits_el.textContent = activeTraits;
    }
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("activeTraits", activeTraits);
      toggleVisibility(inputs['trait-toggle']);
    }
  }

  async function toggleVisibility(setting) {
    console.log('toggling...', setting);
    if ( setting == "toggleVisibilityAll") {
      var elements = document.getElementsByClassName('trait');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
      }
      await delay(200);
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('invisible');
      }
    } else {
      var elements = document.getElementsByClassName('trait inactive');
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('invisible');
      }
      await delay(600);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    }
  }

  return (
    <Layout title="Character Traits" headings={headings}>
      <Seo title="Character Traits" />
      <div class="active-traits">
        <span id="active-traits-title">Your current TRAITS: </span>
        <span id="active-traits-text"></span>
      </div>

      <form class="character-traits">

        <div id="toggle-visibility-container">
          <input id="toggleVisibilityAll" class="toggleVisibilityInput" type="radio" name="trait-toggle" value={inputs.toggleVisibilityAll || "toggleVisibilityAll"} onChange={handleChange} checked={inputs['trait-toggle']==="toggleVisibilityAll"}/><label for="toggleVisibilityAll" class="toggleVisibilityLabel">SHOW ALL</label>
          <input id="toggleVisibilityActiveOnly" class="toggleVisibilityInput" type="radio" name="trait-toggle" value={inputs.toggleVisibilityActiveOnly || "toggleVisibilityActiveOnly"} onChange={handleChange} checked={inputs['trait-toggle']==="toggleVisibilityActiveOnly"}/><label for="toggleVisibilityActiveOnly" class="toggleVisibilityLabel">ACTIVE ONLY</label>
        </div>

        <div class="traits-container" id="general-traits-container">
            <h2 id="general-traits">GENERAL TRAITS</h2>

            <blockquote><p>General Traits can be obtained during Character Creation and any time you desire to <a href="/prompts/fate-prompts#improve-yourself">IMPROVE YOURSELF</a> and pay for a new one with XP.</p></blockquote>

            <Trait name="Alchemist" title="ALCHEMIST" art={alchemist_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert brewer of potions and hurler of alchemical flasks. When you <a href="/prompts/general-prompts#use-your-gear">USE YOUR GEAR</a> to produce a potion or throwable flask, you consume 1 less <b>GEAR</b>. Its effect can be anything you can think of that would make sense.</span>
            </Trait>

            <Trait name="Arcanist" title="ARCANIST" art={arcanist_art} inputs={inputs} handleChange={handleChange}>
              <span>You’ve learnt to harness the power of the arcane elements (fire, ice, electricity, etc). You can produce small effects that give you a <span class="boon">BOON</span> whenever you test your <span class="stat">HASTE</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, or <a href="/prompts/general-prompts#clash">CLASH</a>.</span>
            </Trait>

            <Trait name="Assassin" title="ASSASSIN" art={assassin_art} inputs={inputs} handleChange={handleChange}>
              <span>You’ve perfected the art of killing swiftly and without being seen. Gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> for any action related to assessing an enemy’s weakness or approaching them stealthily. Additionally, you can <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">GUILE</span> if you are <i class="primary">IN CONTROL</i> and your victim is unaware of your presence or your immediate intentions.</span>
            </Trait>

            <Trait name="Bard" title="BARD" art={bard_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert in storytelling, reciting heroic poems and charming others with your flamboyance. Gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">CHARM</span>. Additionally, when you entertain or inspire others they gain a <span class="boon">BOON</span> to <a href="/prompts/recovery-prompts#relax">RELAX</a>.</span>
            </Trait>

            <Trait name="Berserker" title="BERSERKER" art={berserker_art} inputs={inputs} handleChange={handleChange}>
              <span>When you channel your wild rage, you gain a <span class="boon">BOON</span> to any attempt to <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> with <span class="stat">MIGHT</span> or <span class="stat">HASTE</span>. Additionally, You can lose <b>-X WILL</b> to gain <b>+X</b> <span class="boon">BOONS</span> (as many times as you want) as long as your <b>WILL</b> is above 0. When the fray ends and your rage dwindles, you are <i class="secondary">IN A BAD SPOT</i> and must <a href="/prompts/suffer-prompts#endure-stress">ENDURE STRESS (minor)</a>.</span>
            </Trait>

            <Trait name="Blademaster" title="BLADEMASTER" art={blademaster_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a long blade, gain a <span class="boon">BOON</span> when you test your <span class="stat">MIGHT</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</span>
            </Trait>

            <Trait name="Bloodletter" title="BLOODLETTER" art={bloodletter_art} inputs={inputs} handleChange={handleChange}>
              <span>You know of many techniques to heal and provide treatment. You gain a <span class="boon">BOON</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a> others with your <span class="stat">WITS</span> (alternatively, they gain a <span class="boon">BOON</span> if they receive treatment from you by testing their <span class="stat">MIGHT</span>), and if successful, they recover <b>+1 GRIT</b>.</span>
            </Trait>

            <Trait name="Brawler" title="BRAWLER" art={brawler_art} inputs={inputs} handleChange={handleChange}>
              <span>gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> as long as you are leveraging your unarmed fighting prowess.</span>
            </Trait>

            <Trait name="Cutthroat" title="CUTTHROAT" art={cutthroat_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a short blade like a dagger or knife, gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> in close combat. Additionally, you can <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">HASTE</span> instead of <span class="stat">MIGHT</span>.</span>
            </Trait>

            <Trait name="Duelist" title="DUELIST" art={duelist_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert in one-on-one bouts. When confronting a single enemy by yourself, gain a <span class="boon">BOON</span> in any test made against them. Additionally, before <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILLING A CHALLENGE</a> to end the duel, you can lose <b>-1 WILL</b> to be <i class="primary">IN CONTROL</i>.</span>
            </Trait>

            <Trait name="Explorer" title="EXPLORER" art={explorer_art} inputs={inputs} handleChange={handleChange}>
              <span>You know your way around the wilds and can orient yourself even in the most desolate or twisted places. Gain a <span class="boon">BOON</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> for actions related to pathfinding, tracking or navigating labyrinthic places, or when you test your <span class="stat">WITS</span> to <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> in the wilderness.</span>
            </Trait>

            <Trait name="Exorcist" title="EXORCIST" art={exorcist_art} inputs={inputs} handleChange={handleChange}>
              <span>You know how to confront and banish demonic entities and other outsiders. Gain a <span class="boon">BOON</span> for any action related to dealing with them or possessed individuals. Additionally, you gain a <span class="boon">BOON</span> whenever you provide care with your <span class="stat">WITS</span> to <a href="/prompts/recovery-prompts#heal">HEAL</a> someone affected or cursed by evil, and they recover <b>+1 GRIT</b> if successful.</span>
            </Trait>

            <Trait name="Faeborn" title="FAEBORN" art={faeborn_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a descendant or half-breed of the Fae: mythical creatures like Elves, Fairies, Satyrs, etc. You have a “tell” (pointy ears, small horns, strange-colored eyes, etc). You can produce minor illusions that give a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">GUILE</span>, and your <i>Glamour</i> gives you a <span class="boon">BOON</span> whenever you <a href="/prompts/general-prompts#compel">COMPEL</a>.</span>
            </Trait>

            <Trait name="HalfFiend" title="HALF-FIEND" art={halffiend_art} inputs={inputs} handleChange={handleChange}>
              <span>You are the spawn of a human and a denizen of deviltry like a Vampire, Demon, Incubus / Succubus, etc. Your evil heritage manifests mildly; both their weaknesses and strengths. Choose a <b>vulnerability</b> you inherited (sunlight, holy symbols, silver, etc): You gain a <span class="bane">BANE</span> whenever you are exposed to or affected by it. Also choose an <b>ability</b> you get (superhuman strength, agility or resistance, invulnerability to an element or source, a specific power, etc): You gain a <span class="boon">BOON</span> whenever you harness it for any action, but you must <a href="/prompts/suffer-prompts#endure-stress">ENDURE STRESS (minor)</a> whenever you do.</span>
            </Trait>

            <Trait name="Illusionist" title="ILLUSIONIST" art={illusionist_art} inputs={inputs} handleChange={handleChange}>
              <span>You can create minor arcane images or apparitions that can distract your foes. With the right conditions (like scenery, lighting or enough plausibility), you might deceive someone into thinking they are real. Gain a <span class="boon">BOON</span> when you use your illusions and test your <span class="stat">GUILE</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, <a href="/prompts/general-prompts#compel">COMPEL</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a>.</span>
            </Trait>

            <Trait name="Ironclad" title="IRONCLAD" art={ironclad_art} inputs={inputs} handleChange={handleChange}>
              <span>You have extensive training in wearing heavy armor. Gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend. Additionally, when you <a href="/prompts/general-prompts#clash">CLASH</a> and you obtain a <span class="secondary bold">FAILURE</span>, you gain a <span class="boon">BOON</span> to your next action by leveraging the surprising protection of your armor.</span>
            </Trait>

            <Trait name="Knight" title="KNIGHT" art={knight_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an honorbound stalwart of your faith or of an important liege. You gain a <span class="boon">BOON</span> when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> with <span class="stat">CHARM</span>, or when you <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">CHARM</span> or <span class="stat">MIGHT</span>, as long as you are telling the truth. Additionally, you can lose <b>-1 WILL</b> to gain a <span class="boon">BOON</span> when attempting to <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a>.</span>
            </Trait>

            <Trait name="LightFooted" title="LIGHT-FOOTED" art={lightfooted_art} inputs={inputs} handleChange={handleChange}>
              <span>You are agile and graceful, resorting to your nimbleness to get out of tight spots. You gain a <span class="boon">BOON</span> when you test your <span class="stat">HASTE</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>. If you are <i class="secondary">IN A BAD SPOT</i>, you gain 2 <span class="boon">BOONS</span> instead.</span>
            </Trait>

            <Trait name="Marksman" title="MARKSMAN" art={marksman_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert sharpshooter. Gain a <span class="boon">BOON</span> when you use a ranged weapon to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">HASTE</span>. Additionally, you can lose <b>-X GEAR</b> to gain <b>+X </b><span class="boon">BOONS</span> by spending more ammo or ranged supplies for your shots, as long as your <b>GEAR</b> is above 0.</span>
            </Trait>

            <Trait name="MonsterHunter" title="MONSTER HUNTER" art={monsterhunter_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an experienced hunter of all sorts of strange and threatening creatures. Gain a <span class="boon">BOON</span> whenever you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> to hunt or confront a supernatural denizen, or when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> related to said hunt or confrontation.</span>
            </Trait>

            <Trait name="NobleBlood" title="NOBLE BLOOD" art={nobleblood_art} inputs={inputs} handleChange={handleChange}>
              <span>You come from a noble family or have ties with high society. You gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> by leveraging your effluent vocabulary and social station. Additionally, you gain a <span class="boon">BOON</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a>, <a href="/prompts/recovery-prompts#relax">RELAX</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> in a hub of civilization where your influence and position could give you an edge.</span>
            </Trait>

            <Trait name="Pretender" title="PRETENDER" art={pretender_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a master of disguise and adopting false identities. When you do so, gain a <span class="boon">BOON</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> (or 2 <span class="boon">BOONS</span> if you spend <b>-1 GEAR</b> to disguise yourself properly). Additionally, if you reveal your true identity in a dramatic moment, gain a <span class="boon">BOON</span> to your next action.</span>
            </Trait>

            <Trait name="Rider" title="RIDER" art={rider_art} inputs={inputs} handleChange={handleChange}>
              <span>You are adept at riding horses or any other similar creatures. Gain a <span class="boon">BOON</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> while doing so. Additionally, if either you or your mount were to suffer any sort of damage or external ailment, you can choose to redirect that damage to you or the creature.</span>
            </Trait>

            <Trait name="Scholar" title="SCHOLAR" art={scholar_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a walking library of both common and esoteric knowledge. Gain a <span class="boon">BOON</span> when you exploit your insight and wisdom and test your <span class="stat">WITS</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/recovery-prompts#heal">HEAL</a>, <a href="/prompts/recovery-prompts#relax">RELAX</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a>.</span>
            </Trait>

            <Trait name="Shapeshifter" title="SHAPESHIFTER" art={shapeshifter_art} inputs={inputs} handleChange={handleChange}>
              <span>You can turn partially or completely into a specific animal of your choice (selected when you gain this trait). If you partially turn a body part, you gain a <span class="boon">BOON</span> to any action that tests either <span class="stat">MIGHT</span>, <span class="stat">HASTE</span> or <span class="stat">GUILE</span> (your choice, depending on the nature of the transformation), but gain a <span class="bane">BANE</span> to either <span class="stat">WITS</span> or <span class="stat">CHARM</span>. This effect lasts a whole scene. If you completely shapeshift into the animal form, you gain a <span class="boon">BOON</span> to two of those stats of your choice, but also gain a <span class="bane">BANE</span> to both <span class="stat">WITS</span> and <span class="stat">CHARM</span> for the remainder of the scene. While in animal form, you can do anything the creature could normally do, but lose any human physical abilities (like speaking, using opposable thumbs, etc). Additionally, at every full moon, you turn uncontrollably into your full animal form and surrender to your most basic instincts (gaining a <span class="bane">BANE</span> to any <span class="stat">WITS</span> or <span class="stat">CHARM</span> test to resist your primal urges).</span>
            </Trait>

            <Trait name="ShieldBearer" title="SHIELD-BEARER" art={shieldbearer_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a shield, you gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to cover yourself or to resist the pain when you <a href="/prompts/suffer-prompts#endure-harm">ENDURE HARM</a>. Additionally, if you decide to sacrifice your shield, you can negate all harm from a single source, and if you were to be put <i class="secondary">IN A BAD SPOT</i>, you stay <i class="primary">IN CONTROL</i>.</span>
            </Trait>

            <Trait name="Skirmisher" title="SKIRMISHER" art={skirmisher_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a spear, halberd or any other weapon with long reach, you gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend from a close-quarters attack. Additionally, if you are confronting an enemy with lesser reach and you <a href="/prompts/general-prompts#clash">CLASH</a>, you can either gain a <span class="boon">BOON</span> to that action or give it to an ally that is fighting at your side.</span>
            </Trait>

            <Trait name="Swashbuckler" title="SWASHBUCKLER" art={swashbuckler_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a master of fencing in cramped spaces or hazardous environments, and have learnt to leverage your surroundings to your advantage. Gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> in said situations (or 2 <span class="boon">BOONS</span> if you are <i class="secondary">IN A BAD SPOT</i>).</span>
            </Trait>

            <Trait name="Tactician" title="TACTICIAN" art={tactician_art} inputs={inputs} handleChange={handleChange}>
              <span>You think many moves ahead in almost every situation. Gain a <span class="boon">BOON</span> when you test your <span class="stat">WITS</span> or <span class="stat">GUILE</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>. Additionally, if you lose <b>-1 WILL</b> and give an order (verbal or gesticulated) to an ally, they gain a <span class="boon">BOON</span> to their next action.</span>
            </Trait>

            <Trait name="Thief" title="THIEF" art={thief_art} inputs={inputs} handleChange={handleChange}>
              <span>You have mastered the arts of pickpocketing, breaking and entering, and disabling security measures. Gain a <span class="boon">BOON</span> when you use your <span class="stat">WITS</span> or <span class="stat">GUILE</span> for actions related to any of those situations. Additionally, if you are <i class="primary">IN CONTROL</i>, you can use your <span class="stat">GUILE</span> to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> in a deceptive manner.</span>
            </Trait>

        </div>

        <br/>
        <hr/>
        <br/>

        <div class="traits-container" id="prestige-traits-container">
            <h2 id="prestige-traits">PRESTIGE TRAITS</h2>

            <blockquote><p>These TRAITS cannot be obtained normally during character creation or by paying XP. They each have a condition that must be achieved, usually by <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILLING A CHALLENGE</a> (of LONG RANK or greater) that had said condition as its objective or consequence.<br/><br/>Players are encouraged to actively pursue different objectives of their own volition, in order to gain some of these Prestige Traits.</p></blockquote>

            <Trait name="Branded" title="BRANDED" art={branded_art} inputs={inputs} handleChange={handleChange}>
              <span>You have been branded by some powerful demonic entity. You can sense the presence of nearby evil, and it can sense you. You gain a <span class="boon">BOON</span> for any action related to dealing directly with demons or other fiends, but at the end of that dramatic situation you must <a href="/prompts/suffer-prompts#endure-harm">ENDURE serious HARM</a> or <a href="/prompts/suffer-prompts#endure-stress">STRESS</a> (your choice), because of the physical or spiritual pain your brand instills.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you survive or escape a demonic ritual or rite in which you were marked for sacrifice or worse</i>.</p>
            </Trait>

            <Trait name="Beastmaster" title="BEASTMASTER" art={beastmaster_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a friend and protector to many wild beasts. You can communicate verbally with most animals (they respond with sounds or gestures you can understand). You gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> in this way. Additionally, once per session you can call forth the aid of wild creatures, which, provided they can reach you, will help to the best of their capabilities with any action they could reasonably assist with (giving you a <span class="boon">BOON</span> for each of those tests until the end of the scene).</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you do a great favor to the spirit animal of the forest and they accept you as a friend</i>.</p>
            </Trait>

            <Trait name="Commander" title="COMMANDER" art={commander_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a natural leader. Gain a <span class="boon">BOON</span> whenever you test your <span class="stat">WITS</span> or <span class="stat">CHARM</span> to command others or further your objectives from a ruling position. Additionally, if you lose <b>-1 WILL</b> and give an order (verbal or gesticulated) to your allies, they all gain a <span class="boon">BOON</span> for their next action.  </span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you take the lead in a perilous incursion or dramatic situation and you gain the admiration of your allies</i>.</p>
            </Trait>

            <Trait name="Conqueror" title="CONQUEROR" art={conqueror_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a battlemaster, a subjugator and a large-scale strategist. You gain a <span class="boon">BOON</span> to any action related to commanding large groups of people against an enemy, or in endeavors related to the politics of war. Additionally, when you are in battle, you gain a <span class="boon">BOON</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">WITS</span> or <span class="stat">GUILE</span>.</span>
              <br/><br/><hr/><br/>
              <p>acquired when <i>you subdue a community or faction, claim their lands or belongings as your own and rule over them</i>.</p>
            </Trait>

            <Trait name="DemonSlayer" title="DEMON SLAYER" art={demonslayer_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an experienced hunter of demons and other evil outsiders. Gain a <span class="boon">BOON</span> whenever you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a>, <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/general-prompts#clash">CLASH</a> for actions related to the extermination of said beings.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you slay a powerful demon tormenting a place or a community</i>.</p>
            </Trait>

            <Trait name="HybridGuardian" title="HYBRID GUARDIAN" art={hybridguardian_art} inputs={inputs} handleChange={handleChange}>
              <span>You belong to a secretive order of guardians that, in order to protect mankind, mutate themselves into fiendish hybrids. You can use demonic powers and even temporarily reshape parts of your body, which gives a <span class="boon">BOON</span> to any action at the cost of losing <b>-1 WILL</b> each time. At the end of the fray, or when you decide to return back to normal, you must <a href="/prompts/suffer-prompts#endure-stress">ENDURE serious STRESS</a> with a <span class="bane">BANE</span> to avoid the temptation of succumbing and transforming into that which you’ve sworn to fight.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you submit yourself to the forbidden rite of transformation in which demonic blood is transfused into your body</i>.</p>
            </Trait>

            <Trait name="Magus" title="MAGUS" art={magus_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a powerful sorcerer, a force to be reckoned with. Gain a <span class="boon">BOON</span> whenever you test your <span class="stat">WITS</span> or <span class="stat">HASTE</span> to produce a powerful magical effect for any action, but lose <b>-1 WILL</b> each time.</span>
              <br/><br/><hr/><br/>
              <p>Acquired once <i>you have unearthed an ancient arcane tome and spent a season studying its texts and practicing its rituals</i>.</p>
            </Trait>

            <Trait name="Necromancer" title="NECROMANCER" art={necromancer_art} inputs={inputs} handleChange={handleChange}>
              <span>You wield the power of death magic and chaos energies. You can raise the dead to make them become your temporal minions. Spend <b>-1 WILL</b> to raise a corpse as a zombie or skeleton that obeys your mental orders and gives you a <span class="boon">BOON</span> in any action they could reasonably help with. There is no limit apart from your <b>WILL</b> to the number of undead you can raise in this way, but they collapse as ashes at the end of the scene. Additionally, you can heal your wounds by exchanging <b>+GRIT</b> for <b>-WILL</b> at any time you want.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you study the forbidden scrolls of necromancy and perform a ritual of soul corruption on yourself</i>.</p>
            </Trait>

            <Trait name="Paladin" title="PALADIN" art={paladin_art} inputs={inputs} handleChange={handleChange}>
              <span>You are the champion of your faith. You can lose <b>-1 WILL</b> to gain a <span class="boon">BOON</span> to any action in which you channel the energy of holy radiance and purity. Additionally, you gain a <span class="boon">BOON</span> for any attempt to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> against an individual that might respect or admire your cause.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you participate in the right of passage of a sacred order and you swear an oath of justice and virtue</i>.</p>
            </Trait>

            <Trait name="Spellblade" title="SPELLBLADE" art={spellblade_art} inputs={inputs} handleChange={handleChange}>
              <span>You can channel your sorcery into the arts of melee combat. You can produce a blade of pure magic, a shield of arcane energy or any other warring implement you can imagine. This gives you a <span class="boon">BOON</span> to any attempt to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> while in combat, but in order to manifest this arcane weapon you must <a href="/prompts/suffer-prompts#endure-stress">ENDURE STRESS (serious)</a>.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you finish training in the lost arts of the legendary war-mages from a suitable teacher</i>.</p>
            </Trait>

            <Trait name="Summoner" title="SUMMONER" art={summoner_art} inputs={inputs} handleChange={handleChange}>
              <span>You have perfected the art of mystic invocations, being able to summon a mythical creature under your command. <a href="/prompts/suffer-prompts#endure-stress">ENDURE STRESS</a> to cast the conjuration (<i><span class="secondary">serious</span></i> for small or dim-witted creatures, <i><span class="secondary">major</span></i> for bigger, stronger or smarter ones). Each summon gives you a <span class="boon">BOON</span> (or two <span class="boon">BOONS</span> if it’s a strong one) to any action it could reasonably help with. At the end of the scene, you must <a href="/prompts/general-prompts#compel">COMPEL</a> it to be dispelled obediently (with a <span class="bane">BANE</span> if its a strong creature); on a <span class="secondary">FAILURE</span> it disobeys or turns against you: <a href="/prompts/fate-prompts#pay-the-consequences">PAY THE CONSEQUENCES</a>.</span>
              <br/><br/><hr/><br/>
              <p>Acquired once <i>you have discovered an ancient ritual of invocation and successfully performed its procedures in a place of great power by summoning a being much more powerful than yourself</i>.</p>
            </Trait>

            <Trait name="Wielder" title="WIELDER" art={wielder_art} inputs={inputs} handleChange={handleChange}>
              <span>You carry a legendary weapon. This strange but powerful artifact will grant you a <span class="boon">BOON</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> by using it. But it has a mind of its own; a strange aura that could consume you if you are not careful. After perusing its power, <a href="/prompts/suffer-prompts#endure-stress">ENDURE STRESS (minor)</a>. Additionally, once per session you can attempt to attune and communicate with it in order to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> with what it might know.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you have found a legendary weapon that is more famous than yourself and has been indelibly linked with the souls of its previous wielders</i>.</p>
            </Trait>

            <Trait name="Wildwarden" title="WILDWARDEN" art={wildwarden_art} inputs={inputs} handleChange={handleChange}>
              <span>Your domain is a region of wilderness that you know like the palm of your hand. You can sense when anything out of the ordinary happens there, and whenever you are in its premises, you gain a <span class="boon">BOON</span> to any action. Additionally, you provide a <span class="boon">BOON</span> to any ally that attempts to <a href="/prompts/recovery-prompts#heal">HEAL</a>, <a href="/prompts/recovery-prompts#relax">RELAX</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> in the area with your blessing.</span>
              <br/><br/><hr/><br/>
              <p>Acquired once <i>you have become one with a patch of wilderness and protected it from intruders for a year and a day</i>.</p>
            </Trait>

        </div>

        <br/>
        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats
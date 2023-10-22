import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Trait from '/src/@rocketseat/gatsby-theme-docs/components/Trait'

import placeholder_art from '/src/images/placeholder.jpg';

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
    {depth: 3, value: "WIELDER"},
    {depth: 3, value: "WILDWARDEN"},
]

  const [inputs, setInputs] = useState(() => {
    const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
    const savedTraits = JSON.parse(savedTraitsStr)
    return savedTraits || {
    }
  })

  const handleChange = (event) => {
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
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

        <div class="traits-container" id="general-traits-container">
            <h2 id="general-traits">GENERAL TRAITS</h2>

            <blockquote><p>General Traits can be obtained during Character Creation and any time you desire to <a href="/prompts/fate-prompts#improve-yourself">IMPROVE YOURSELF</a> and pay for a new one with XP.</p></blockquote>

            <Trait name="Alchemist" title="ALCHEMIST" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert brewer of potions and hurler of alchemical flasks. When you USE YOUR GEAR to produce a potion or throwable flask, you consume 1 less GEAR. Its effect can be anything you can think of that would make sense.</span>
            </Trait>

            <Trait name="Arcanist" title="ARCANIST" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You’ve learnt to harness the power of the arcane elements (fire, ice, electricity, etc). You can produce small effects that give you a BOOST whenever you test your HASTE to ACT UNDER PRESSURE, SECURE AN ADVANTAGE, or CLASH.</span>
            </Trait>

            <Trait name="Assassin" title="ASSASSIN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You’ve perfected the art of killing swiftly and without being seen. Gain a BOOST when you SECURE AN ADVANTAGE for any action related to assessing an enemy’s weakness or approaching them stealthily. Additionally, you can CLASH with GUILE if you are IN CONTROL and your victim is unaware of your presence or your immediate intentions.</span>
            </Trait>

            <Trait name="Bard" title="BARD" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert in storytelling, reciting heroic poems and charming others with your flamboyance. Gain a BOOST when you COMPEL or SECURE AN ADVANTAGE with CHARM. Additionally, when you entertain or inspire others they gain a BOOST to RELAX.</span>
            </Trait>

            <Trait name="Berserker" title="BERSERKER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>When you channel your wild rage, you gain a BOOST to any attempt to CLASH or ACT UNDER PRESSURE with MIGHT or HASTE. Additionally, You can lose -X WILL to gain +X BOOSTS (as many times as you want) as long as your WILL is above 0. When the fray ends and your rage dwindles, you are IN A BAD SPOT and must ENDURE STRESS (minor).</span>
            </Trait>

            <Trait name="Blademaster" title="BLADEMASTER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a long blade, gain a <span class="boost">BOOST</span> when you test your <span class="stat">MIGHT</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</span>
            </Trait>

            <Trait name="Bloodletter" title="BLOODLETTER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You know of many techniques to heal and provide treatment. You gain a BOOST when you HEAL others with your WITS (alternatively, they gain a BOOST if they receive treatment from you by testing their MIGHT), and if successful, they recover +1 GRIT.</span>
            </Trait>

            <Trait name="Brawler" title="BRAWLER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>gain a BOOST when you ACT UNDER PRESSURE, SECURE AN ADVANTAGE or CLASH as long as you are leveraging your unarmed fighting prowess.</span>
            </Trait>

            <Trait name="Cutthroat" title="CUTTHROAT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a short blade like a dagger or knife, gain a BOOST when you CLASH or SECURE AN ADVANTAGE in close combat. Additionally, you can CLASH with HASTE instead of MIGHT.</span>
            </Trait>

            <Trait name="Duelist" title="DUELIST" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert in one-on-one bouts. When confronting a single enemy by yourself, gain a BOOST in any test made against them. Additionally, before FULFILLING A CHALLENGE to end the duel, you can lose 1 WILL to be IN CONTROL.</span>
            </Trait>

            <Trait name="Explorer" title="EXPLORER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You know your way around the wilds and can orient yourself even in the most desolate or twisted places. Gain a BOOST whenever you SECURE AN ADVANTAGE or GATHER INFORMATION for actions related to pathfinding, tracking or navigating labyrinthic places, or when you test your WITS to RESUPPLY in the wilderness.</span>
            </Trait>

            <Trait name="Exorcist" title="EXORCIST" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You know how to confront and banish demonic entities and other outsiders. Gain a BOOST for any action related to dealing with them or possessed individuals. Additionally, you gain a BOOST whenever you provide care with your WITS to HEAL someone affected or cursed by evil, and they recover +1 GRIT if successful.</span>
            </Trait>

            <Trait name="Faeborn" title="FAEBORN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a descendant or half-breed of the Fae: mythical creatures like Elves, Fairies, Satyrs, etc. You have a “tell” (pointy ears, small horns, strange-colored eyes, etc). You can produce minor illusions that give a BOOST when you ACT UNDER PRESSURE or SECURE AN ADVANTAGE with GUILE, and your Glamour gives you a BOOST whenever you COMPEL.</span>
            </Trait>

            <Trait name="HalfFiend" title="HALF-FIEND" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are the spawn of a human and a denizen of deviltry like a Vampire, Demon, Incubus / Succubus, etc. Your evil heritage manifests mildly; both their weaknesses and strengths. Choose a vulnerability you inherited (sunlight, holy symbols, silver, etc): You gain a SETBACK whenever you are exposed to or affected by it. Also choose a boon you get (superhuman strength, agility or resistance, invulnerability to an element or source, a specific power, etc): You gain a BOOST whenever you harness it for any action, but you must ENDURE STRESS (minor) whenever you do.</span>
            </Trait>

            <Trait name="Ironclad" title="IRONCLAD" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You have extensive training in wearing heavy armor. Gain a BOOST when you ACT UNDER PRESSURE to defend. Additionally, when you CLASH and you obtain a failure, you gain a BOOST to your next action by leveraging the surprising protection of your armor.</span>
            </Trait>

            <Trait name="Knight" title="KNIGHT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an honorbound stalwart of your faith or of an important liege. You gain a BOOST when you ACCEPT A CHALLENGE with CHARM, or when you COMPEL with CHARM or MIGHT, as long as you are telling the truth. Additionally, you can lose -1 WILL to gain a BOOST when attempting to FULFILL A CHALLENGE.</span>
            </Trait>

            <Trait name="LightFooted" title="LIGHT-FOOTED" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are agile and graceful, resorting to your nimbleness to get out of tight spots. You gain a BOOST when you test your HASTE to ACT UNDER PRESSURE, SECURE AN ADVANTAGE or CLASH. If you are IN A BAD SPOT, you gain 2 BOOSTS instead.</span>
            </Trait>

            <Trait name="Marksman" title="MARKSMAN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an expert sharpshooter. Gain a BOOST when you use a ranged weapon to SECURE AN ADVANTAGE or CLASH with HASTE. Additionally, you can lose -X GEAR to gain +X BOOSTS by spending more ammo or ranged supplies for your shots, as long as your GEAR is above 0.</span>
            </Trait>

            <Trait name="MonsterHunter" title="MONSTER HUNTER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an experienced hunter of all sorts of strange and threatening creatures. Gain a BOOST whenever you ACCEPT A CHALLENGE to hunt or confront a supernatural denizen, or when you GATHER INFORMATION or SECURE AN ADVANTAGE related to said hunt or confrontation.</span>
            </Trait>

            <Trait name="NobleBlood" title="NOBLE BLOOD" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You come from a noble family or have ties with high society. You gain a BOOST when you COMPEL by leveraging your effluent vocabulary and social station. Additionally, you gain a BOOST when you HEAL, RELAX or RESUPPLY in a hub of civilization where your influence and position could give you an edge.</span>
            </Trait>

            <Trait name="Pretender" title="PRETENDER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a master of disguise and adopting false identities. When you do so, gain a BOOST whenever you SECURE AN ADVANTAGE, GATHER INFORMATION or COMPEL (or 2 BOOSTS if you spend -1 GEAR to disguise yourself properly). Additionally, if you reveal your true identity in a dramatic moment, gain a BOOST to your next action.</span>
            </Trait>

            <Trait name="Rider" title="RIDER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are adept at riding horses or any other similar creatures. Gain a BOOST to ACT UNDER PRESSURE or CLASH while doing so. Additionally, if either you or your mount were to suffer any sort of damage or external ailment, you can choose to redirect that damage to you or the creature.</span>
            </Trait>

            <Trait name="Scholar" title="SCHOLAR" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a walking library of both common and esoteric knowledge. Gain a BOOST when you exploit your insight and wisdom and test your WITS to ACT UNDER PRESSURE, SECURE AN ADVANTAGE, GATHER INFORMATION, HEAL, RELAX or RESUPPLY.</span>
            </Trait>

            <Trait name="Shapeshifter" title="SHAPESHIFTER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You can turn partially or completely into a specific animal of your choice (selected when you gain this trait). If you partially turn a body part, you gain a BOOST to any action that tests either MIGHT, HASTE or GUILE (your choice, depending on the nature of the transformation), but gain a SETBACK to either WITS or CHARM. This effect lasts a whole scene. If you completely shapeshift into the animal form, you gain a BOOST to two of those stats of your choice, but also gain a SETBACK to both WITS and CHARM for the remainder of the scene. While in animal form, you can do anything the creature could normally do, but lose any human physical abilities (like speaking, using opposable thumbs, etc). Additionally, at every full moon, you turn uncontrollably into ful animal form and surrender to your most basic instincts (gaining a SETBACK to any WITS or CHARM test to resist your primal urges).</span>
            </Trait>

            <Trait name="ShieldBearer" title="SHIELD-BEARER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a shield, you gain a BOOST when you ACT UNDER PRESSURE to cover yourself or to resist the pain when you ENDURE HARM. Additionally, if you decide to sacrifice your shield, you can negate all harm from a single source, and if you were to be put IN A BAD SPOT, you stay IN CONTROL.</span>
            </Trait>

            <Trait name="Skirmisher" title="SKIRMISHER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>While wielding a spear, halberd or any other weapon with long reach, you gain a BOOST when you ACT UNDER PRESSURE to defend from a close-quarters attack. Additionally, if you are confronting an enemy with lesser reach and you CLASH, you can either gain a BOOST to that action or give it to an ally that is fighting at your side.</span>
            </Trait>

            <Trait name="Swashbuckler" title="SWASHBUCKLER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a master of fencing in cramped spaces or hazardous environments, and have learnt to leverage your surroundings to your advantage. Gain a BOOST when you ACT UNDER PRESSURE, SECURE AN ADVANTAGE or CLASH in said situations (or 2 BOOSTS if you are IN A BAD SPOT).</span>
            </Trait>

            <Trait name="Tactician" title="TACTICIAN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You think many moves ahead in almost every situation. Gain a BOOST when you test your WITS or GUILE to ACT UNDER PRESSURE or SECURE AN ADVANTAGE. Additionally, if you lose -1 WILL and give an order (verbal or gesticulated) to an ally, they gain a BOOST to their next action.</span>
            </Trait>

            <Trait name="Thief" title="THIEF" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You have mastered the arts of pickpocketing, breaking and entering, and disabling security measures. Gain a BOOST when you use your WITS or GUILE for actions related to any of those situations. Additionally, if you are IN CONTROL, you can use your GUILE to GATHER INFORMATION in a deceptive manner.</span>
            </Trait>

        </div>

        <br/>
        <hr/>
        <br/>

        <div class="traits-container" id="prestige-traits-container">
            <h2 id="prestige-traits">PRESTIGE TRAITS</h2>

            <blockquote><p>These TRAITS cannot be obtained normally during character creation or by paying XP. They each have a condition that must be achieved, usually by <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILLING A CHALLENGE</a> (of LONG RANK or greater) that had said condition as its objective or consequence.<br/><br/>Players are encouraged to actively pursue different objectives of their own volition, in order to gain some of these Prestige Traits.</p></blockquote>

            <Trait name="Branded" title="BRANDED" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You have been branded by some powerful demonic entity. You can sense the presence of nearby evil, and it can sense you. You gain a BOOST for any action related to dealing directly with demons or other fiends, but at the end of that dramatic situation you must ENDURE serious HARM or STRESS (your choice), because of the physical or spiritual pain your brand instills.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you survive or escape a demonic ritual or rite in which you were marked for sacrifice or worse</i>.</p>
            </Trait>

            <Trait name="Beastmaster" title="BEASTMASTER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a friend and protector to many wild beasts. You can communicate verbally with most animals (they respond with sounds or gestures you can understand). You gain a BOOST when you COMPEL or GATHER INFORMATION in this way. Additionally, once per session you can call forth the aid of wild creatures, which, provided they can reach you, will help to the best of their capabilities with any action they could reasonably assist with (giving you a BOOST for each of those tests until the end of the scene).</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you do a great favor to the spirit animal of the forest and they accept you as a friend</i>.</p>
            </Trait>

            <Trait name="Commander" title="COMMANDER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a natural leader. Gain a BOOST whenever you test your WITS or CHARM to command others or further your objectives from a ruling position. Additionally, if you lose -1 WILL and give an order (verbal or gesticulated) to your allies, they all gain a BOOST for their next action.  </span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you take the lead in a perilous incursion or dramatic situation and you gain the admiration of your allies</i>.</p>
            </Trait>

            <Trait name="Conqueror" title="CONQUEROR" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a battlemaster, a subjugator and a large-scale strategist. You gain a BOOST to any action related to commanding large groups of people against an enemy, or in endeavors related to the politics of war. Additionally, when you are in battle, you gain a BOOST when you ACT UNDER PRESSURE or SECURE AN ADVANTAGE with WITS or GUILE.</span>
              <br/><br/><hr/><br/>
              <p>acquired when <i>you subdue a community or faction, claim their lands or belongings as your own and rule over them</i>.</p>
            </Trait>

            <Trait name="DemonSlayer" title="DEMON SLAYER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are an experienced hunter of demons and other evil outsiders. Gain a BOOST whenever you ACCEPT A CHALLENGE, ACT UNDER PRESSURE, SECURE AN ADVANTAGE, GATHER INFORMATION or CLASH for actions related to the extermination of said beings.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you slay a powerful demon tormenting a place or a community</i>.</p>
            </Trait>

            <Trait name="HybridGuardian" title="HYBRID GUARDIAN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You belong to a secretive order of guardians that, in order to protect mankind, mutate themselves into fiendish hybrids. You can use demonic powers and even temporarily reshape parts of your body, which gives a BOOST to any action at the cost of losing -1 WILL each time. At the end of the fray, or when you decide to return back to normal, you must ENDURE serious STRESS with a SETBACK to avoid the temptation of succumbing and transforming into that which you’ve sworn to fight.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you submit yourself to the forbidden rite of transformation in which demonic blood is transfused into your body</i>.</p>
            </Trait>

            <Trait name="Magus" title="MAGUS" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are a powerful sorcerer, a force to be reckoned with. Gain a BOOST whenever you test your WITS or HASTE to produce a powerful magical effect for any action, but lose -1 WILL each time.</span>
              <br/><br/><hr/><br/>
              <p>Acquired once <i>you have unearthed an ancient arcane tome and spent a season studying its texts and practicing its rituals</i>.</p>
            </Trait>

            <Trait name="Necromancer" title="NECROMANCER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You wield the power of death magic and chaos energies. You can raise the dead to make them become your temporal minions. Spend -1 WILL to raise a corpse as a zombie that obeys your mental orders and gives you a BOOST in any action they could reasonably help with. There is no limit apart from your WILL to the number of undead you can raise in this way, but they collapse as ashes at the end of the scene. Additionally, you can heal your wounds by exchanging +GRIT for -WILL at any time you want.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you study the forbidden scrolls of necromancy and perform a ritual of soul corruption on yourself</i>.</p>
            </Trait>

            <Trait name="Paladin" title="PALADIN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You are the champion of your faith. You can lose -1 WILL to gain a BOOST to any action in which you channel the energy of radiance and purity. Additionally, you gain a BOOST for any attempt to GATHER INFORMATION or COMPEL against an individual that might respect or admire your cause.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you participate in the right of passage of a sacred order and you swear an oath of justice and virtue</i>.</p>
            </Trait>

            <Trait name="Spellblade" title="SPELLBLADE" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You can channel your sorcery into the arts of melee combat. You can produce a blade of pure magic, a shield of arcane energy or any other warring implement you can imagine. This gives you a BOOST to any attempt to ACT UNDER PRESSURE, SECURE AN ADVANTAGE or CLASH while in combat, but in order to manifest this arcane weapon you must ENDURE STRESS (serious).</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you finish training in the lost arts of the legendary war-mages from a suitable teacher</i>.</p>
            </Trait>

            <Trait name="Wielder" title="WIELDER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>You carry a legendary weapon. This strange but powerful artifact will grant you a BOOST whenever you ACT UNDER PRESSURE, SECURE AN ADVANTAGE or CLASH by using it. But it has a mind of its own; a strange aura that could consume you if you are not careful. After perusing its power, ENDURE STRESS (minor). Additionally, once per session you can attempt to attune and communicate with it in order to GATHER INFORMATION with what it might know.</span>
              <br/><br/><hr/><br/>
              <p>Acquired when <i>you have found a legendary weapon that is more famous than yourself and has been indelibly linked with the souls of its previous wielders</i>.</p>
            </Trait>

            <Trait name="Wildwarden" title="WILDWARDEN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
              <span>Your domain is a region of wilderness that you know like the palm of your hand. You can sense when anything out of the ordinary happens there, and whenever you are in its premises, you gain a BOOST to any action. Additionally, you provide a BOOST to any ally that attempts to HEAL, RELAX or RESUPPLY in the area with your blessing.</span>
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
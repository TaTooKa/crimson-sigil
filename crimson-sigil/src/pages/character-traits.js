import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import placeholder_art from '/src/images/placeholder.jpg';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "GENERAL TRAITS"},
    {depth: 2, value: "PRESTIGE TRAITS"},
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

        <div class="traits-container" id="skills-container">
            <h2 id="general-traits">GENERAL TRAITS</h2>

            <blockquote><p>General Traits can be obtained during Character Creation and any time you desire to <a href="/prompts/fate-prompts#improve-yourself">IMPROVE YOURSELF</a> and pay for a new one with XP.</p></blockquote>

            <div class="trait skill">
                <input id="skillBlademaster" type="checkbox" name="skillBlademaster" value={inputs.skillBlademaster} onChange={handleChange} defaultChecked={inputs.skillBlademaster}/>
                <label for="skillBlademaster"> <span class="trait-name">BLADEMASTER</span>: when wielding a long blade, gain a <span class="boost">BOOST</span> when you test your <span class="stat">MIGHT</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</label>
                <img src={placeholder_art} class="art"/>
            </div>

        </div>

        <br/>
        <hr/>
        <br/>

        <div class="traits-container" id="skills-container">
            <h2 id="prestige-traits">PRESTIGE TRAITS</h2>

            <blockquote><p>These TRAITS cannot be obtained normally by paying XP. They each have a condition that must be achieved, usually by <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILLING A CHALLENGE</a> (of LONG RANK or greater) that had said condition as its objective.<br/><br/>Players are encouraged to actively pursue different objectives of their own volition, in order to gain some of these Prestige Traits.</p></blockquote>

            <div class="trait skill">
                <input id="skillBlademaster" type="checkbox" name="skillBlademaster" value={inputs.skillBlademaster} onChange={handleChange} defaultChecked={inputs.skillBlademaster}/>
                <label for="skillBlademaster"> <span class="trait-name">BLADEMASTER</span>: when wielding a long blade, gain a <span class="boost">BOOST</span> when you test <span class="stat">MIGHT</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</label>
                <img src={placeholder_art} class="art"/>
            </div>

        </div>

        <br/>
        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats
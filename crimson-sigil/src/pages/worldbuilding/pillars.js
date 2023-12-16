import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Pillar from '/src/@rocketseat/gatsby-theme-docs/components/Pillar'

import placeholder_art from '/src/images/placeholder.jpg';

function Pillars() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "COMMUNITIES"},
  ]

  const [inputs, setInputs] = useState(() => {
    const savedPillarsStr = windowGlobal ? windowGlobal.localStorage.getItem("pillars") : "{}"
    const savedPillars = JSON.parse(savedPillarsStr)
    return savedPillars || {}
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

    const descriptions_selector = "#"+name+"-container .description"
    var all_descriptions = document.querySelectorAll(descriptions_selector)
    all_descriptions.forEach(element => {
      element.classList.remove("visible");
    })

    const description_id = name+value+"-description"
    var description = document.getElementById(description_id)
    description.classList.add("visible");
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => savePillars(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const savePillars = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("pillars", JSON.stringify(inputs))
    }

  }

  return (
    <Layout title="Your Pillars" headings={headings}>
      <Seo title="Your Pillars" />
      <blockquote><p>These Pillars are what prescribe the truths of your world. <br/><br/>Before starting to play, when envisioning the world, the players should read on the following sections and decide on each option, to define in broad strokes the tropes and foundations of the setting of Crimson Sigil.<br/><br/>If so desired, some can be left undefined, or you can borrow ideas from each option or otherwise make up the details on your own.</p></blockquote>
      <form class="pillars">

        <Pillar name="COMMUNITIES" id="communities" inputs={inputs} handleChange={handleChange}
          optionName0="Points of Light" optionImage0={placeholder_art} optionDescription0="Civilization is scattered across the land. Most people rarely have contact with anyone outside their own small steading or village, and strangers are viewed with deep suspicion. Each outpost is a dim point of light, surrounded by grim dangers."
          optionName1="Duchies and Baronies" optionImage1={placeholder_art} optionDescription1="Smaller villages and towns are connected to keeps or hamlets, owned by lords or barons. Regular people give their allegiance and surplus to them in exchange for protection. Some traders or traveling caravans roam the routes between these bastions of civilization."
          optionName2="City-States" optionImage2={placeholder_art} optionDescription2="Great city-states dominate whole regions or swaths of land. People live mostly inside these citadels, or in the periphery as farming and cattle providers for the enormous population that dwells inside the great walls. Trade routes are constantly occupied by caravans and travelers of all sorts."
        />

        <Pillar name="LEADERS" id="leaders" inputs={inputs} handleChange={handleChange}
          optionName0="Kingdom" optionImage0={placeholder_art} optionDescription0="There’s a King that rules over all the known lands. The regions are divided in Duchies and Baronies, and each pays tribute to the crown, levying taxes from the people. If you live on their lands you are their vassal, and owe part of your life and production to them, who in turn provide security… or should, but rarely do. The kingdom might be waging war against a specific enemy, but it is probably an outsider culture or external force."
          optionName1="Noble houses" optionImage1={placeholder_art} optionDescription1="There are several noble houses or clans. Their leaders and those of the high-class are mostly family based or connected by marriage, but no single personality rules over the others. Politics and favors play a huge role in civilization. Small wars are waged constantly between those in which diplomacy has failed. Alliances form as fast as they break, and back-stabbing has a whole different meaning. Common people are not tied to the higher classes and can move freely among their lands, as long as they don’t fall into slavery for different reasons."
          optionName2="Various leadership types" optionImage2={placeholder_art} optionDescription2="Leadership is as varied as the people. Some communities are governed by the head of a powerful family. Others have a council of elders who make decisions and settle disputes. In others, the priests hold sway. For some, it is duels in the circle that decide. Others designate a Seneschal or Major to take the decisions for a town or settlement."
        />

      </form>
    </Layout>
  )
}

export default Pillars
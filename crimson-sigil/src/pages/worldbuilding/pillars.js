import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Pillar from '/src/@rocketseat/gatsby-theme-docs/components/Pillar'

import placeholder_art from '/src/images/placeholder.jpg';

function Pillars() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "COMMUNITIES"},
    {depth: 2, value: "LEADERS"},
    {depth: 2, value: "MAGIC"},
    {depth: 2, value: "RELIGION"},
    {depth: 2, value: "BEASTS"},
    {depth: 2, value: "HORRORS"},
    {depth: 2, value: "DEMONS"},
    {depth: 2, value: "FAEBORN"},
    {depth: 2, value: "HYBRID GUARDIANS"},
    {depth: 2, value: "THE CRIMSON SIGIL"},
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

        <Pillar name="MAGIC" id="magic" inputs={inputs} handleChange={handleChange}
          optionName0="Magic is mostly gone" optionImage0={placeholder_art} optionDescription0="There was a time when the Arcane Arts were a central part of society, and archmages and rulers harnessed it to further their agendas. Nowadays that’s history for some scholars, and legends for most others. Only in some circles it still exists, like with the descendants of the war-mages who try to maintain a semblance of what their Order once stood for, or with the occasional practitioners of the dark arts that form cults to worship the unspeakable."
          optionName1="Magic is rare" optionImage1={placeholder_art} optionDescription1="Magic is wondrous, but not everyone has access to it. People might know about it but treat it with suspicion or even fear. Those who harness magic do so by either studying arcane arts or by channeling a mystical inner calling that’s passed by blood or by the gift of the gods.There are some clandestine organizations that dwell in the Arcane Arts, but they operate from the shadows to avoid being ashamed or even hunted by those who fear the unknown."
          optionName2="Magic is evil" optionImage2={placeholder_art} optionDescription2="From the earliest times, wizards and students of the occult believed that Magic could be harnessed and controlled if they put enough effort. They were always wrong. Magic is an extraneous energy; it corrupts and taints everything, sooner or later. Some say it is a gift from demons, to tempt us and bind our souls. Other scholars believe that Magic has a will of its own; that it is some sort of force from an extradimensional place. Whatever the case, practicing the dark arts always comes with a cost… usually your mind and spirit."
        />

        <Pillar name="RELIGION" id="religion" inputs={inputs} handleChange={handleChange}
          optionName0="No religion, only cults" optionImage0={placeholder_art} optionDescription0="A few still make signs or mumble prayers out of habit or tradition, but most believe the gods either have never existed or have long abandoned us. If there are believers out there, they are fanatics or cultists that mistake occultism for adoration."
          optionName1="Many religions and pantheons" optionImage1={placeholder_art} optionDescription1="The people believe and follow different religions and adore many gods. Not one manages to step over the others, even when many of their believers try to impose their beliefs over others. Common people are used to praying to different gods, old and new, for what each can provide or is most known to govern."
          optionName2="Single ruling religion" optionImage2={placeholder_art} optionDescription2="A single religion rules over all others. Those that don’t follow the strict dogmas of their beliefs are hunted and silenced in gruesome ways. Whether their god exists or not is irrelevant, its zealots have the power necessary to afford the crusades that submit other faiths and rule the minds of their subjects through violence, fear and manipulation."
        />

        <Pillar name="BEASTS" id="beasts" inputs={inputs} handleChange={handleChange}
          optionName0="No great beasts" optionImage0={placeholder_art} optionDescription0="The mythical beasts of old are nothing but legend. A few who travel into the deep forests and high mountains return with wild tales of monstrous creatures, but they are obviously delusional. No such things exist, evidently. There are some rumors being whispered; There’s people disappearing at night under mysterious circumstances; There’s what some would call “evidence” of the supernatural, but it’s just superstition. It must be."
          optionName1="Great beasts far from civilization" optionImage1={placeholder_art} optionDescription1="Beasts of all sorts roam the known lands. They dwell primarily in the reaches, but range into the settled lands to hunt. There, they often prey on cattle, but attacks on travelers, caravans, or even settlements are not uncommon. Regular people are helpless unless properly organized, or aided by the occasional wanderer or hunter."
          optionName2="Fantastical beasts everywhere" optionImage2={placeholder_art} optionDescription2="Beasts of every size and color are common in most territories. The regular people have learnt to live with them, with organized hunting parties, fortifications designed for each type of habitat and domestication of those that can be used as beasts of burden. The most insidious of these creatures have also learnt to stay away from the lands of men. Some are known to be sentient and cunning, making them much more dangerous than the average wild animal."
        />

        <Pillar name="HORRORS" id="horrors" inputs={inputs} handleChange={handleChange}
          optionName0="No supernatural horrors" optionImage0={placeholder_art} optionDescription0="Nothing but stories to frighten children. The occasional traveler will talk about an unspeakable thing, but they surely are delusional."
          optionName1="Horrors in the darkness" optionImage1={placeholder_art} optionDescription1="Common people are wary of dark forests and deep waterways, for monsters lurk in those places. In the depths of the long-night, when all is wreathed in darkness, only fools venture beyond their homes."
          optionName2="Horrors are a constant threat" optionImage2={placeholder_art} optionDescription2="The dead do not rest in these lands. At night we light torches, scatter salt, and post sentries at the gate. It is not enough. They are coming."
        />

        <Pillar name="DEMONS" id="demons" inputs={inputs} handleChange={handleChange}
          optionName0="Monsters that can speak" optionImage0={placeholder_art} optionDescription0="People call “Demons” to a type of monster that looks mostly human (maybe they have a tell like horns, protruding fangs or red skin). These creatures have learnt to post as humane as possible and speak their language, but otherwise behave like savages; eating human flesh and innards, craving their warm blood and corrupting every sign of benevolence. Only when cornered, at a disadvantage or when they could get away with it, they plead for mercy or try to pass as relatable humanoids that appear as reasonable beings (to then betray their enemies at the first opportunity)."
          optionName1="Cunning possessors/shapeshifters" optionImage1={placeholder_art} optionDescription1="Demons are supernatural beings that like to blend in with society and corrupt it from within. They are either insubstantial, possessing a human to be used as a “vessel”, or are cunning shapeshifters that can adopt the appearance of any person, including their voice and mannerisms. They are otherwise weak, which is why they prefer a deceitful approach and try to operate from the shadows."
          optionName2="Heralds of the Army of Hell" optionImage2={placeholder_art} optionDescription2="Demons are powerful monsters with twisted and blasphemous bodies. They have great power and supernatural abilities. They have an intricate societal structure and follow a clear chain of command. The ones you might encounter are the harbingers of something much more ominous to come; they are the advance of an imminent invasion from Hell."
        />
        
        <Pillar name="FAEBORN" id="faeborn" inputs={inputs} handleChange={handleChange}
          optionName0="Just Fairy Tales" optionImage0={placeholder_art} optionDescription0="These creatures are just stories that people tell to their children to either scare them or instill them moral values. Most think they don’t exist, but will stay away from the deepest forests and wildest areas of the land… just in case."
          optionName1="A Known Danger of the Deep Forests" optionImage1={placeholder_art} optionDescription1="Most who wandered into isolated places came back with anecdotes and evidence of the existence of mythical creatures and their inscrutable intentions. Rumors mix with truth, but they are always ominous and chilling; from newborn abductions to duplicitous bargains, the Faeborn are not to be trusted and better left alone in their domains."
          optionName2="Common and Accepted in Society" optionImage2={placeholder_art} optionDescription2="The Faeborn, while rare, are well-known to most peoples. They are considered weird but approachable under the right circumstances. Most societies still shun them for their otherness, but it is not out of the ordinary to see the descendant of an Elf or Satyr in big settlements or traveling the roads. Depending on each pocket of civilization and their previous encounters with Faeborn, they might treat them with cautious deference or outright distrust and xenophobia."
        />

        <Pillar name="HYBRID GUARDIANS" id="hybrid-guardians" inputs={inputs} handleChange={handleChange}
          optionName0="An Organization of shady mercenaries" optionImage0={placeholder_art} optionDescription0="A strange and secretive organization has learnt a forbidden rite that can transform select humans into demon-hybrids that are impressive fighters. They offer a service to anyone in need: A hybrid guardian will be dispatched to deal with any demon or dire monster threat in exchange for a copious sum of money (the guardian never collects; another representative will arrive later to solicit payment). These guardians are not trusted (their glowing red eyes instill fear in most), but they are seen as a necessary evil against a greatest danger."
          optionName1="Mutated individuals" optionImage1={placeholder_art} optionDescription1="Originally a regular human, a Hybrid Guardian goes through the rite of transformation through different means. Maybe they were captured and experimented upon by a mad necromancer. Perhaps they were supposed to be the newest weapon of a coven of demons and managed to escape. Maybe they underwent the procedure of demonic blood transfusion themselves, in order to harness evil powers to do good. Whatever the case, a Hybrid Guardian is a loner who fights against evil by tapping into vileness themselves, always tiptoeing across the fine line of succumbing to the final temptation of full transformation into a demon themselves."
          optionName2="An Inquisitorial Arm of the Law" optionImage2={placeholder_art} optionDescription2="The current strongest government faction (the crown, the empire, the dominant clan, etc) takes the demonic threat very seriously, and for that they’ve created an order of Hybrid Guardians; half-demons that fight against evil with their own tools. Most of their subjects don’t see this with good eyes… Harnessing evil forces? Does the end justify the means? At what point do you turn yourselves into what you swore to eradicate? These Hybrid Guardians are despised by the common people, even though they are forbidden to harm humans in any way (if they do so, they are marked for execution). They usually have jurisdiction that overrides any local rule or force of law, and they are venerated out of fear. They are still subject to impose their own limits, lest they over-indulge in their transformation and end up “awakening” into full demons themselves. When this happens, the order dispatches a group of stronger Guardians to execute the condemned one."
        />

        <Pillar name="THE CRIMSON SIGIL" id="the-crimson-sigil" inputs={inputs} handleChange={handleChange}
          optionName0="The Demon Brand" optionImage0={placeholder_art} optionDescription0="The Crimson Sigil is a special magical mark that demons brand on the flesh of a “chosen one”. The reason for the branding is not entirely known; perhaps the subject was marked for sacrifice? Maybe it is part of a process to create an envoy for a greater demon lord? Is it a way for demonic forces to tag and follow an individual that they want alive for inscrutable reasons? Whichever the case, the branded one quickly turns into a pariah: They attract calamity and evil whenever they go, and their brand bleeds painfully when demonic entities are nearby."
          optionName1="The Sign of the Dark One" optionImage1={placeholder_art} optionDescription1="The Crimson Sigil is the emblem of a Dark Lord that gives power to their followers. Frequently used by cults and evil factions, it can bestow dark powers to those that use it as part of sinister rituals, or protect them from their enemies if used as wards. Rumors say that wherever the Crimson Sigil is placed, the presence of the Dark Lord grows stronger; that he can see or perceive those nearby, or that his influence can be felt by anyone in the area."
          optionName2="A Rune of Folklore" optionImage2={placeholder_art} optionDescription2="The Crimson Sigil is an elder sign, an ancient rune that no one really knows about anymore. But it does have its uses: Myths say that if you draw a large enough one, you can stay inside and evil can’t hurt you. Some believers carve it above doorways to protect their homes. There’s a common legend that explains that if you draw it with human blood in moonlight, you can get a boon from a higher power... And if done under a blood moon, your greatest wish can be fulfilled. It is not unusual to see the Sigil in common places, but the people have forgotten its actual use, and now it seems to be more of a casual habit or a folkloric rite."
        />

      </form>

      <br/>
      <br/>
    </Layout>
  )
}

export default Pillars
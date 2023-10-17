import React from 'react';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const Stat = ({name}) => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
  const savedCharacter = JSON.parse(savedCharacterStr)

  var statValue = 1;

  switch (name) {
    case 'WITS':
      statValue = savedCharacter.wits;
      break;
    case 'MIGHT':
      statValue = savedCharacter.might;
      break;
    case 'HASTE':
      statValue = savedCharacter.haste;
      break;
    case 'CHARM':
      statValue = savedCharacter.charm;
      break;
    case 'GUILE':
      statValue = savedCharacter.guile;
      break;
  }

  if ( !isNumeric(statValue) ) {
    statValue = "?";
  }
  
  return (
    <span>
      <span class="stat">{name}</span>
      <span class="stat-value" title="this value is defined in the character STATS page.">({statValue})</span>
    </span>
  )
};

export default Stat;
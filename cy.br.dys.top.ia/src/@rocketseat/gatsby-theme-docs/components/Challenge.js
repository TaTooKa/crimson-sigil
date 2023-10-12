import React from 'react';
import reactTriggerChange from 'react-trigger-change';

const Challenge = ({challengeIndex, inputs, setInputs}) => {

  const chDescId = "chDesc"+challengeIndex;
  const chProgressId = "chProgress"+challengeIndex; 
  const chStateId = "chState"+challengeIndex;
  const chRankName = "chRank"+challengeIndex;
  var makeProgressButtonId = "makeProgressButton"+challengeIndex;
  var revertProgressButtonId = "revertProgressButton"+challengeIndex;

  const handleChange = (event) => {
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else if ( event.target.type == "number" ) {
      const name = event.target.name;
      var value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
  }

  const makeProgress = (event) => {
    event.preventDefault();
    var currentProgress = parseInt(event.target.attributes.currentProgress.value);
    var currentRank = parseInt(event.target.attributes.currentRank.value);

    var newProgress = null;

    switch (currentRank) {
      case 1:
        newProgress = currentProgress + 30;
        break;
      case 2:
        newProgress = currentProgress + 20;
        break;
      case 3:
        newProgress = currentProgress + 10;
        break;
      case 4:
        newProgress = currentProgress + 5;
        break;
      case 5:
        newProgress = currentProgress + 2;
        break;
    }
    if ( newProgress > 99 ) {
      newProgress = 99;
    }

    var buttonEl = document.getElementById(makeProgressButtonId);
    buttonEl.setAttribute("currentProgress", newProgress);

    var progressFieldEl = document.getElementById(chProgressId);
    progressFieldEl.value = newProgress;

    reactTriggerChange(progressFieldEl);
  }

  const revertProgress = (event) => {
    event.preventDefault();
    var currentProgress = parseInt(event.target.attributes.currentProgress.value);
    var currentRank = parseInt(event.target.attributes.currentRank.value);

    var newProgress = null;

    switch (currentRank) {
      case 1:
        newProgress = currentProgress - 30;
        break;
      case 2:
        newProgress = currentProgress - 20;
        break;
      case 3:
        newProgress = currentProgress - 10;
        break;
      case 4:
        newProgress = currentProgress - 5;
        break;
      case 5:
        newProgress = currentProgress - 2;
        break;
    }
    if ( newProgress < 1 ) {
      newProgress = 1;
    }

    var buttonEl = document.getElementById(makeProgressButtonId);
    buttonEl.setAttribute("currentProgress", newProgress);

    var progressFieldEl = document.getElementById(chProgressId);
    progressFieldEl.value = newProgress;

    reactTriggerChange(progressFieldEl);
  }

  return (
    <div class="challenge-container">

      <div class="challenge-inputs">
        <div class="description-container">
          <label for={chDescId}>CHALLENGE DESCRIPTION</label>
          <input id={chDescId} type="text" name={chDescId} class="description" value={inputs[chDescId]} onChange={handleChange}/>
        </div>
        <div class="progress-container">
          <label for={chProgressId}>PROGRESS</label>
          <input id={chProgressId} type="number" name={chProgressId} class="progress" value={inputs[chProgressId]? inputs[chProgressId]: 1} onChange={handleChange} min="1" max="99"/>
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar-outer">
          <div class="progress-bar-inner" style={{width: inputs[chProgressId]+"%"}}></div>
        </div>
      </div>

      <div class="make-progress-container">
        <button class="progress-button make-progress-button" id={makeProgressButtonId} currentProgress={inputs[chProgressId]? inputs[chProgressId]: 1} currentRank={inputs[chRankName]? inputs[chRankName] : 1} onClick={makeProgress}>MAKE PROGRESS</button>
        <button class="progress-button revert-progress-button" id={revertProgressButtonId} currentProgress={inputs[chProgressId]? inputs[chProgressId]: 1} currentRank={inputs[chRankName]? inputs[chRankName] : 1} onClick={revertProgress}>REVERT</button>
      </div>

      <div class="ranks-container">
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_1"} value={inputs[chRankName+"_1"] || "1"} onChange={handleChange} checked={inputs[chRankName]==="1"}/>
          <label for={chRankName+"_1"}><span class="rank-type">SHORT:</span> +30%; 2XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_2"} value={inputs[chRankName+"_2"] || "2"} onChange={handleChange} checked={inputs[chRankName]==="2"}/>
          <label for={chRankName+"_2"}><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_3"} value={inputs[chRankName+"_3"] || "3"} onChange={handleChange} checked={inputs[chRankName]==="3"}/>
          <label for={chRankName+"_3"}><span class="rank-type">LONG:</span> +10%; 10XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_4"} value={inputs[chRankName+"_4"] || "4"} onChange={handleChange} checked={inputs[chRankName]==="4"}/>
          <label for={chRankName+"_4"}><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_5"} value={inputs[chRankName+"_5"] || "5"} onChange={handleChange} checked={inputs[chRankName]==="5"}/>
          <label for={chRankName+"_5"}><span class="rank-type">EPIC:</span> +2%; 50XP</label>
        </div>
      </div>

      <div class="state-buttons-container">
        <div class="state-button state-button-active">
          <input type="radio" name={chStateId} id={chStateId+"_1"} value={inputs[chStateId+"_1"] || "1"} onChange={handleChange} checked={inputs[chStateId]==="1"}/>
          <label for={chStateId+"_1"}><span class="rank-state-active">ACTIVE</span></label>
        </div>
        <div class="state-button state-button-fulfilled">
          <input type="radio" name={chStateId} id={chStateId+"_2"} value={inputs[chStateId+"_2"] || "2"} onChange={handleChange} checked={inputs[chStateId]==="2"}/>
          <label for={chStateId+"_2"}><span class="rank-state-fulfilled">FULFILLED</span></label>
        </div>
        <div class="state-button state-button-failed">
          <input type="radio" name={chStateId} id={chStateId+"_3"} value={inputs[chStateId+"_3"] || "3"} onChange={handleChange} checked={inputs[chStateId]==="3"}/>
          <label for={chStateId+"_3"}><span class="rank-state-failed">FAILED</span></label>
        </div>
      </div>

    </div>
  )
};

export default Challenge;
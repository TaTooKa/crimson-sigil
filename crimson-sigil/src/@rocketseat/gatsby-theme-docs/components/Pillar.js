
import React from 'react';

const Pillar = (props) => {
  const pillarName = props.name;
  const pillarId = props.id;
  const option0Id = pillarId+"0";
  const option1Id = pillarId+"1";
  const option2Id = pillarId+"2";
  const optionName0 = props.optionName0;
  const optionName1 = props.optionName1;
  const optionName2 = props.optionName2;
  const optionDescription0 = props.optionDescription0;
  const optionDescription1 = props.optionDescription1;
  const optionDescription2 = props.optionDescription2;
  const optionImage0 = props.optionImage0;
  const optionImage1 = props.optionImage1;
  const optionImage2 = props.optionImage2;

  return (
    <div class="pillar" id={pillarId+"-container"}>
      <h2>{pillarName}</h2>

      <input type="radio" id={option0Id} name={pillarId} onChange={props.handleChange} value={props.inputs[option0Id] || "0"} checked={props.inputs[pillarId]==="0"}/>
      <label for={option0Id}>{optionName0}</label>
      <div class={props.inputs[pillarId]==="0" && "description visible" || "description"} id={option0Id+"-description"}>
        <img src={optionImage0}/>
        <p>{optionDescription0}</p>
      </div>

      <input type="radio" id={option1Id} name={pillarId} onChange={props.handleChange} value={props.inputs[option1Id] || "1"} checked={props.inputs[pillarId]==="1"}/>
      <label for={option1Id}>{optionName1}</label>
      <div class={props.inputs[pillarId]==="1" && "description visible" || "description"} id={option1Id+"-description"}>
        <img src={optionImage1}/>
        <p>{optionDescription1}</p>
      </div>

      <input type="radio" id={option2Id} name={pillarId} onChange={props.handleChange} value={props.inputs[option2Id] || "2"} checked={props.inputs[pillarId]==="2"}/>
      <label for={option2Id}>{optionName2}</label>
      <div class={props.inputs[pillarId]==="2" && "description visible" || "description"} id={option2Id+"-description"}>
        <img src={optionImage2}/>
        <p>{optionDescription2}</p>
      </div>

    </div>
  );

};

export default Pillar;
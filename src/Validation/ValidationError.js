import React from 'react';

export default function ValidationError(props) {
  if(props.Namemessage || props.Instructionsmessage || props.Ingredientsmessage||props.Foldermessage) {
    return (
      <div className="error" id="error" style={{color:'red',fontWeight:'bold'}}>
      {props.Namemessage}
<div style={{fontSize:'20px',color:'red',fontWeight:'bolder',textShadow:'.5px .5px black'}}>{props.Foldermessage}</div>
      {props.Instructionsmessage}
      {props.Ingredientsmessage}</div>
    );
  }

  return <></>
}
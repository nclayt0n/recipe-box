import React from 'react';

export default function ValidationError(props) {
  if(props.Namemessage || props.Instructionsmessage || props.Ingredientsmessage||props.Foldermessage) {
    return (
      <div className="error" id="error" style={{color:'red',fontWeight:'bolder'}}>
      {props.Namemessage}
      {props.Foldermessage}
      {props.Instructionsmessage}
      {props.Ingredientsmessage}</div>
    );
  }

  return <></>
}
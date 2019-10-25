import React from 'react';

export default function ValidationError(props) {
  if(props.Namemessage || props.Instructionsmessage || props.Ingredientsmessage) {
    return (
      <div className="error" id="error">
      {props.Namemessage}
      
      {props.Instructionsmessage}
      {props.Ingredientsmessage}</div>
    );
  }

  return <></>
}
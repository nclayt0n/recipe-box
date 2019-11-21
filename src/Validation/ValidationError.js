import React from 'react';

export default function ValidationError(props) {
  if(props.Namemessage || props.Instructionsmessage || props.Ingredientsmessage||props.Foldermessage||props.Ingredientmessage) {
    return (
      <div className="error" id="error" style={{color:'red',fontWeight:'bold',textAlign:'center',margin:'auto',width:'fit-content'}}>
        <div style={{fontSize:'14px',color:'red',fontWeight:'bolder',textShadow:'.5px .5px black'}}>{props.Foldermessage}
        </div>
        {props.Namemessage}
      {props.Instructionsmessage}
      {props.Ingredientsmessage}
      {props.Ingredientmessage}
      </div>
    );
  }

  return <></>
}
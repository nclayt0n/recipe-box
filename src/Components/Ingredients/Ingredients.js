import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
const uuidv4 = require('uuid/v4');

 //compressArrayFunction found @ https://gist.github.com/ralphcrisostomo/3141412
function compressArray(original) {
 let compressed = [];
 let copy = original.slice(0);
 for (let i = 0; i < original.length; i++) {
     let myCount = 0;	
     for (let w = 0; w < copy.length; w++) {
         if (original[i] === copy[w]) {
             myCount++;
             delete copy[w];
         }
     }
     if (myCount > 0) {
         let a = new Object();
         a.value = original[i];
         a.count = myCount;
         compressed.push(a);
     }
 }
 return compressed;
};

function createIngredientsCount(items){
    const ingredients=[...items.recipes.map(recipe=> recipe.ingredients)]
    let results = ingredients.reduce((a, b)=>a.concat(b), []);
    let newArray = compressArray(results);
    return newArray.map(item=>{
        return <><label htmlFor={item.value} key={uuidv4()} >{item.value} ({item.count})</label>
            <input name={item.value} key={uuidv4()}  type="checkbox"/><br/>
            </>
    })
}
class Ingredients extends React.Component{
    static contextType=Context;
    render(){
let displayedIngredients;
(this.props.recipes!==undefined)?(displayedIngredients=createIngredientsCount(this.props)):(displayedIngredients=createIngredientsCount(this.context));   
        return(
        <div className="ingredients">
            <h3>Ingredients</h3>
            {displayedIngredients}
        </div>)
    }
}
export default withRouter(Ingredients)
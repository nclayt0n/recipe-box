import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './Ingredients.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
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
         let a={
             value:original[i],
             count:myCount,
         }

         compressed.push(a);
     }
 }
 return compressed;
};

function createIngredientsCount(items){
    // const ingredients=[...items.recipes.map(recipe=> recipe.ingredients)]
    // let results = ingredients.reduce((a, b)=>a.concat(b), []);
    // let newArray = compressArray(results);
    // return newArray.map(item=>{
    //     return <div className='ingredients' key={uuidv4()}><label htmlFor={item.value} key={uuidv4()} >{item.value} ({item.count})</label>
    //         <input name={item.value} key={uuidv4()}  type='checkbox'/><br/>
    //         </div>
    // })
    return items.recipes.map(recipes=>recipes.ingredients.map(ingredient=><li  key={uuidv4()}>{ingredient.name}, {ingredient.quantity} {ingredient.unit}</li>))
}

class Ingredients extends React.Component{
    static contextType=Context;
    render(){ 
        let displayedIngredients;
        (this.props.recipes!==undefined)?(displayedIngredients=createIngredientsCount(this.props)):(displayedIngredients=createIngredientsCount(this.context));
        return(<>
        <Header/>
        <Nav/>
        <section className='ingredientsList'  key={uuidv4()}>
            <h3 key={uuidv4()}><Link to={'/ingredients'}  >Ingredients</Link></h3>
            {displayedIngredients}
        </section></>)
    }
}
export default withRouter(Ingredients)
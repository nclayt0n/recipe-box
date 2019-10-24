import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
const uuidv4 = require('uuid/v4');

function findFolderandRecipe(id,folders,recipes){
const results=recipes.filter(recipe=>recipe.id===id);
const recipe=results[0];
const folder = folders.filter(f =>f.id ===recipe.folderId );
recipe.folderName=folder[0].name;
return recipe;
}

class UpdateRecipe extends React.Component{  
     static contextType=Context; 
     createDisplayedIngredients=(ingredients)=>{
        return ingredients.map(ingredient=>{return<li key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>})}
    render(){
        console.log(this.props)
        let recipe=findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const ingredients=this.createDisplayedIngredients(recipe.ingredients)
        console.log(recipe)
        return (
            <div className="updateRecipe">
            <h3>Recipe</h3>
                <ul>{recipe.name}
                <li>INTRUCTIONS: {recipe.instructions}</li>
                <Link to={'/ingredients'}>INGREDIENTS:</Link>  
                {ingredients}
                <li>Created By: {recipe.createdBy}</li>
                <li>{recipe.link}</li>
                <li><Link to={`/${recipe.folderId}`}>{recipe.folderName}</Link></li>
                </ul>
                <button><Link to={'/update-recipe/:id'}>Update Recipe</Link></button>
                <button onClick={()=>this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}
export default withRouter(UpdateRecipe)
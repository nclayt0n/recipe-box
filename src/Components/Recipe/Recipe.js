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

class Recipe extends React.Component{
    static contextType=Context;
    render(){
        //ingredients=[{
        //    food:"peach",
        //      measurements:"1 cup"
        //},]
        let recipe=findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const ingredients=recipe.ingredients.join(',')
        console.log(recipe)
        //will need to add measurements and break apart into ingrdients
        return(
            <div className='recipe'>
            <h3>Recipe</h3>
                create all fields that need to be displayed in recipe
                <ul>{recipe.name}
                <li>INTRUCTIONS: {recipe.instructions}</li>
                <li>INGREDIENTS:  {ingredients}</li>
                <li>Created By: {recipe.createdBy}</li>
                <li>{recipe.link}</li>
                <li><Link to={`/${recipe.folderId}`}>{recipe.folderName}</Link></li>
                
                </ul>
            </div>
        )
    }
}
export default withRouter(Recipe)
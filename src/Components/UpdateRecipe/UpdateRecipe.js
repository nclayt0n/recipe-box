import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
const uuidv4 = require('uuid/v4');

function findFolderandRecipe(id,folders,recipes){
const results=recipes.filter(recipe=>recipe.id===id);
const recipe=results[0];
const folder = folders.filter(f=>f.id===recipe.folderId );
recipe.folderName=folder[0].name;
return recipe;
}


class UpdateRecipe extends React.Component{  
     static contextType=Context; 
     constructor(){
         super()
         this.state={
             ingredients:[]
         }
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        // let title=e.target.title.value;
        // let note=e.target.note.value;
        // let link= e.target.link.value;
        let createdBy=e.target.createdBy.value;
        // let folderId=e.target.folder.value;
        // let recipe={
        //     title,
        //     ingredients:this.state.ingredients,
        //     note,
        //     link,
        //     createdBy,
        //     folderId
        // }
        //here send to api then in that api call then have the this.context.addRecipe
        // this.context.updateRecipe(recipe)
    }
    createDisplayedIngredients=(ingredients)=>{
        return ingredients.map(ingredient=>`${ingredient.name} ${ingredient.quantity} ${ingredient.unit}`)}
    render(){
        let recipe=findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const ingredients=this.createDisplayedIngredients(recipe.ingredients)
        console.log(this.context)
        return (
            <div className='updateRecipe'>
            <h3>Recipe</h3>
            <form onSubmit={e=>this.handleSubmit(e,this.context)}>
                <label htmlFor='name'>Name:</label><br/>
                <textarea name='instructions'>
                {recipe.name}
                </textarea><br/>
                <label htmlFor='instructions'>
                Instructions: </label><br/>
                <textarea name='instructions'>
                {recipe.instructions}
                </textarea><br/>
                <label htmlFor='createdBy'>Created By:</label><br/>
                <textarea name='createdBy'>
                {recipe.createdBy}
                </textarea><br/>
                {/* {ingredients} */}
                //make an input with a checkbox with ingredient name. if checked bring up a field to alter that ingredient.
                <label htmlFor="ingredients">Ingredients:</label><br/>
                <textarea name='ingredients' readOnly>
                </textarea><br/>
                <label htmlFor='link'>Link:</label><br/>
                <textarea name='link'>
                {recipe.link}
                </textarea><br/>
                <label htmlFor='folder_name'>Choose a different folder to Move recipe: </label> 
           <br/>
            <select name="folder">
            <option name='folder'>{recipe.folderName}</option>
            {this.context.folders.filter(folder=>folder.id!==recipe.folderId).map((folder)=>{
             return(<option name="folder" key={folder.id}>{folder.name}</option>)
            })}
            </select>
                <button type='submit'>Update</button>
                </form>
                <button onClick={()=>this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}
export default withRouter(UpdateRecipe)
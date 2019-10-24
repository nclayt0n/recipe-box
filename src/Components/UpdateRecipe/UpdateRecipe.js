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
     handleSubmit=(e,context)=>{
        e.preventDefault()
        // let title=e.target.title.value;
        // let note=e.target.note.value;
        // let link= e.target.link.value;
        let createdBy=e.target.createdBy.value;
        console.log(createdBy)
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
        return ingredients.map(ingredient=>{return<li key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>})}
    render(){
        console.log(this.props)
        let recipe=findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const ingredients=this.createDisplayedIngredients(recipe.ingredients)
        console.log(recipe)
        return (
            <div className='updateRecipe'>
            <h3>Recipe</h3>
            <form onSubmit={e=>this.handleSubmit(e,this.context)}>
                <label htmlFor='name'>Name:</label><br/>
                <textarea name='instructions'>
                {recipe.name}
                </textarea><br/>
                <label htmlFor='instructions'>
                INTRUCTIONS: </label><br/>
                <textarea name='instructions'>
                {recipe.instructions}
                </textarea><br/>
                <label htmlFor='createdBy'>Created By:</label><br/>
                <textarea name='createdBy'>
                {recipe.createdBy}
                </textarea><br/>
                {/* {ingredients} */}
                {/* <li>{recipe.link}</li> */}
                {/* <li><Link to={`/${recipe.folderId}`}>{recipe.folderName}</Link></li> */}
                
                <button type='submit'>Update</button>
                </form>
                <button onClick={()=>this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}
export default withRouter(UpdateRecipe)
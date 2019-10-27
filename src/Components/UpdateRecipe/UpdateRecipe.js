import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import {KeyHandler,KEYPRESS} from '../services/service'
const uuidv4 = require('uuid/v4');

class UpdateRecipe extends React.Component{  
     static contextType=Context; 
     constructor(){
         super()
         this.nameInput=React.createRef();
         this.state={
                ingredients:[],
                updateIngredient:{}
            }
     }
     deleteIngredient=(idx)=>{
         console.log('delete',idx)
         console.log(this.state.ingredients[idx])
         this.setState({ingredients:this.state.ingredients.slice(0,idx).concat(this.state.ingredients.slice(idx + 1,this.state.ingredients.length))})
   console.log(this.state.ingredients)
     }
    addIngredient=(recipe)=>{
        const ingredient={name:'',quantity:'',unit:''}
        if(this.state.ingredients.length===0){this.setState({ingredients:[...recipe.ingredients,ingredient]})
    }else{
        this.setState({ingredients:[...this.state.ingredients,ingredient]})}
    }
    findFolderandRecipe(id,folders,recipes){ 
        const results=recipes.filter(recipe=>recipe.id===id);
        const recipe=results[0];
        const folder = folders.filter(f=>f.id===recipe.folderId );
        recipe.folderName=folder[0].name; 
        return recipe
}
     handleSubmit=(e,recipe)=>{
        e.preventDefault()  
        // let title=e.target.title.value;
        // let note=e.target.note.value;
        // let link= e.target.link.value;
        for(let i=0;i<recipe.ingredients.length;i++){
        let name='alteredName';
        let quantity='alteredQuantity';
        let unit='alteredUnit';
            let ingredient={name:e.target[name+i].value,quantity:e.target[quantity+i].value,
                unit:e.target[unit+i].value}
        }
            // ingredients.push({name:e.target.alteredName[i].value,quantity:e.target.alteredQuantity[i].value,unit:e.target.alteredUnit[i].value})
        
        // let createdBy=e.target.createdBy.value;
        // let folderId=e.target.folder.value;
        // let recipe={
        //     title,
        //     ingredients:ingredients,
        //     note,
        //     link,
        //     createdBy,
        //     folderId
        // }
        //here send to api then in that api call then have the this.context.addRecipe
        // this.context.updateRecipe(recipe)
    }
    updateIngredient=(recipe)=>{
         this.setState({ingredients:recipe.ingredients})
    }
    createIngredientFields=(recipe)=>{
        // if(this.state.ingredients.length<recipe.ingredients.length){return recipe.ingredients.map((ingredient,idx)=><fieldset key={uuidv4()}>Ingredient:<br/>
        // <label key={uuidv4()} htmlFor='ingredient'> Name:
        // <input key={uuidv4()} name={`alteredName${idx}`}  defaultValue={ingredient.name}/></label><br/>
        // <label htmlFor='ingredient'>Quantity:
        // <input key={uuidv4()} name={`alteredQuantity${idx}`} defaultValue={ingredient.quantity}/></label><br/>
        // <label htmlFor='ingredient'>Unit:
        // <input key={uuidv4()} name={`alteredUnit${idx}`}defaultValue={ingredient.unit}/></label><br/><button type='button' onClick={()=>this.deleteIngredient(idx)}>Delete</button></fieldset>)}
        // if(this.state.ingredients.length>recipe.ingredients.length){
        //     {
                return recipe.ingredients.map((ingredient,idx)=><fieldset key={uuidv4()}>Ingredient:<br/>
        <label key={uuidv4()} htmlFor='ingredient'> Name:
        <input key={uuidv4()} name={`alteredName${idx}`}  defaultValue={this.state.ingredients[idx].name}/></label><br/>
        <label htmlFor='ingredient'>Quantity:
        <input key={uuidv4()} name={`alteredQuantity${idx}`} defaultValue={this.state.ingredients[idx].quantity}/></label><br/>
        <label htmlFor='ingredient'>Unit:
        <input key={uuidv4()} name={`alteredUnit${idx}`}defaultValue={this.state.ingredients[idx].unit}/></label><br/><button type='button' onClick={()=>this.deleteIngredient(idx)}>Delete</button></fieldset>)
        }
    render(){
        let recipe=this.findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const displayedIngredients= this.createIngredientFields(this.state)
        console.log(this.state.ingredients)
        return (
            <div className='updateRecipe'>
            <h3>Recipe</h3> <button type='button' onClick={()=>this.updateIngredient(recipe)}>{(this.state.ingredients.length===0)?('Update Ingredients'):('Reset Ingredients')}</button> 
            <form onSubmit={e=>this.handleSubmit(e,recipe)}>
           
            {(this.state.ingredients.length===0)?(null):(displayedIngredients)}
            {(this.state.ingredients.length===0)?(null):( <button type='button' onClick={()=>this.addIngredient(recipe)}>Add Ingredient</button>)}
                <br/><label htmlFor='name'>Name:</label><br/>
                <textarea name='instructions' defaultValue={recipe.name}>
                </textarea><br/>
                <label htmlFor='instructions'>
                Instructions: </label><br/>
                <textarea name='instructions' defaultValue={recipe.instructions}>
                </textarea><br/>
                <label htmlFor='createdBy'>Created By:</label><br/>
                <textarea name='createdBy' defaultValue={recipe.createdBy}>
                </textarea><br/>
                <label htmlFor='link'>Link:</label><br/>
                <textarea name='link' defaultValue={recipe.link}>
                </textarea><br/>
                <label htmlFor='folder_name'>Choose a different folder to Move recipe: </label> 
           <br/>
            <select name="folder">
            <option name='folder'>{recipe.folderName}</option>
            {this.context.folders.filter(folder=>folder.id!==recipe.folderId).map((folder)=>{
             return(<option name="folder" key={folder.id}>{folder.name}</option>)
            })}
            </select><br/>
           
                <button type='submit'>Update Recipe</button>
                </form> 
                
                <button onClick={()=>this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}
export default withRouter(UpdateRecipe)
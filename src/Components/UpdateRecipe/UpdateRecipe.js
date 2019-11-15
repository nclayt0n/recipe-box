import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import moment from 'moment'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
import TokenService from '../../services/token-service'
import config from '../../config'
const uuidv4 = require('uuid/v4');
const xss =require('xss')

class UpdateRecipe extends React.Component{  
     static contextType=Context; 
     constructor(){
         super()
         this.nameInput=React.createRef();
         this.state={
                ingredients:[],
                nameError:'',
                ingredientsError:'',
                instructionsError:'',
                deleted:false,
                recipe:{}
            }
     }
     findFolderandRecipe(id,folders,recipes){
        id=parseInt(id)
        if(folders===undefined){
            return null
        }else{
            const results=recipes.filter(recipe=>recipe.id===id);
            const recipe=results[0];
            const folder = folders.filter(f=>{
                return f.id===recipe.folder_id });
            recipe.folderName=folder[0].name; 
            return recipe  
        }
    }

     updateIngredient=(recipe)=>{
        if(typeof(recipe.ingredients)==='string'){
         recipe.ingredients=JSON.parse(recipe.ingredients)
        }else{
          recipe.ingredients =recipe.ingredients
        }
        this.setState({ingredients:recipe.ingredients})
    }

    addIngredient=(recipe)=>{
        const ingredient={name:'',quantity:'',unit:''}
        if(this.state.ingredients.length===0){this.setState({ingredients:[...this.recipe.ingredients,ingredient]})
    }else{
        this.setState({ingredients:[...this.state.ingredients,ingredient]})}
    } 

    deleteIngredient=(idx)=>{
         this.setState({ingredients:this.state.ingredients.slice(0,idx).concat(this.state.ingredients.slice(idx + 1,this.state.ingredients.length)),deleted:true})
    }
    
     handleSubmit=(e,recipe)=>{
        e.preventDefault()  
        let name=e.target.name.value;
        let note=e.target.note.value;
        let link= e.target.link.value;
        let created_by=e.target.createdBy.value
        let instructions=e.target.instructions.value
        let folder_id=parseInt(e.target.folder.value )  
        const localTime = moment().format('YYYY-MM-DD');
        let proposedDate = localTime + "T00:00:00.000Z";
        
        if(this.state.ingredients.length===0&&this.state.deleted===false){
            let updatedRecipe={
            id:recipe.id,
            name,
            date_created:recipe.date_created,
            date_modified:proposedDate,
            folder_id,
            ingredients:recipe.ingredients,  
            link,
            instructions,
            created_by,
            note
        }
            this.validateRecipe(updatedRecipe)
        }
        if(this.state.ingredients.length===0&&this.state.deleted===true){
            let updatedRecipe={
            id:recipe.id,
            name,
            date_modified:proposedDate,
            folder_id,
            ingredients:[],  
            link,
            instructions,
            created_by,
            note
        }
   
            this.validateRecipe(updatedRecipe)
        }
        if(this.state.ingredients.length>0){
            let ingredients=[];
            for(let i=0;i<this.state.ingredients.length;i++){
                let name='alteredName'; 
                let quantity='alteredQuantity';
                let unit;
                (e.target['alteredUnit'+i].value==='other')? unit='ingredientUnitOther':unit='alteredUnit';
                ingredients.push({name:e.target[name+i].value,quantity:e.target[quantity+i].value,unit:e.target[unit+i].value})
             }
            let updatedRecipe={
                id:recipe.id,
                name:name||recipe.name,
                date_created:recipe.date_created,
                date_modified:proposedDate,
                folder_id:folder_id||recipe.folder_id,
                ingredients:ingredients||recipe.ingredients,  
                link:link||recipe.link,
                instructions:instructions||recipe.instructions,
                created_by:created_by||recipe.created_by,
                note:note||recipe.note
            }
            this.validateRecipe(updatedRecipe)
        }
    }
    validateRecipe=(updatedRecipe)=>{
        if(updatedRecipe.name.length<3){
            this.setState({nameError: '*Required & Must be atleast 3 characters'
        }) 
        }else{this.setState({nameError:''})}
        if(updatedRecipe.ingredients.length<1){
            this.setState({ingredientsError:'*Required & Must add at least 1 ingredient'})
        }
        if( updatedRecipe.ingredients!==undefined||updatedRecipe.ingredients[0].name.length){
            this.setState({ingredientsError:'*Required & Must add at least 1 ingredient name with 3 characters'})
        }
        else{this.setState({ingredientsError:''})}
        if(updatedRecipe.instructions.length<1){
            this.setState({instructionsError:'*Required & Must add instruction'})
            
        }
        else{this.setState({instructionsError:''})}
      this.recipeCall(updatedRecipe)
    }
    recipeCall=(updatedRecipe)=>{
        if(updatedRecipe.name.length===0 && updatedRecipe.ingredients.length===0 && updatedRecipe.instructions.length ===0){ return null}if(updatedRecipe.name.length<3|| updatedRecipe.ingredients.length<1||updatedRecipe.instructions.length<1 ||
            updatedRecipe.ingredients[0].name.length<3){
           return null
        }
        else{  
            const url=`${config.API_ENDPOINT}/recipe/${updatedRecipe.id}`;
            const options={
                method:'PATCH',
                headers:{
              'content-type':'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                id:parseInt(this.props.match.params.id),
                name:updatedRecipe.name,
                date_created:updatedRecipe.date_created,
                date_modified:updatedRecipe.proposedDate,
                folder_id:updatedRecipe.folder_id,
                ingredients:updatedRecipe.ingredients,
                link:updatedRecipe.link,
                instructions:updatedRecipe.instructions,
                created_by:updatedRecipe.created_by,
                note:updatedRecipe.note,user_id:TokenService.decodeAuthToken(TokenService.getAuthToken())})
        };
            fetch(url,options)
            .then(this.context.updateRecipe(updatedRecipe))
            .catch(error =>{
                this.setState({error})
            })
            this.context.updateRecipe(updatedRecipe)
           
            this.props.history.push(`/home-page`)
    }
}
    
    createIngredientFields=(recipe)=>{
        return recipe.ingredients.map((ingredient,idx)=>
            <fieldset key={uuidv4()}>Ingredient:<br/>
                <label key={uuidv4()} htmlFor='ingredient'> Name:
                <input key={uuidv4()} name={`alteredName${idx}`}  defaultValue={this.state.ingredients[idx].name}/></label><br/>
                <ValidationError Namemessage={this.state.nameError}/><br/>
                <label htmlFor='ingredient'>Quantity:
                <input key={uuidv4()} name={`alteredQuantity${idx}`} defaultValue={this.state.ingredients[idx].quantity}/></label><br/>
                <label htmlFor='ingredient'>Unit:
                <select key={uuidv4()} name='ingredientUnit' name={`alteredUnit${idx}`}>
                            <option value={this.state.ingredients[idx].unit}>{this.state.ingredients[idx].unit}</option>
                            <option value='cup'>cup</option>
                            <option value='pinch'>pinch</option>
                            <option value='package'>package</option>
                            <option value='teaspoon'>teaspoon</option>
                            <option value='tablespoon'>tablespoon</option>
                            <option value='ounce'>ounce</option>
                            <option value='pint'>pint</option>
                            <option value='bundle'>bundle</option>
                            <option value='other'>other</option>
                        </select></label>
                        <label htmlFor={`ingredientUnitOther${idx}`}> Other Unit:
                        <input type='text' name={`ingredientUnitOther${idx}`}/><br/></label>
                <button type='button' onClick={()=>this.deleteIngredient(idx)}>Delete</button>
            </fieldset>)
        }
    render(){
        let recipe=this.findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        if(typeof(recipe.ingredients)==='string'){
            recipe={    
               id: recipe.id,
               name: xss(recipe.name),
               date_created: recipe.date_created,
               date_modified: recipe.date_modified,
               ingredients: JSON.parse(recipe.ingredients),
               instructions: xss(recipe.instructions),
               link: xss(recipe.link),
               created_by: xss(recipe.created_by),
               note: xss(recipe.note),
               folder_id: recipe.folder_id,
               folderName:recipe.folderName,
               user: recipe.user,
               }
               recipe= recipe
           }else{
           recipe= recipe
           }
        const displayedIngredients= this.createIngredientFields(this.state)
        return (<>
         <Header/>
         <Nav userId={this.context.recipes[0].user.id}/>
            <div className='updateRecipe' style={{margin:'auto',display:'flex',flexDirection:'column',width:'60%'}}>
            <h3>Recipe</h3> 
            <button type='button' onClick={()=>this.updateIngredient(recipe)}>{(this.state.ingredients.length===0&&this.state.deleted===false)?('Update Ingredients'):('Reset Ingredients')}</button> 
            <form onSubmit={e=>this.handleSubmit(e,recipe)}>
                <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                {(this.state.ingredients.length===0)?(null):(displayedIngredients)}

                {(this.state.ingredients.length===0&&this.state.deleted===false)?(null):
                (<button type='button' onClick={()=>this.addIngredient(recipe)}>Add Another Ingredient</button>)}

                <br/><label htmlFor='name'>Name:</label><br/>
                <textarea name='name' defaultValue={recipe.name}>
                </textarea><br/>
                <ValidationError Namemessage={this.state.nameError}/>
                <label htmlFor='instructions'>
                Instructions: </label><br/>
                <textarea name='instructions' defaultValue={recipe.instructions}>
                </textarea><br/>
                <ValidationError Instructionsmessage={this.state.instructionsError}/>
                <label htmlFor='createdBy'>Created By:</label><br/>
                <textarea name='createdBy' defaultValue={recipe.created_by}>
                </textarea><br/>
                <label htmlFor='link'>Link:</label><br/>
                <textarea name='link' defaultValue={recipe.link}>
                </textarea><br/>
                <label htmlFor='note'>Note:</label><br/>
                <textarea name='note' defaultValue={recipe.note}>
                </textarea><br/>
                <label htmlFor='folder_name'>Choose a different folder to Move recipe: </label> 
           <br/>
            <select name="folder">
                <option name='folder' value={recipe.folder_id}>{recipe.folderName}</option>
            {this.context.folders.filter(folder=>folder.id!==recipe.folder_id).map((folder)=>{
             return(<option name="folder" key={folder.id}>{folder.name}</option>)
            })}
            </select><br/>
           
                <button type='submit'>Update Recipe</button>
                </form> 
                
                <button onClick={()=>this.props.history.goBack()}>Cancel</button>
            </div></>
        )
    }
}
export default withRouter(UpdateRecipe)
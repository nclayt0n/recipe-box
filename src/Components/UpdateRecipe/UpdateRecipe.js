import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import moment from 'moment'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
import TokenService from '../../services/token-service'
import config from '../../config'
const uuidv4 = require('uuid/v4');

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
        console.log(updatedRecipe)
        //will post to DB and also to context
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
            body: JSON.stringify({'id':updatedRecipe.id})
        };
            fetch(url,options)
            .then(this.context.updateRecipe(updatedRecipe))
            .catch(error =>{
                this.setState({error})
            })
        this.props.history.goBack()
    }
}
     deleteIngredient=(idx)=>{
         this.setState({ingredients:this.state.ingredients.slice(0,idx).concat(this.state.ingredients.slice(idx + 1,this.state.ingredients.length)),deleted:true})
     }
    addIngredient=(recipe)=>{
        const ingredient={name:'',quantity:'',unit:''}
        if(this.state.ingredients.length===0){this.setState({ingredients:[...this.state.ingredients,ingredient]})
    }else{
        this.setState({ingredients:[...this.state.ingredients,ingredient]})}
    }
    findFolderandRecipe(id,folders,recipes){
        id=parseInt(id)
        if(folders===undefined){
            return null
        }else{
            const results=recipes.filter(recipe=>recipe.id===id);
            const recipe=results[0];
            const folder = folders.filter(f=>f.id===recipe.folder_id );
            recipe.folderName=folder[0].name; 
            return recipe  
        }
      
    }
     handleSubmit=(e,recipe)=>{
        e.preventDefault()  
        let name=e.target.name.value;
        let note=e.target.note.value;
        let link= e.target.link.value;
        let createdBy=e.target.createdBy.value
        let instructions=e.target.instructions.value
        let folderId=e.target.folder.value   
        const localTime = moment().format('YYYY-MM-DD');
        let proposedDate = localTime + "T00:00:00.000Z";
        
        if(this.state.ingredients.length===0&&this.state.deleted===false){
            let updatedRecipe={
            id:recipe.id,
            name,
            modified:proposedDate,
            folderId,
            ingredients:recipe.ingredients,  
            link,
            instructions,
            createdBy,
            note
        }
            this.validateRecipe(updatedRecipe)
            console.log(updatedRecipe.concat(recipe))
        }
        if(this.state.ingredients.length===0&&this.state.deleted===true){
            let updatedRecipe={
            id:recipe.id,
            name,
            modified:proposedDate,
            folderId,
            ingredients:[],  
            link,
            instructions,
            createdBy,
            note
        }
        console.log(updatedRecipe.concat(recipe))
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
                name,
                modified:proposedDate,
                folderId,
                ingredients:ingredients,  
                link,
                instructions,
                createdBy,
                note
            }
            console.log(updatedRecipe.concat(recipe))
            this.validateRecipe(updatedRecipe)
        //here send to api then in that api call then have the this.context.addRecipe
        }
    }
    updateIngredient=(recipe)=>{
         this.setState({ingredients:recipe.ingredients})
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
                        <input type='text' name={`ingredientUnitOther${idx}`}/><br/></label>x
                <button type='button' onClick={()=>this.deleteIngredient(idx)}>Delete</button>
            </fieldset>)
        }
    render(){
        let recipe=this.findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const displayedIngredients= this.createIngredientFields(this.state)
        console.log(this.state)
        return (<>
         <Header/>
         <Nav/>
            <div className='updateRecipe' style={{margin:'auto',display:'flex',flexDirection:'column',width:'60%'}}>
            <h3>Recipe</h3> 
            <button type='button' onClick={()=>this.updateIngredient(recipe)}>{(this.state.ingredients.length===0&&this.state.deleted===false)?('Update Ingredients'):('Reset Ingredients')}</button> 
            <form onSubmit={e=>this.handleSubmit(e,recipe)}>
                <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                {(this.state.ingredients.length===0)?(null):(displayedIngredients)}
                {(this.state.ingredients.length===0&&this.state.deleted===false)?(null):( <button type='button' onClick={()=>this.addIngredient(recipe)}>Add Ingredient</button>)}
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
                <textarea name='createdBy' defaultValue={recipe.createdBy}>
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
                <option name='folder' value={recipe.folderId}>{recipe.folderName}</option>
            {this.context.folders.filter(folder=>folder.id!==recipe.folderId).map((folder)=>{
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
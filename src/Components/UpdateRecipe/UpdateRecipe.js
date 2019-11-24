import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import moment from 'moment'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
import TokenService from '../../services/token-service'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
import updateRecipeStyles from './UpdateRecipeStyles'
import config from '../../config'
import MediaQuery from 'react-responsive'
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
            <fieldset key={uuidv4()} style={updateRecipeStyles.fieldset}>
                <h4 style={updateRecipeStyles.h4}> Ingredient:</h4>
                <label key={uuidv4()} htmlFor='ingredient' style={updateRecipeStyles.label} > Name:<br/>
                <input key={uuidv4()} name={`alteredName${idx}`}  defaultValue={this.state.ingredients[idx].name} style={updateRecipeStyles.input}/></label>
                <ValidationError Namemessage={this.state.nameError}/>
                <label htmlFor='ingredient' style={updateRecipeStyles.label}>Quantity:<br/>
                <input key={uuidv4()} name={`alteredQuantity${idx}`} defaultValue={this.state.ingredients[idx].quantity} style={updateRecipeStyles.input}/></label>
                <label htmlFor='ingredient' style={updateRecipeStyles.label}>Unit:<br/>
                <select style={updateRecipeStyles.select} key={uuidv4()} name='ingredientUnit' name={`alteredUnit${idx}`}>
                            <option value={this.state.ingredients[idx].unit} style={updateRecipeStyles.option}>{this.state.ingredients[idx].unit}</option>
                            <option value='cup' style={updateRecipeStyles.option}>cup</option>
                            <option value='pinch' style={updateRecipeStyles.option}>pinch</option>
                            <option value='package' style={updateRecipeStyles.option}>package</option>
                            <option value='teaspoon' style={updateRecipeStyles.option}>teaspoon</option>
                            <option value='tablespoon' style={updateRecipeStyles.option}>tablespoon</option>
                            <option value='ounce' style={updateRecipeStyles.option}>ounce</option>
                            <option value='pint' style={updateRecipeStyles.option}>pint</option>
                            <option value='bundle' style={updateRecipeStyles.option}>bundle</option>
                            <option value='other' style={updateRecipeStyles.option}>other</option>
                        </select></label>
                        <label htmlFor={`ingredientUnitOther${idx}`} style={updateRecipeStyles.label}> Other Unit:<br/>
                        <input type='text' name={`ingredientUnitOther${idx}`} style={updateRecipeStyles.input}/></label>
                <button type='button' style={updateRecipeStyles.updateButtons} onClick={()=>this.deleteIngredient(idx)}>Delete</button>
            </fieldset>)
        }
    createTabletIngredientFields=(recipe)=>{
        return recipe.ingredients.map((ingredient,idx)=>
            <fieldset key={uuidv4()} style={updateRecipeStyles.tablet.fieldset}>
                <h4 style={updateRecipeStyles.h4}> Ingredient:</h4>
                    <label key={uuidv4()} htmlFor='ingredient' style={updateRecipeStyles.label} > Name:<br/>
                    <input key={uuidv4()} name={`alteredName${idx}`}  defaultValue={this.state.ingredients[idx].name} style={updateRecipeStyles.input}/></label>
                    <ValidationError Namemessage={this.state.nameError}/>
                    <label htmlFor='ingredient' style={updateRecipeStyles.label}>Quantity:<br/>
                    <input key={uuidv4()} name={`alteredQuantity${idx}`} defaultValue={this.state.ingredients[idx].quantity} style={updateRecipeStyles.input}/></label>
                    <label htmlFor='ingredient' style={updateRecipeStyles.label}>Unit:<br/>
                    <select style={updateRecipeStyles.select} key={uuidv4()} name='ingredientUnit' name={`alteredUnit${idx}`}>
                        <option value={this.state.ingredients[idx].unit} style={updateRecipeStyles.option}>{this.state.ingredients[idx].unit}</option>
                        <option value='cup' style={updateRecipeStyles.option}>cup</option>
                        <option value='pinch' style={updateRecipeStyles.option}>pinch</option>
                        <option value='package' style={updateRecipeStyles.option}>package</option>
                        <option value='teaspoon' style={updateRecipeStyles.option}>teaspoon</option>
                        <option value='tablespoon' style={updateRecipeStyles.option}>tablespoon</option>
                        <option value='ounce' style={updateRecipeStyles.option}>ounce</option>
                        <option value='pint' style={updateRecipeStyles.option}>pint</option>
                        <option value='bundle' style={updateRecipeStyles.option}>bundle</option>
                        <option value='other' style={updateRecipeStyles.option}>other</option>
                    </select></label>
                    <label htmlFor={`ingredientUnitOther${idx}`} style={updateRecipeStyles.label}> Other Unit:<br/>
                    <input type='text' name={`ingredientUnitOther${idx}`} style={updateRecipeStyles.input}/></label>
                    <button type='button' style={updateRecipeStyles.updateButtons} onClick={()=>this.deleteIngredient(idx)}>Delete</button>
            </fieldset>)
        }
    createLaptopIngredientFields=(recipe)=>{
        return recipe.ingredients.map((ingredient,idx)=>
            <fieldset key={uuidv4()} style={updateRecipeStyles.laptop.fieldset}>
                 <h4 style={updateRecipeStyles.laptop.h4}> Ingredient:</h4>
                    <label key={uuidv4()} htmlFor='ingredient' style={updateRecipeStyles.laptop.label} > Name:<br/>
                        <input key={uuidv4()} name={`alteredName${idx}`}  defaultValue={this.state.ingredients[idx].name} style={updateRecipeStyles.laptop.input}/>
                    </label>
                    <ValidationError Namemessage={this.state.nameError}/>
                    <label htmlFor='ingredient' style={updateRecipeStyles.laptop.label}>Quantity:<br/>
                        <input key={uuidv4()} name={`alteredQuantity${idx}`} defaultValue={this.state.ingredients[idx].quantity} style={updateRecipeStyles.laptop.input}/>
                    </label>
                    <label htmlFor='ingredient' style={updateRecipeStyles.laptop.label}>Unit:<br/>
                    <select style={updateRecipeStyles.laptop.select} key={uuidv4()} name='ingredientUnit' name={`alteredUnit${idx}`}>
                        <option value={this.state.ingredients[idx].unit} style={updateRecipeStyles.laptop.option}>{this.state.ingredients[idx].unit}</option>
                        <option value='cup' style={updateRecipeStyles.laptop.option}>cup</option>
                        <option value='pinch' style={updateRecipeStyles.laptop.option}>pinch</option>
                        <option value='package' style={updateRecipeStyles.laptop.option}>package</option>
                        <option value='teaspoon' style={updateRecipeStyles.laptop.option}>teaspoon</option>
                        <option value='tablespoon' style={updateRecipeStyles.laptop.option}>tablespoon</option>
                        <option value='ounce' style={updateRecipeStyles.laptop.option}>ounce</option>
                        <option value='pint' style={updateRecipeStyles.laptop.option}>pint</option>
                        <option value='bundle' style={updateRecipeStyles.laptop.option}>bundle</option>
                        <option value='other' style={updateRecipeStyles.laptop.option}>other</option>
                    </select>
                    </label><br/>
                    <label htmlFor={`ingredientUnitOther${idx}`} style={updateRecipeStyles.laptop.label}> Other Unit:<br/>
                        <input type='text' name={`ingredientUnitOther${idx}`} style={updateRecipeStyles.laptop.input}/>
                    </label>
                    <button type='button' style={updateRecipeStyles.laptop.updateButtons} onClick={()=>this.deleteIngredient(idx)}>Delete</button>
            </fieldset>)
        }
    render(){
        if(this.context.recipes.length===0){
           return  <GetRecipeAndFolders/>
        }
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
        const displayedIngredients= this.createIngredientFields(this.state);
        const tabletDisplayedIngredients=this.createTabletIngredientFields(this.state);
        const laptopDisplayedIngredients=this.createLaptopIngredientFields(this.state);
        return (
        <>
        <Header/>
        <Nav/>
        <MediaQuery maxWidth={650}>
        <div className='updateRecipe' style={updateRecipeStyles.div}>
            <h3 className='updateh3' style={updateRecipeStyles.h3}>Update Recipe</h3> 
            <button type='button' onClick={()=>this.updateIngredient(recipe)} className='updateButtons' style={updateRecipeStyles.updateButtons}>{(this.state.ingredients.length===0&&this.state.deleted===false)?('Update Ingredients'):('Reset Ingredients')}</button> 
            <form onSubmit={e=>this.handleSubmit(e,recipe)}>
                <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                {(this.state.ingredients.length===0)?(null):(displayedIngredients)}
                {(this.state.ingredients.length===0&&this.state.deleted===false)?(null):
                (<button type='button' onClick={()=>this.addIngredient(recipe)} className='updateButtons' style={updateRecipeStyles.updateButtons}>Add Another Ingredient</button>)}
                <fieldset style={updateRecipeStyles.fieldset}>
                    <label htmlFor='name' style={updateRecipeStyles.label}>Name:<br/>
                        <textarea name='name' defaultValue={recipe.name} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <ValidationError Namemessage={this.state.nameError}/>
                    <label htmlFor='instructions' style={updateRecipeStyles.label}>Instructions:<br/> 
                        <textarea name='instructions' defaultValue={recipe.instructions} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <ValidationError Instructionsmessage={this.state.instructionsError}/>
                    <label htmlFor='createdBy' style={updateRecipeStyles.label}>Created By:<br/>
                        <textarea name='createdBy' defaultValue={recipe.created_by} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <label htmlFor='link' style={updateRecipeStyles.label}>Link:<br/>
                        <textarea name='link' defaultValue={recipe.link} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <label htmlFor='note' style={updateRecipeStyles.label}>Note:<br/>
                        <textarea name='note' defaultValue={recipe.note} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <label htmlFor='folder_name' style={updateRecipeStyles.label}>Folder: 
                        <select name="folder" style={updateRecipeStyles.select}>
                            <option name='folder' value={recipe.folder_id} style={updateRecipeStyles.option}>{recipe.folderName}</option>
                            {this.context.folders.filter(folder=>folder.id!==recipe.folder_id).map((folder)=>{
                                return(<option name="folder" key={folder.id} style={updateRecipeStyles.option}>{folder.name}</option>)})}
                        </select>
                    </label>
                </fieldset>
                <button type='submit' className='updateButtons' style={updateRecipeStyles.updateButtons}>Update</button>
                <button type='button' onClick={()=>this.props.history.goBack()} className='updateButtons' style={updateRecipeStyles.updateButtons}>Cancel</button>
            </form> 
        </div>
        </MediaQuery>
        <MediaQuery minWidth={651} maxWidth={950}>
        <div className='updateRecipe' style={updateRecipeStyles.tablet.div}>
            <h3 className='updateh3' style={updateRecipeStyles.tablet.h3}>Update Recipe</h3> 
            <button type='button' onClick={()=>this.updateIngredient(recipe)} className='updateButtons' style={updateRecipeStyles.updateButtons}>{(this.state.ingredients.length===0&&this.state.deleted===false)?('Update Ingredients'):('Reset Ingredients')}</button> 
            <form onSubmit={e=>this.handleSubmit(e,recipe)}>
                <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                {(this.state.ingredients.length===0)?(null):(tabletDisplayedIngredients)}
                {(this.state.ingredients.length===0&&this.state.deleted===false)?(null):
                (<button type='button' onClick={()=>this.addIngredient(recipe)} className='updateButtons' style={updateRecipeStyles.updateButtons}>Add Another Ingredient</button>)}
                <fieldset style={updateRecipeStyles.tablet.fieldset}>
                    <label htmlFor='name' style={updateRecipeStyles.label}>Name:<br/>
                        <textarea name='name' defaultValue={recipe.name} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <ValidationError Namemessage={this.state.nameError}/>
                    <label htmlFor='instructions' style={updateRecipeStyles.label}>Instructions:<br/> 
                        <textarea name='instructions' defaultValue={recipe.instructions} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <ValidationError Instructionsmessage={this.state.instructionsError}/>
                    <label htmlFor='createdBy' style={updateRecipeStyles.label}>Created By:<br/>
                        <textarea name='createdBy' defaultValue={recipe.created_by} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <label htmlFor='link' style={updateRecipeStyles.label}>Link:<br/>
                        <textarea name='link' defaultValue={recipe.link} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <label htmlFor='note' style={updateRecipeStyles.label}>Note:<br/>
                        <textarea name='note' defaultValue={recipe.note} style={updateRecipeStyles.textarea}>
                        </textarea>
                    </label>
                    <label htmlFor='folder_name' style={updateRecipeStyles.label}>Folder: 
                        <select name="folder" style={updateRecipeStyles.select}>
                            <option name='folder' value={recipe.folder_id} style={updateRecipeStyles.option}>{recipe.folderName}</option>
                            {this.context.folders.filter(folder=>folder.id!==recipe.folder_id).map((folder)=>{
                                return(<option name="folder" key={folder.id} style={updateRecipeStyles.option}>{folder.name}</option>)})}
                        </select>
                    </label>
                </fieldset>
                <button type='submit' className='updateButtons' style={updateRecipeStyles.updateButtons}>Update</button>
                <button type='button' onClick={()=>this.props.history.goBack()} className='updateButtons' style={updateRecipeStyles.updateButtons}>Cancel</button>
            </form> 
        </div>
        </MediaQuery>
        <MediaQuery minWidth={951}>
        <div className='updateRecipe' style={updateRecipeStyles.laptop.div}>
            <h3 className='updateh3' style={updateRecipeStyles.laptop.h3}>Update Recipe</h3>  
            <form onSubmit={e=>this.handleSubmit(e,recipe)} style={updateRecipeStyles.laptop.form}>
                <div className='recipebox1' style={updateRecipeStyles.laptop.recipeBox1}>
                {(this.state.ingredients.length===0)?
                (<form style={updateRecipeStyles.laptop.form}>
                    <fieldset style={updateRecipeStyles.laptop.fieldset}>
                        <label htmlFor='ingredientsDisplay' style={updateRecipeStyles.laptop.label}>Ingredients:
                        <br/> 
                            <textarea name='ingredientsDisplay' readOnly defaultValue={recipe.ingredients.map(ingredient=>` ${ingredient.name} ${ingredient.quantity} ${ingredient.unit} `)} style=  {updateRecipeStyles.laptop.textarea}>
                            </textarea>
                        </label>
                    </fieldset>
                </form>):(null)}
                    <button type='button' onClick={()=>this.updateIngredient(recipe)} className='updateButtons' style={updateRecipeStyles.laptop.updateButtons}>{(this.state.ingredients.length===0&&this.state.deleted===false)?('Update Ingredients'):('Reset Ingredients')}</button> 
                    <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                    {(this.state.ingredients.length===0)?(null):(laptopDisplayedIngredients)}
                    {(this.state.ingredients.length===0&&this.state.deleted===false)?(null):
                    (<button type='button' onClick={()=>this.addIngredient(recipe)} className='updateButtons' style=            {updateRecipeStyles.laptop.updateButtons}>Add Another Ingredient</button>)}
                </div>
                <div className='recipeBox2' style={updateRecipeStyles.laptop.recipeBox2}>
                    <fieldset style={updateRecipeStyles.laptop.fieldset}> 
                    <h4 style={updateRecipeStyles.laptop.h4}> Recipe:</h4>
                        <label htmlFor='name' style={updateRecipeStyles.laptop.label}>Name:<br/>
                            <textarea name='name' defaultValue={recipe.name} style={updateRecipeStyles.laptop.textarea}>
                            </textarea>
                        </label>
                        <ValidationError Namemessage={this.state.nameError}/>
                        <label htmlFor='instructions' style={updateRecipeStyles.laptop.label}>Instructions:<br/> 
                            <textarea name='instructions' defaultValue={recipe.instructions} style={updateRecipeStyles.laptop.textarea}>
                            </textarea>
                        </label>
                        <ValidationError Instructionsmessage={this.state.instructionsError}/>
                        <label htmlFor='createdBy' style={updateRecipeStyles.laptop.label}>Created By:<br/>
                            <textarea name='createdBy' defaultValue={recipe.created_by} style={updateRecipeStyles.laptop.textarea}>
                            </textarea>
                        </label>
                        <label htmlFor='link' style={updateRecipeStyles.laptop.label}>Link:<br/>
                            <textarea name='link' defaultValue={recipe.link} style={updateRecipeStyles.laptop.textarea}>
                            </textarea>
                        </label>
                        <label htmlFor='note' style={updateRecipeStyles.laptop.label}>Note:<br/>
                            <textarea name='note' defaultValue={recipe.note} style={updateRecipeStyles.laptop.textarea}>
                            </textarea>
                        </label>
                        <label htmlFor='folder_name' style={updateRecipeStyles.laptop.label}>Folder: 
                            <select name="folder" style={updateRecipeStyles.laptop.select}>
                                <option name='folder' value={recipe.folder_id} style={updateRecipeStyles.laptop.option}>{recipe.folderName}</option>
                                {this.context.folders.filter(folder=>folder.id!==recipe.folder_id).map((folder)=>{
                                    return(<option name="folder" key={folder.id} style={updateRecipeStyles.laptop.option}>{folder.name}</option>)})}
                            </select>
                        </label>
                        <button type='submit' className='updateButtons' style={updateRecipeStyles.laptop.updateButtons}>Update</button>
                        <button type='button' onClick={()=>this.props.history.goBack()} className='updateButtons' style={updateRecipeStyles.laptop.updateButtons}>Cancel</button>
                    </fieldset>
                </div>
            </form> 
        </div>
        </MediaQuery>
        </>
        )
    }
}
export default withRouter(UpdateRecipe)
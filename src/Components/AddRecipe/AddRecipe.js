import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './AddRecipe.css'
import ValidationError from '../../Validation/ValidationError';
const uuidv4 = require('uuid/v4');

class AddRecipe extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            ingredients:[],
            nameError:'',
            ingredientsError:'',
            instructionsError:'',
        }    
        
    }
    createDisplayedIngredients=(ingredients)=>ingredients.map(ingredient=>{let x=` ${ingredient.name} ${ingredient.quantity} ${ingredient.unit}`
return x})
    addIngredientInput=()=>{
        let newInput=
            <>
            <label htmlFor='ingredientName'>Ingredient name:
            <input type='text' name='ingredientName' autofocus/></label><br/>
            <label htmlFor='ingredientQuantity'>Ingredient Quantity:
            <input type='text' name='ingredientQuantity'/></label><br/>
            <label htmlFor='ingredientUnit'>Ingredient Unit:
            <select name='ingredientUnit' >
            <option value=''></option>
            <option value='Cup'>Cup</option>
            <option value='Pinch'>Pinch</option>
            <option value='Package'>Package</option>
            <option value='Teaspoon'>Teaspoon</option>
            <option value='Tablespoon'>Tablespoon</option>
            <option value='Ounce'>Ounce</option>
            <option value='Pint'>Pint</option>
            <option value='Bundle'>Bundle</option>
            <option value='Other'>Other</option>
                </select></label>
            <label htmlFor='ingredientUnitOther'> Other Unit:
            <input type='text' name='ingredientUnitOther'/></label><br/>
            </>
        return newInput
    }
    addIngredient=(e)=>{
        e.preventDefault();
        let quantity;
        (e.target.ingredientQuantity.value.length===0)?quantity=1:quantity=e.target.ingredientQuantity.value;
        let ingredientUnit;
        (e.target.ingredientUnit.value==='Other')? ingredientUnit=e.target.ingredientUnitOther.value:ingredientUnit=e.target.ingredientUnit.value;
        this.setState({
        ingredients:[...this.state.ingredients,{name:e.target.ingredientName.value,quantity,unit:ingredientUnit}]
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let name=e.target.name.value;
        let note=e.target.note.value;
        let link= e.target.link.value;
        let createdBy=e.target.createdBy.value;
        let folderId=e.target.folder.value;
        let instructions=e.target.instructions.value;
        let recipe={
            id:uuidv4(),
            name,
            instructions,
            ingredients:this.state.ingredients,
            note,
            link,
            createdBy,
            folderId
        }
        this.validateRecipe(recipe)
        //here send to api then in that api call then have the this.context.addRecipe
    }   
    validateRecipe=(recipe)=>{
        if(recipe.name.length<3){
            this.setState({nameError: '*Required & Must be atleast 3 characters'
        }) 
        }else{this.setState({nameError:''})}
        if(recipe.ingredients.length<1){
            this.setState({ingredientsError:'*Required & Must add at least 1 ingredient'})
        }
        else{this.setState({ingredientsError:''})}
        if(recipe.instructions.length<1){
            this.setState({instructionsError:'*Required & Must add instruction'})
            
        }
        else{this.setState({instructionsError:''})}
       
        this.recipeCall(recipe)
    }
    recipeCall=(recipe)=>{
        //will post to DB and also to context
        if(recipe.name.length===0 && recipe.ingredients.length===0 && recipe.instructions.length ===0){return null}else{
            this.context.addRecipe(recipe)
            this.props.history.push('/home-page')}
    }
    render(){
        return (
            <div className='addRecipe'>
                <h3><Link to={'/add-recipe'}>Add Recipe Form</Link> </h3>
                <form onSubmit={e=>this.addIngredient(e)}>
                    <fieldset>
                        <legend>Add Each Ingredient Before Submitting </legend><label htmlFor='ingredientName'>Ingredient Name:
                        <input type='text' name='ingredientName'/></label><br/>
                        <label htmlFor='ingredientQuantity'>Ingredient Quantity:
                        <input type='text' name='ingredientQuantity'/></label><br/>
                        <label htmlFor='ingredientUnit'>Ingredient Unit: 
                        <select name='ingredientUnit' >
                            <option value=''></option>
                            <option value='Cup'>Cup</option>
                            <option value='Pinch'>Pinch</option>
                            <option value='Package'>Package</option>
                            <option value='Teaspoon'>Teaspoon</option>
                            <option value='Tablespoon'>Tablespoon</option>
                            <option value='Ounce'>Ounce</option>
                            <option value='Pint'>Pint</option>
                            <option value='Bundle'>Bundle</option>
                            <option value='Other'>Other</option>
                        </select></label>
                        <label htmlFor='ingredientUnitOther'> Other Unit:
                        <input type='text' name='ingredientUnitOther'/><br/>
                        <button type='submit'>Enter</button></label><br/>
                        
                    </fieldset>
                </form>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <fieldset>
                        <legend>Recipe </legend>
                            <label htmlFor='name'>Name:
                            <input type='text' name='name'/></label><br/> 
                            <ValidationError Namemessage={this.state.nameError}/>
                            <label htmlFor='instructions'>Instructions:
                            <textarea name='instructions' placeholder='add instructions'></textarea></label><br/>
                            <ValidationError Instructionsmessage={this.state.instructionsError}/>
                            <label htmlFor='note'>Recipe note:
                            <input type='text' name='note'/></label><br/>
                            <label htmlFor='link'>Link:
                            <input type='text' name='link'/></label><br/>
                            <label htmlFor='createdBy'>Created by:
                            <input type='text' name='createdBy'/></label><br/>
                            <label htmlFor='folder'>Folder:
                            <select name='folder'>
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            {(this.state.ingredients.length>0)?'Ingredients: ':null}<br/> 
                            {(this.state.ingredients.length>0)?<textarea value={this.createDisplayedIngredients(this.state.ingredients)} readOnly>
                            </textarea>:null}
                            <ValidationError Ingredientsmessage={this.state.ingredientsError}/><br/>
                            <button type='submit'>Submit</button>
                    </fieldset>
                </form>   
               {(this.props.location.pathname==='/home-page')?null:<button onClick={()=>this.props.history.goBack()}>Cancel</button>} 
            </div>
        )
    }
}
export default withRouter(AddRecipe)
import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './AddRecipe.css'
import ValidationError from '../../Validation/ValidationError';
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import hpStyles from '../HomePage/HomePageStyles'
import addRStyles from './AddRecipeStyles'
import config from '../../config'
import moment from 'moment';
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
    createDisplayedIngredients=(ingredients)=>ingredients.map(ingredient=>{let i=` ${ingredient.name} ${ingredient.quantity} ${ingredient.unit}`
    return i})
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
        (e.target.ingredientUnit.value.length!==0)?
        ingredientUnit=e.target.ingredientUnit.value:ingredientUnit='not specified';
        (e.target.ingredientUnit.value==='other')? ingredientUnit=e.target.ingredientUnitOther.value:ingredientUnit=e.target.ingredientUnit.value;

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
        let folder_id=parseInt(e.target.folder.value);
        let instructions=e.target.instructions.value;
        let recipe={
            name,
            instructions,
            ingredients:this.state.ingredients,
            note,
            link,
            createdBy,
            folder_id
        }
        this.validateRecipe(recipe)
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
       
        this.callApi(recipe)
    }
    recipeCall=(recipe)=>{
        //will post to DB and also to context
        if(recipe.name.length===0 && recipe.ingredients.length===0 && recipe.instructions.length ===0){return null}else{
            this.context.addRecipe(recipe)
            this.props.history.push(`/home-page`)}
    }
    callApi=(recipe)=>{
        const {name,
            instructions,
            ingredients,
            note,
            link,
            createdBy,
            folder_id}=recipe    
            console.log(JSON.stringify(recipe)) 
            console.log(JSON.stringify(ingredients))
        const url=`${config.API_ENDPOINT}/recipes`;
        const options={
            method:'POST',
            headers:{
          'content-type':'application/json',
          'Authorization':`Bearer ${config.API_TOKEN}`,
        },
        body: JSON.stringify({'name':name,'date_created':moment().format(),'folder_id':folder_id,'instructions':instructions,ingredients,note,link,created_by:createdBy,user_id:this.context.user_id})
    };
    
        fetch(url,options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => this.context.addRecipe(responseJson))
        .catch(error =>{
            this.setState({error})
        })
       
        // this.props.history.push('/')
    }
    render(){
        let style;
        if(this.props.location.pathname===`/home-page`){
            style=hpStyles
        }if(this.props.location.pathname==='/add-recipe'){
            style=addRStyles
        } 
        return (<>
        {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
            <div className='addRecipe' style={style.addRecipeStyle}>
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
                            <option value='cup'>Cup</option>
                            <option value='pinch'>Pinch</option>
                            <option value='package'>Package</option>
                            <option value='teaspoon'>Teaspoon</option>
                            <option value='tablespoon'>Tablespoon</option>
                            <option value='ounce'>Ounce</option>
                            <option value='pint'>Pint</option>
                            <option value='bundle'>Bundle</option>
                            <option value='other'>Other</option>
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
               {(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()}>Cancel</button>} 
            </div></>
        )
    }
}
export default withRouter(AddRecipe)
import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './AddRecipe.css'
const uuidv4 = require('uuid/v4');

class AddRecipe extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            ingredients:[]
        }    
        
    }
    createDisplayedIngredients=(ingredients)=>ingredients.map(ingredient=>{let x=` ${ingredient.name} ${ingredient.quantity} ${ingredient.unit}`
return x})
    addIngredientInput=()=>{
        let newInput=
            <>
            <label htmlFor="ingredientName">Ingredient name:</label>
            <input type="text" name="ingredientName" autofocus/><br/>
            <label htmlFor="ingredientQuantity">Ingredient Quantity:</label>
            <input type="text" name="ingredientQuantity"/><br/>
            <label htmlFor="ingredientUnit">Ingredient Unit:</label>
            <select name="ingredientUnit" >
            <option value=""></option>
            <option value="Cup">Cup</option>
            <option value="Pinch">Pinch</option>
            <option value="Package">Package</option>
            <option value="Teaspoon">Teaspoon</option>
            <option value="Tablespoon">Tablespoon</option>
            <option value="Ounce">Ounce</option>
            <option value="Pint">Pint</option>
            <option value="Bundle">Bundle</option>
            <option value="Other">Other</option>
                </select>
            <label htmlFor="ingredientUnitOther"> Other Unit:</label>
            <input type="text" name="ingredientUnitOther"/><br/>
            </>
        return newInput
    }
    addIngredient=(e)=>{
        e.preventDefault();
        let quantity;
        (e.target.ingredientQuantity.value.length===0)?quantity=1:quantity=e.target.ingredientQuantity.value;
        let ingredientUnit;
        (e.target.ingredientUnit.value==="Other")? ingredientUnit=e.target.ingredientUnitOther.value:ingredientUnit=e.target.ingredientUnit.value;
        this.setState({
        ingredients:[...this.state.ingredients,{name:e.target.ingredientName.value,quantity,unit:ingredientUnit}]
        })
    }

    handleSubmit=(e,context)=>{
        e.preventDefault()
        let title=e.target.title.value;
        let note=e.target.note.value;
        let link= e.target.link.value;
        let createdBy=e.target.creator.value;
        let folderId=e.target.folder.value;
        let recipe={
            title,
            ingredients:this.state.ingredients,
            note,
            link,
            createdBy,
            folderId
        }
        //here send to api then in that api call then have the this.context.addRecipe
        this.context.addRecipe(recipe)
    }

    render(){
        return (
            <div className="addRecipe">
                <h3><Link to={'/add-recipe'}>Add Recipe Form</Link> </h3>
                <form onSubmit={e=>this.addIngredient(e)}>
                    <fieldset>
                        <legend>Add Each Ingredient Before Submitting </legend><label htmlFor="ingredientName">Ingredient Name:</label>
                        <input type="text" name="ingredientName"/><br/>
                        <label htmlFor="ingredientQuantity">Ingredient Quantity:</label>
                        <input type="text" name="ingredientQuantity"/><br/>
                        <label htmlFor="ingredientUnit">Ingredient Unit: </label>
                        <select name="ingredientUnit" >
                            <option value=""></option>
                            <option value="Cup">Cup</option>
                            <option value="Pinch">Pinch</option>
                            <option value="Package">Package</option>
                            <option value="Teaspoon">Teaspoon</option>
                            <option value="Tablespoon">Tablespoon</option>
                            <option value="Ounce">Ounce</option>
                            <option value="Pint">Pint</option>
                            <option value="Bundle">Bundle</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="ingredientUnitOther"> Other Unit:</label>
                        <input type="text" name="ingredientUnitOther"/><br/>
                        <button type="submit">Enter</button><br/>
                        
                    </fieldset>
                </form>
                <form onSubmit={e=>this.handleSubmit(e,this.context)}>
                    <fieldset>
                        <legend>Recipe </legend>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title"/><br/> 
                            <label htmlFor="instructions">Instructions:</label>
                            <input type="text" name="instructions"/><br/>
                            <label htmlFor="note">Recipe note:</label>
                            <input type="text" name="note"/><br/>
                            <label htmlFor="link">Link:</label>
                            <input type="text" name="link"/><br/>
                            <label htmlFor="creator">Created by:</label>
                            <input type="text" name="creator"/><br/>
                            <label htmlFor='folder'>Folder:
                            <select name="folder">
                                {this.context.folders.map((folder)=>{
                                return(<option name="folder" key={folder.id} value={folder.id}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            {(this.state.ingredients.length>0)?'Ingredients: ':null}<br/> 
                            <textarea value={this.createDisplayedIngredients(this.state.ingredients)}>
                            </textarea>
                            <button type="submit">Submit</button>
                    </fieldset>
                </form>   
               {(this.props.location.pathname==="/home-page")?null:<button onClick={()=>this.props.history.goBack()}>Cancel</button>} 
            </div>
        )
    }
}
export default withRouter(AddRecipe)
import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'

class AddRecipe extends React.Component{
    static contextType=Context;
    handleSubmit=(e,context)=>{

}
    render(){
        return (
            <div className="addRecipe">
             <form onSubmit={e=>this.handleSubmit(e,this.context)}>
            <fieldset>
            <legend>Add Recipe Form</legend>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title"/><br/>
            <label htmlFor="instructions">Instructions:</label>
            <input type="text" name="instructions"/><br/>
            <label htmlFor="ingredientName">Ingredient name:</label>
            <input type="text" name="ingredientName"/><br/>
            <label htmlFor="ingredientQuantity">Ingredient Quantity:</label>
            <input type="text" name="ingredientQuantity"/><br/>
            <label htmlFor="note">Recipe note:</label>
            <input type="text" name="note"/><br/>
            <label htmlFor="link">Link:</label>
            <input type="text" name="link"/><br/>
            <label htmlFor="creator">Created by:</label>
            <input type="text" name="creator"/><br/>
            <label htmlFor="image">Image:</label>
            <input type="text" name="image"/><br/>
            <label htmlFor="folder">Folder:</label>
            <select name="folder" id="folderSelect">
                <option value="folder1">folder 1</option>
            </select>
            <button type="submit">Submit</button>
        </fieldset>
    </form>   
            </div>
        )
    }
}
export default withRouter(AddRecipe)
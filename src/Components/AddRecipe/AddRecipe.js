import React from 'react'
import {withRouter} from 'react-router-dom'

class AddRecipe extends React.Component{
    render(){
        return (
            <div className="addRecipe">
             <form>
            <fieldset>
            <legend>Add Recipe Form</legend>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title"/><br/>
            <label htmlFor="instructions">Instructions:</label>
            <input type="text" name="instructions"/><br/>
            <label htmlFor="ingredients">Ingredients:</label>
            <input type="text" name="ingredients"/><br/>
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
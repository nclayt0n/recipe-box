import React from 'react'
import {withRouter} from 'react-router-dom'
import Nav from '../Nav/Nav'

class AddRecipe extends React.Component{
    render(){
        return (
            <div className="addRecipe">
             <form>
            <fieldset>
            <legend>Add Recipe Form</legend>
            <label for="title">Title:</label>
            <input type="text" name="title"/><br/>
            <label for="instructions">Instructions:</label>
            <input type="text" name="instructions"/><br/>
            <label for="ingredients">Ingredients:</label>
            <input type="text" name="ingredients"/><br/>
            <label for="note">Recipe note:</label>
            <input type="text" name="note"/><br/>
            <label for="link">Link:</label>
            <input type="text" name="link"/><br/>
            <label for="creator">Created by:</label>
            <input type="text" name="creator"/><br/>
            <label for="image">Image:</label>
            <input type="text" name="image"/><br/>
            <label for="folder">Folder:</label>
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
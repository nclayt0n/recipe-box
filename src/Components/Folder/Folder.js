import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './Folder.css'
const uuidv4 = require('uuid/v4');

function findFolder(id,folders){
const folder = folders.filter(f => f.id === id);
let folderName=(folder[0].name) 
return folderName
}
function findRecipes(folderId,recipes){
    let recipeList=recipes.filter(r=>r.folderId===folderId);
    return recipeList.map(recipe=><section className='folderRecipeList' key={uuidv4()}>
        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link><br/></section>)
}
class Folder extends React.Component{
    static contextType=Context;
    render(){
        let folderName=findFolder(this.props.match.params.id,this.context.folders,this.context.recipes);
        let recipeList=findRecipes(this.props.match.params.id,this.context.recipes);
        return(
           <div className='folder'>
            <button onClick={()=>this.props.history.goBack()}>{folderName}</button>
            {recipeList}
            <div className='buttonBox'><button><Link to={`/update-folder/${this.props.match.params.id}`}>Update Folder</Link></button>
            <button><Link to={'/add-recipe'}>Add Recipe</Link></button></div>
            
            </div>
        )
    }
}
export default withRouter(Folder)
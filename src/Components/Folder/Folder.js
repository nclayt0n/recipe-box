import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
const uuidv4 = require('uuid/v4');

function findFolder(id,folders){
console.log(id,folders)
const folder = folders.filter(f => f.id === id);
let folderName=(folder[0].name) 
return folderName
}
function findRecipes(folderId,recipes){
    let recipeList=recipes.filter(r=>r.folderId===folderId);
    console.log(recipeList)
    return recipeList.map(recipe=><section className="individualFolder" key={uuidv4()}>
        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link><br/>
        <button><a href="updateFolder.html">Update</a></button>
        <button>Delete</button>
</section>)
}
class Folder extends React.Component{
    static contextType=Context;
    render(){
        let folderName=findFolder(this.props.match.params.id,this.context.folders,this.context.recipes);
        let recipeList=findRecipes(this.props.match.params.id,this.context.recipes);
        return(
           <div>
            <h2>{folderName}</h2>
            {recipeList}
            </div>
        )
    }
}
export default withRouter(Folder)
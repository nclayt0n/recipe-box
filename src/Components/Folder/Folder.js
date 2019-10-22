import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'

function findFolder(id,folders,recipes){
console.log(id,folders)
const folder = folders.filter(f => f.id === id);
let folderName=(folder[0].name) 
findRecipes(id,recipes)
return folderName
}
function findRecipes(folderId,recipes){
    let recipeList=recipes.filter(r=>r.folderId===folderId);
    console.log(recipeList)
    return recipeList.map(recipe=><section className="individualFolder">
        <Link to={`/recipe/${recipe.id}`}>Pumpkin Pie</Link><br/>
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
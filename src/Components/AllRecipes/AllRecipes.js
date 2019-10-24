import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
class AllRecipes extends React.Component{
    static contextType=Context;
    createDisplayedRecipes(recipes){
        console.log(recipes)
        return recipes.map(recipe=><li><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></li>)
    }
render(){
    let displayedRecipes;
(this.props.recipes!==undefined)?(displayedRecipes=this.props.recipes):(displayedRecipes=this.context.recipes);
    return(
        <div className="allRecipes">
        <ul>Recipes
 {this.createDisplayedRecipes(displayedRecipes)}
 </ul>
        </div>
    )
}
}
export default withRouter(AllRecipes)
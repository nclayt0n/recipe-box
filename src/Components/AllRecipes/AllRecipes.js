import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header' 
import Nav from '../Nav/Nav'
const uuidv4 = require('uuid/v4');
class AllRecipes extends React.Component{
    static contextType=Context;
    createDisplayedRecipes(recipes){
        return recipes.map(recipe=><li key={uuidv4()}><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></li>)
    }
render(){
    let displayedRecipes;
(this.props.recipes!==undefined)?(displayedRecipes=this.props.recipes):(displayedRecipes=this.context.recipes);
    return(
        <>
        {(this.props.location.pathname!=='/home-page')?<Header/>:''}
        {(this.props.location.pathname==='/home-page')?'':<Nav/>}
        <div className='allRecipes'>
            <ul>Recipes
            {this.createDisplayedRecipes(displayedRecipes)}
            </ul>
        </div>
        </>
    )
}
}
export default withRouter(AllRecipes)
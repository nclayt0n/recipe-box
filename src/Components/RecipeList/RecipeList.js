import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header' 
import Nav from '../Nav/Nav'
import hpStyles from '../HomePage/HomePageStyles'
import recipeListStyles from './RecipeListStyles'
const uuidv4 = require('uuid/v4');
class RecipeList extends React.Component{
    static contextType=Context;
    createDisplayedRecipes(recipes,style){
    return recipes.map(recipe=>{
        return <li key={uuidv4()} style={style.recipeListStyle.li}>
                    <Link to={`/recipe/${recipe.id}`} style={style.recipeListStyle.liA}>{recipe.name}</Link>
                </li>})}
render(){
    let style;
    if(this.props.location.pathname===`/home-page`){
        style=hpStyles
    }if(this.props.location.pathname==='/recipe-list'){
        style=recipeListStyles
    } 
    let displayedRecipes;
    (this.props.recipes!==undefined)?(displayedRecipes=this.props.recipes):(displayedRecipes=this.context.recipes);
    return(
        <>
        {(this.props.location.pathname!==`/home-page`)?<Header/>:''}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
        <div className='RecipeList' style={style.recipeListStyle.div}>
            <ul style={style.recipeListStyle.ul}>RECIPES
            {this.createDisplayedRecipes(displayedRecipes,style)}
            </ul> 
           {(this.props.location.pathname===`/home-page`)?null: 
           (<>
            <button><Link to={'/add-recipe'}>Add Recipe</Link></button>
            <button type='button' onClick={()=>this.props.history.goBack()}>Back</button>
            </>)}
        </div>
        </>
    )
}
}
export default withRouter(RecipeList)
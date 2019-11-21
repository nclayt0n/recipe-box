import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header' 
import Nav from '../Nav/Nav'
import hpStyles from '../HomePage/HomePageStyles'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
import MediaQuery from 'react-responsive'
import recipeListStyles from './RecipeListStyles'
const uuidv4 = require('uuid/v4');
class RecipeList extends React.Component{
    static contextType=Context;
    createDisplayedRecipes(recipes,style){
    return recipes.map(recipe=>{
        return <li key={uuidv4()} style={style.li}>
                    <Link to={`/recipe/${recipe.id}`} style={style.liA}>{recipe.name}</Link>
                </li>})}
render(){
    let style;
    if(this.context.recipes.length===0){
           return  <GetRecipeAndFolders/>
        }
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
        <MediaQuery maxWidth={650} className='mobile'>
        <div className='RecipeList' style={style.recipeListStyle.div}>
            <ul style={style.recipeListStyle.ul}><Link to={'/recipe-list'} style={style.recipeListStyle.ulA}>RECIPES</Link> 
            {this.createDisplayedRecipes(displayedRecipes,style.recipeListStyle)}
            </ul> 
           {(this.props.location.pathname===`/home-page`)?null: 
           (<>
            <button ><Link to={'/add-recipe'} style={style.recipeListStyle.button}>Add Recipe</Link></button>
            <button type='button' onClick={()=>this.props.history.goBack()} style={style.recipeListStyle.button}>Back</button>
            </>)}
        </div>
        </MediaQuery>
        <MediaQuery minWidth={651} className='tablet'>
        <div className='RecipeList' style={style.recipeListStyle.tablet.div}>
            <ul style={style.recipeListStyle.ul}><Link to={'/recipe-list'} style={style.recipeListStyle.tablet.ulA}>RECIPES</Link> 
            {this.createDisplayedRecipes(displayedRecipes,style.recipeListStyle.tablet)}
            </ul> 
           {(this.props.location.pathname===`/home-page`)?null: 
           (<>
            <button style={style.recipeListStyle.tablet.button}><Link to={'/add-recipe'} style={style.recipeListStyle.tablet.button}>Add Recipe</Link></button>
            <button type='button' onClick={()=>this.props.history.goBack()} style={style.recipeListStyle.tablet.button}>Back</button>
            </>)}
        </div>
        </MediaQuery>
        </>
    )
}
}
export default withRouter(RecipeList)
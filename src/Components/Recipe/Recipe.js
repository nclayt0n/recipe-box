import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import config from '../../config'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import TokenService from '../../services/token-service'
import xss from 'xss'
import ValidationError from '../../Validation/ValidationError'
import recipeStyles from './RecipeStyles'
import MediaQuery from 'react-responsive'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
const uuidv4 = require('uuid/v4');



class Recipe extends React.Component{
    static contextType=Context;
    state={error:'',recipes:[],folders:[]}
    findFolderandRecipe=(id,folders,recipes)=>{
    const results=recipes.filter(recipe=>recipe.id===parseInt(id));
    const recipe=results[0];
    const folder = folders.filter(f =>f.id ===recipe.folder_id);
    recipe.folderName=folder[0].name;
    return recipe;
}
    deleteRecipe=(recipe,props)=>{
        const url=`${config.API_ENDPOINT}/recipe/${recipe.id}`;
        const options={
            method:'DELETE',
            headers:{
          'content-type':'application/json',
          'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        }
    };
        fetch(url,options)
        .then(this.context.deleteRecipe(recipe.id,props))
        .catch(error =>{
            this.setState({error})
        })
        props.history.push(`/folder/${recipe.folder_id}`)
    }

    createDisplayedIngredients=(ingredients)=>{
        const displayedIngredients={
            mobileIngredients:ingredients.map((ingredient,idx)=>{
            return<li style={recipeStyles.mobile.recipeLi} key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>}),
            tabletIngredients:ingredients.map((ingredient,idx)=>{
            return<li style={recipeStyles.tablet.recipeLiI} key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>}),
            laptopIngredients:ingredients.map((ingredient,idx)=>{
            return<li style={recipeStyles.laptop.recipeLiI} key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>})
        }
        return displayedIngredients
        } 
   
    render(){
        if(this.context.recipes.length===0){
           return  <GetRecipeAndFolders/>
        }
        let recipe=this.findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
         if(typeof(recipe.ingredients)==='string'){
         recipe={    
            id: recipe.id,
            name: xss(recipe.name),
            date_created: recipe.date_created,
            date_modified: recipe.date_modified,
            ingredients: JSON.parse(recipe.ingredients),
            instructions: xss(recipe.instructions),
            link: xss(recipe.link),
            created_by: xss(recipe.created_by),
            note: xss(recipe.note),
            folder_id: recipe.folder_id,
            folderName:recipe.folderName,
            user: recipe.user,
            }
         }
        const ingredients= this.createDisplayedIngredients(recipe.ingredients)
        return(<>
            <Header/>
            <Nav/>
            <MediaQuery maxWidth={650}>
            <div className='recipe' style={recipeStyles.mobile.recipe}>
            <div className='recipeItems' style={recipeStyles.mobile.recipeItems}>
                    <h3 style={recipeStyles.mobile.h3}>Recipe: {recipe.name}</h3>
                    <ul style={recipeStyles.mobile.recipeUl}>INSTRUCTIONS: 
                        <li style={recipeStyles.mobile.recipeLiInstructions}>{recipe.instructions}</li>
                    </ul>
                    <ul style={recipeStyles.mobile.recipeUl}>INGREDIENTS:
                        {ingredients.mobileIngredients}
                    </ul>
                    {(recipe.created_by.length===0)?(null):
                    (<ul style={recipeStyles.mobile.recipeUl}> CREATED BY: 
                        <li style={recipeStyles.mobile.recipeLi}>{recipe.created_by}</li>
                    </ul>)}
                    {(recipe.link.length===0)?(null):(
                    <ul style={recipeStyles.mobile.recipeUl}>Link:
                        <li style={recipeStyles.mobile.recipeLi}>{recipe.link}</li>
                    </ul>)}
                    {(recipe.note.length===0)?(null):
                    (<ul style={recipeStyles.mobile.recipeUl}>NOTE: 
                        <li style={recipeStyles.mobile.recipeLi}>{recipe.note}</li>
                    </ul>)}
                   
                    <div className='buttons' style={recipeStyles.mobile.buttons}>
                        <button style={recipeStyles.mobile.recipeButton}><Link to={`/folder/${recipe.folder_id}`} style={{backgroundColor:'white',color:'var(--darkPurple)'}}>{recipe.folderName}</Link></button>
                        <button style={recipeStyles.mobile.recipeButton}>
                            <Link  to={`/update-recipe/${recipe.id}`} style={{backgroundColor:'white',color:'var(--darkPurple)'}}>Update Recipe</Link>
                        </button>
                        <button style={recipeStyles.mobile.recipeButton} type='button' onClick={()=>this.deleteRecipe(recipe,this.props)}>Delete Recipe</button>
                    </div>
                </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={651} maxWidth={1050}>
            <div className='recipe' style={recipeStyles.tablet.recipe}>
                <div className='recipeItems' style={recipeStyles.tablet.recipeItems}>
                    <h3 style={recipeStyles.tablet.h3}>Recipe: {recipe.name}</h3>
                    <ul style={recipeStyles.tablet.recipeUl}>INSTRUCTIONS: 
                        <li style={recipeStyles.tablet.recipeLiI}>{recipe.instructions}</li>
                    </ul>
                    <ul style={recipeStyles.tablet.recipeUl}>INGREDIENTS:
                        {ingredients.tabletIngredients}
                    </ul>
                    {(recipe.created_by.length===0)?(null):
                    (<ul style={recipeStyles.tablet.recipeUl}>CREATED BY: 
                        <li style={recipeStyles.tablet.recipeLi}>{recipe.created_by}</li>
                    </ul>)}
                    {(recipe.link.length===0)?(null):(
                    <ul style={recipeStyles.tablet.recipeUl}>Link:
                        <li style={recipeStyles.tablet.recipeLi}>{recipe.link}</li>
                    </ul>)}
                    {(recipe.note.length===0)?(null):
                    (<ul style={recipeStyles.tablet.recipeUl}>NOTE: 
                        <li style={recipeStyles.tablet.recipeLi}>{recipe.note}</li>
                    </ul>)}
                    
                    <div className='buttons' style={recipeStyles.tablet.buttons}>
                        <button style={recipeStyles.tablet.recipeButton}><Link to={`/folder/${recipe.folder_id}`} style={recipeStyles.tablet.recipeButtonA} >{recipe.folderName}</Link></button>
                        <button style={recipeStyles.tablet.recipeButton}>
                            <Link to={`/update-recipe/${recipe.id}`} style={recipeStyles.tablet.recipeButtonA}>Update Recipe</Link>
                        </button>
                        <button style={recipeStyles.tablet.recipeButton} type='button' onClick={()=>this.deleteRecipe(recipe,this.props)}>Delete Recipe</button>
                    </div>
                </div>
                 <ValidationError Namemessage={this.state.error}/>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={1051}>
            <div className='recipe' style={recipeStyles.laptop.recipe}>
                <div className='recipeItems' style={recipeStyles.laptop.recipeItems}>
                    <h3 style={recipeStyles.laptop.h3}>Recipe: {recipe.name}</h3>
                    <ul style={recipeStyles.laptop.recipeUl}>INSTRUCTIONS: 
                        <li style={recipeStyles.laptop.recipeLiI}>{recipe.instructions}</li>
                    </ul>
                    <ul style={recipeStyles.laptop.recipeUl}>INGREDIENTS:
                        {ingredients.laptopIngredients}
                    </ul>
                    {(recipe.created_by.length===0)?(null):
                    (<ul style={recipeStyles.laptop.recipeUl}>CREATED BY: 
                        <li style={recipeStyles.laptop.recipeLi}>{recipe.created_by}</li>
                    </ul>)}
                    {(recipe.link.length===0)?(null):(
                    <ul style={recipeStyles.laptop.recipeUl}>Link:
                        <li style={recipeStyles.laptop.recipeLi}>{recipe.link}</li>
                    </ul>)}
                    {(recipe.note.length===0)?(null):
                    (<ul style={recipeStyles.laptop.recipeUl}>NOTE: 
                        <li style={recipeStyles.laptop.recipeLi}>{recipe.note}</li>
                    </ul>)}
                    
                    <div className='buttons' style={recipeStyles.laptop.buttons}>
                        <button style={recipeStyles.laptop.recipeButton}><Link to={`/folder/${recipe.folder_id}`} style={recipeStyles.laptop.recipeButtonA}>{recipe.folderName}</Link></button>
                        <button style={recipeStyles.laptop.recipeButton}>
                            <Link to={`/update-recipe/${recipe.id}`} style={recipeStyles.laptop.recipeButtonA}>Update Recipe</Link>
                        </button>
                        <button style={recipeStyles.laptop.recipeButton} type='button' onClick={()=>this.deleteRecipe(recipe,this.props)}>Delete Recipe</button>
                    </div>
                </div>
                 <ValidationError Namemessage={this.state.error}/>
            </div>
            </MediaQuery>
            </>
        )
    }
}
export default withRouter(Recipe)
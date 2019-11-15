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
const uuidv4 = require('uuid/v4');



class Recipe extends React.Component{
    static contextType=Context;
    state={error:'',innerWidth:window.innerWidth}
    findFolderandRecipe=(id,folders,recipes)=>{
    const results=recipes.filter(recipe=>recipe.id===parseInt(id));
    const recipe=results[0];
    const folder = folders.filter(f =>f.id ===recipe.folder_id);
    recipe.folderName=folder[0].name;
    return recipe;
}
    deleteRecipe=(id,props)=>{
        const url=`${config.API_ENDPOINT}/recipe/${id}`;
        const options={
            method:'DELETE',
            headers:{
          'content-type':'application/json',
          'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({'id':id})
    };
        fetch(url,options)
        .then(this.context.deleteRecipe(id,props))
        .catch(error =>{
            this.setState({error})
        })
        props.history.push('/recipe-list')
    }

    createDisplayedIngredients=(ingredients)=>{
        return ingredients.map((ingredient,idx)=>{
            return<li style={recipeStyles.mobile.recipeLi} key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>})
        } 
   
    render(){
      
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
            recipe= recipe
        }else{
        recipe= recipe
        }
 const ingredients=this.createDisplayedIngredients(recipe.ingredients)

        return(<>
         <Header/>
         <Nav/>
            
            <MediaQuery maxWidth={750}>
            <div className='recipe' style={recipeStyles.mobile.recipe}>
            <div className='recipeItems' style={recipeStyles.mobile.recipeItems}>
                    <h3 style={recipeStyles.mobile.h3}>Recipe: {recipe.name}</h3>
                    <ul style={recipeStyles.mobile.recipeUl}>INSTRUCTIONS: 
                        <li style={{letterSpacing: '2 px',width:'80%',margin: 'auto',padding: '10 px',textAlign:'left',listStyle: 'none',fontWeight:'normal',color:'var(--purple)'}}>{recipe.instructions}</li>
                    </ul>
                    <ul style={recipeStyles.mobile.recipeUl}>INGREDIENTS:
                        {ingredients}
                    </ul>
                    {(recipe.created_by.length===0)?(null):
                    (<ul style={recipeStyles.mobile.recipeUl}>Created By: 
                        <li style={recipeStyles.mobile.recipeLi}>{recipe.created_by}</li>
                    </ul>)}
                    {(recipe.link.length===0)?(null):(
                    <ul style={recipeStyles.mobile.recipeUl}>Link:
                        <li style={recipeStyles.mobile.recipeLi}>{recipe.link}</li>
                    </ul>)}
                    {(recipe.note.length===0)?(null):
                    (<ul style={recipeStyles.mobile.recipeUl}>Note: 
                        <li style={recipeStyles.mobile.recipeLi}>{recipe.note}</li>
                    </ul>)}
                   
                    <div className='buttons' style={recipeStyles.mobile.buttons}>
                        <button style={recipeStyles.mobile.recipeButton}><Link to={`/folder/${recipe.folder_id}`} >{recipe.folderName}</Link></button>
                        <button style={recipeStyles.mobile.recipeButton}>
                            <Link  to={`/update-recipe/${recipe.id}`}>Update Recipe</Link>
                        </button>
                        <button style={recipeStyles.mobile.recipeButton} type='button' onClick={()=>this.setState({error:'To confirm delete, double click'})} onDoubleClick={()=>this.deleteRecipe(recipe.id,this.props)}>Delete Recipe</button>
                    </div>
                </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={750}>
            <div className='recipe' style={recipeStyles.laptop.recipe}>
                <div className='recipeItems' style={recipeStyles.laptop.recipeItems}>
                    <h3 style={recipeStyles.laptop.h3}>Recipe: {recipe.name}</h3>
                    <ul style={recipeStyles.laptop.recipeUl}>INSTRUCTIONS: 
                        <li style={{letterSpacing: '2 px',width:'=fit-content', margin: 'auto',padding: '10 px',textAlign:'left',listStyle: 'none',fontWeight:'normal',color:'var(--purple)'}}>{recipe.instructions}</li>
                    </ul>
                    <ul style={recipeStyles.laptop.recipeUl}>INGREDIENTS:
                        {ingredients}
                    </ul>
                    {(recipe.created_by.length===0)?(null):
                    (<ul style={recipeStyles.laptop.recipeUl}>Created By: 
                        <li style={recipeStyles.laptop.recipeLi}>{recipe.created_by}</li>
                    </ul>)}
                    {(recipe.link.length===0)?(null):(
                    <ul style={recipeStyles.laptop.recipeUl}>Link:
                        <li style={recipeStyles.laptop.recipeLi}>{recipe.link}</li>
                    </ul>)}
                    {(recipe.note.length===0)?(null):
                    (<ul style={recipeStyles.laptop.recipeUl}>Note: 
                        <li style={recipeStyles.laptop.recipeLi}>{recipe.note}</li>
                    </ul>)}
                    
                    <div className='buttons' style={recipeStyles.laptop.buttons}>
                        <button style={recipeStyles.laptop.recipeButton}><Link to={`/folder/${recipe.folder_id}`} style={{backgroundColor:'white',color:'var(--purple)'}} >{recipe.folderName}</Link></button>
                        <button style={recipeStyles.laptop.recipeButton}>
                            <Link to={`/update-recipe/${recipe.id}`} style={{backgroundColor:'white',color:'var(--purple)'}}>Update Recipe</Link>
                        </button>
                        <button style={recipeStyles.laptop.recipeButton} type='button' onClick={()=>this.setState({error:'To confirm delete, double click'})} onDoubleClick={()=>this.deleteRecipe(recipe.id,this.props)}>Delete Recipe</button>
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
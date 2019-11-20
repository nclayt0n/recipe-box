import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import ingredientsStyles from './IngredientsStyles'
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
import MediaQuery from 'react-responsive'
const uuidv4 = require('uuid/v4');

class Ingredients extends React.Component{
    static contextType=Context;
    
    constructor(){
        super()
        this.state={
            allRecipes:false,
            displayed:[],
            error:'',
        }
    }
    sortByRecipe=(e)=>{
        e.preventDefault();
        
        this.setState({error:'',allRecipes:false})
        let selectedRecipes = [];
        for (let i = 0, l = e.target.recipeSort.length; i < l; i++) {
            if (e.target.recipeSort[i].selected) {
            selectedRecipes.push(e.target.recipeSort[i].value);
            }
        }
        let displayed=selectedRecipes.map((recipeId)=>{
            return this.context.recipes.filter(f=>{
                return(parseInt(recipeId)===f.id)})});
        let filtered=displayed.map(recipes=>{
          return recipes.map(recipe=>{
            if(typeof(recipe.ingredients)==='string'){
                recipe.ingredients=JSON.parse(recipe.ingredients)
                return recipe
            }else{
                return recipe
            }
          })
        })
        this.setState({selectedRecipeIds:[...selectedRecipes]})
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'){ 
            this.setState({displayed:this.context.recipes,allRecipes:true})
        }else{ 
            this.setState({displayed:filtered})
    }}

    render(){ 
        const style=ingredientsStyles
        if(this.context.recipes.length===0){
            return  <GetRecipeAndFolders/>
         }
        let recipeOptions=this.context.recipes.map((recipe)=>{ 
            return <option key={uuidv4()} value={recipe.id} style={style.recipeSortOption}>{recipe.name}</option>})
        let tabletRecipeOptions=this.context.recipes.map((recipe)=>{ 
            return <option key={uuidv4()} value={recipe.id} style={style.tablet.recipeSortOption}>{recipe.name}</option>})
        let laptopRecipeOptions=this.context.recipes.map((recipe)=>{ 
            return <option key={uuidv4()} value={recipe.id} style={style.laptop.recipeSortOption}>{recipe.name}</option>})
        return(<>
        {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
        <MediaQuery maxWidth={650}>
        <form className='recipeSort' onSubmit={(e)=>this.sortByRecipe(e)} style={style.recipeSort}>
            <legend style={style.recipeSortLegend}>Ingredients Search</legend>
                <label htmlFor='recipeSort' style={style.recipeSortLabel}>Recipes<br/>
                <select  name='recipeSort' multiple size='1' style={style.recipeSortSelect}>
                <option key={uuidv4()} value='allR' style={style.recipeSortOption}>All Recipes</option>
                   {recipeOptions}
                </select>
                </label>
                <button type='submit' style={style.sortButton}>Submit</button>
        </form>
        {(this.state.displayed.length===0)?null:
        <section className='ingredientsList'  key={uuidv4()} style={style.ingredientsList}>
            <h3 key={uuidv4()} style={style.H3}>Ingredients</h3>
            {(this.state.clicked===false)?
            (<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
            
           <form key={uuidv4()} className='ingredientsDisplay' style={style.ingredientsDisplay}>
                <fieldset key={uuidv4()} style={style.ingredientDisplayFieldset}>
                    {(this.state.displayed===undefined)?
                    (<ValidationError Ingredientsmessage={this.state.error||'No Recipe To Display'}/>): null}
                {(this.state.allRecipes===true)?
                    (this.state.displayed.map(recipes=>{return recipes.ingredients.map(ingredient=>{
                        return <>
                        <label key={uuidv4()}className='ingredient' style={style.ingredientLabel}>
                            <input key={uuidv4()} type='checkbox' style={style.ingredientCheckbox}/>
                            {ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    })})):
                    (this.state.displayed.map(recipes=>{return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <>
                            <label key={uuidv4()} className='ingredient' style={style.ingredientLabel}>
                                <input key={uuidv4()} type='checkbox' style={style.ingredientCheckbox}/>{ingredient.name} {ingredient.quantity} {ingredient.unit}
                            </label><br/>
                            </>
                    }))})
                )}
            </fieldset>
            </form> 
        </section>}
        </MediaQuery>

        <MediaQuery minWidth={651} maxWidth={900}>
        <form className='recipeSort' onSubmit={(e)=>this.sortByRecipe(e)} style={style.tablet.recipeSort}>
            <legend style={style.tablet.recipeSortLegend}>Ingredients Search</legend>
                <label htmlFor='recipeSort' style={style.tablet.recipeSortLabel}>Recipes<br/>
                <select  name='recipeSort' multiple size='1' style={style.tablet.recipeSortSelect}>
                <option key={uuidv4()} value='allR' style={style.tablet.recipeSortOption}>All Recipes</option>
                   {tabletRecipeOptions}
                </select>
                </label>
                <button type='submit' style={style.tablet.sortButton}>Submit</button>
        </form>
        {(this.state.displayed.length===0)?null:<>
        <section className='ingredientsList'  key={uuidv4()} style={style.tablet.ingredientsList}>
            <h3 key={uuidv4()} style={style.tablet.H3}>Ingredients</h3>
            {(this.state.clicked===false)?
            (<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
           <form key={uuidv4()} className='ingredientsDisplay' style={style.ingredientsDisplay}>
                <fieldset style={style.tablet.ingredientDisplayFieldset}>
                {(this.state.displayed===undefined)?
                (<ValidationError Ingredientsmessage={this.state.error||'No Recipe To Display'}/>): null}
                {(this.state.allRecipes===true)?
                (this.state.displayed.map(recipes=>{return recipes.ingredients.map(ingredient=>{
                        return <>
                        <label key={uuidv4()}className='ingredient' style={style.tablet.ingredientLabel}>
                            <input key={uuidv4()} type='checkbox' style={style.tablet.ingredientCheckbox}/> 
                            {ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    })})):
                    (this.state.displayed.map(recipes=>{
                    return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <>
                        <label key={uuidv4()} className='ingredient' style={style.ingredientLabel}>
                            <input key={uuidv4()} type='checkbox' style={style.tablet.ingredientCheckbox}/>{ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    }))})
                )}
            </fieldset>
            </form> 
        </section></>}
        </MediaQuery>

        <MediaQuery minWidth={901}>
        <form className='recipeSort' onSubmit={(e)=>this.sortByRecipe(e)} style={style.laptop.recipeSort}>
            <legend style={style.laptop.recipeSortLegend}>Ingredients Search</legend>
                <label htmlFor='recipeSort' style={style.laptop.recipeSortLabel}>Recipes<br/>
                <select  name='recipeSort' multiple size='1' style={style.laptop.recipeSortSelect}>
                <option key={uuidv4()} value='allR' style={style.laptop.recipeSortOption}>All Recipes</option>
                   {laptopRecipeOptions}
                </select>
                </label>
                <button type='submit' style={style.laptop.sortButton}>Submit</button>
        </form>
        {(this.state.displayed.length===0)?null:<>
        <section className='ingredientsList'  key={uuidv4()} style={style.laptop.ingredientsList}>
            <h3 key={uuidv4()} style={style.laptop.H3}>Ingredients</h3>
            {(this.state.clicked===false)?
            (<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
            
           <form key={uuidv4()} className='ingredientsDisplay' style={style.ingredientsDisplay}>
                <fieldset style={style.laptop.ingredientDisplayFieldset}>
                {(this.state.displayed===undefined)?
                (<ValidationError Ingredientsmessage={this.state.error||'No Recipe To Display'}/>): null}
                {(this.state.allRecipes===true)?
                (this.state.displayed.map(recipes=>{return recipes.ingredients.map(ingredient=>{
                        return <>
                        <label key={uuidv4()}className='ingredient' style={style.laptop.ingredientLabel}>
                            <input key={uuidv4()} type='checkbox' style={style.laptop.ingredientCheckbox}/>
                            {ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    })})):
                    (this.state.displayed.map(recipes=>{
                    return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <>
                        <label key={uuidv4()} className='ingredient' style={style.laptop.ingredientLabel}>
                            <input key={uuidv4()} type='checkbox' style={style.laptop.ingredientCheckbox}/>{ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    }))})
                )}
            </fieldset>
            </form> 
        </section>
        </>}
        </MediaQuery>

       
        </>)
    }
}
export default withRouter(Ingredients)
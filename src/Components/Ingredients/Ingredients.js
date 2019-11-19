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
                
        this.setState({selectedRecipeIds:[...selectedRecipes]})
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'){ 
            this.setState({displayed:this.context.recipes,allRecipes:true})
        }else{ 
            this.setState({displayed:displayed})
    }}

    render(){ 
        const style=ingredientsStyles
        if(this.context.recipes.length===0){
            return  <GetRecipeAndFolders/>
         }
        let recipeOptions=this.context.recipes.map((recipe)=>{ 
            return <option key={uuidv4()} value={recipe.id} style={style.recipeSortOption}>{recipe.name}</option>})

        return(<>
        <Header/>
        <Nav/>
        
        <form className='recipeSort' onSubmit={(e)=>this.sortByRecipe(e)} style={style.recipeSort}>
            <legend style={style.recipeSortLegend}>Recipes</legend>
                <label htmlFor='recipeSort'> 
                <select  name='recipeSort' multiple size='1' style={style.recipeSortSelect}>
                <option key={uuidv4()} value='allR' style={style.recipeSortOption}>All Recipes</option>
                   {recipeOptions}
                </select>
                </label>
                <button type='submit' style={style.sortButton}>Submit</button>
        </form>
        {(this.state.displayed.length===0)?null:<>
        <MediaQuery maxWidth={650}>
        <section className='ingredientsList'  key={uuidv4()} style={style.ingredientsList}>
            <h3 key={uuidv4()} style={style.H3}>Ingredients</h3>
            {(this.state.clicked===false)?
            (<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
            
           <form key={uuidv4()} className='ingredientsDisplay' style={style.ingredientsDisplay}>
                <fieldset style={style.ingredientDisplayFieldset}>
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
                    (this.state.displayed.map(recipes=>{
                    return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <><label key={uuidv4()} className='ingredient' style={style.ingredientLabel}><input key={uuidv4()} type='checkbox' style={style.ingredientCheckbox}/>{ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    }))
                    })
                )}
            </fieldset>
            </form> 
        </section>
        </MediaQuery>
        <MediaQuery minWidth={651} maxWidth={900}>
        <section className='ingredientsList'  key={uuidv4()} style={style.ingredientsListTablet}>
            <h3 key={uuidv4()} style={style.H3}>Ingredients</h3>
            {(this.state.clicked===false)?
            (<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
            
           <form key={uuidv4()} className='ingredientsDisplay' style={style.ingredientsDisplay}>
                <fieldset style={style.ingredientDisplayFieldset}>
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
                    (this.state.displayed.map(recipes=>{
                    return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <><label key={uuidv4()} className='ingredient' style={style.ingredientLabel}><input key={uuidv4()} type='checkbox' style={style.ingredientCheckboxTablet}/>{ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    }))
                    })
                )}
            </fieldset>
            </form> 
        </section>
        </MediaQuery>
        <MediaQuery minWidth={901}>
        <section className='ingredientsList'  key={uuidv4()} style={style.ingredientsListTablet}>
            <h3 key={uuidv4()} style={style.H3}>Ingredients</h3>
            {(this.state.clicked===false)?
            (<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
            
           <form key={uuidv4()} className='ingredientsDisplay' style={style.ingredientsDisplay}>
                <fieldset style={style.ingredientDisplayFieldset}>
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
                    (this.state.displayed.map(recipes=>{
                    return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <><label key={uuidv4()} className='ingredient' style={style.ingredientLabel}><input key={uuidv4()} type='checkbox' style={style.ingredientCheckboxLaptop}/>{ingredient.name} {ingredient.quantity} {ingredient.unit}
                        </label><br/></>
                    }))
                    })
                )}
            </fieldset>
            </form> 
        </section>
        </MediaQuery>
        </>}</>)
    }
}
export default withRouter(Ingredients)
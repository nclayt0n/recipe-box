import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './Ingredients.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
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
            selectedRecipes.push(parseInt(e.target.recipeSort[i].value));
            }
        }
        let displayed=selectedRecipes.map((recipeId)=>{
            return this.context.recipes.filter(f=>{
                return(recipeId===f.id)})});
           console.log(selectedRecipes)     
        this.setState({selectedRecipeIds:[...selectedRecipes]})
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'){ 
            this.setState({displayed:this.context.recipes,allRecipes:true})
        }else{ 
            this.setState({displayed:displayed,clicked:true})
    }}

    render(){  
        // if(this.props!== undefined){
        //     this.setState({selectedRecipeIds:this.props.history.match.params.id})
        // }
        let recipeOptions=this.context.recipes.map((recipe)=>{ 
            return <option key={uuidv4()}  value={recipe.id}>{recipe.name}</option>})

        return(<>
        <Header/>
        <Nav/>
        
        <form className='recipeSort' onSubmit={(e)=>this.sortByRecipe(e)}>
            <legend>Sort Recipes</legend>
                <label htmlFor='recipeSort'> Select multiple: <br/>command + enter<br/>
                <select  name='recipeSort' multiple size='1'>
                    <option key={uuidv4()} value='allR'>All Recipes</option>
                   {recipeOptions}
                </select>
                </label><br/>
                <button type='submit'>Submit</button>
        </form>

        <section className='ingredientsList'  key={uuidv4()}>
            <h3 key={uuidv4()}><Link to={'/ingredients'}>Ingredients</Link></h3>

            <ValidationError Ingredientsmessage={this.state.error}/>
           <form key={uuidv4()}>
                {(this.state.displayed===undefined)?
                (<ValidationError Ingredientsmessage={this.state.error||'No Recipe To Display'}/>): null}
                {(this.state.allRecipes===true)?
                (this.state.displayed.map(recipes=>{
                    return recipes.ingredients.map(ingredient=>{
                        return <>
                            <label htmlFor='ingredientCheckbox' ><input key={uuidv4()} name='ingredientCheckbox' type='checkbox'/><input key={uuidv4()} value={ingredient.name+ingredient.quantity+ingredient.unit}/></label>
                        </>
                    })})):
                    (this.state.displayed.map(recipes=>{
                    return recipes.map(recipe=>recipe.ingredients.map(ingredient=>{
                        return <><label htmlFor='ingredientCheckbox' key={uuidv4()}><input name ='ingredientCheckbox' key={uuidv4()} type='checkbox'/>{ingredient.name}{ingredient.quantity}{ingredient.unit}
                        </label><br/></>
                    }))
                    })
                )}

            </form> 
        </section></>)
    }
}
export default withRouter(Ingredients)
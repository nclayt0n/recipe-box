import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
const uuidv4 = require('uuid/v4');

function findFolderandRecipe(id,folders,recipes){
    console.log(recipes)
    console.log(folders)
const results=recipes.filter(recipe=>recipe.id===parseInt(id));
const recipe=results[0];
const folder = folders.filter(f =>f.id ===recipe.folder_id);
recipe.folderName=folder[0].name;
return recipe;
}

class Recipe extends React.Component{
    static contextType=Context;
    createDisplayedIngredients=(ing)=>{
        // making ingredients pretty
        let i=[];
        let j=[];
        let k=[];
        i=ing.split('}');
        j=i.join().split('{');
       k=j.map((jj)=>jj.slice(1,jj.length-2));

       let ingredients=[];
       for(let num=1;num<k.length;num++){
            ingredients.push(k[num])
       }
       ingredients[0]=`"${ingredients[0]}`;
        if(ingredients===undefined){
            return null
        }else{
        return ingredients.map((ingredient,idx)=>{
           ingredient=(ingredient.split('"').join(" ").split(','))
        //    ingredient[idx].replace(/['"]+/g,'');
            return<li key={uuidv4()}>{ingredient}</li>})}}
    render(){
        let recipe=findFolderandRecipe(this.props.match.params.id,this.context.folders,this.context.recipes);
        const ingredients=this.createDisplayedIngredients(recipe.ingredients)
        
        return(<>
         <Header/>
         <Nav/>
            <div className='recipe' style={{margin:'auto',display:'flex',flexDirection:'column',width:'60%'}}>
            <h3>Recipe</h3>
                <ul style={{margin:'auto', }} >{recipe.name}
                <li>INTRUCTIONS: {recipe.instructions}</li>
                <Link to={'/ingredients'}>INGREDIENTS:</Link> 
               {ingredients}
                <li>Created By: {recipe.createdBy}</li>
                <li>{recipe.link}</li>
                <button><Link to={`/folder/${recipe.folderId}`}>{recipe.folderName}</Link></button>
                </ul>
                <button><Link to={`/update-recipe/${recipe.id}`}>Update Recipe</Link></button>
                <button onClick={()=>this.props.history.goBack()}>Back</button><br/>
                <button type='button' onClick={()=>this.context.deleteRecipe(recipe.id,this.props)}>Delete Recipe</button>
            </div></>
        )
    }
}
export default withRouter(Recipe)
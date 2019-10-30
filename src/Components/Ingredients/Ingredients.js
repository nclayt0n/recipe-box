import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './Ingredients.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
const uuidv4 = require('uuid/v4');

 //compressArrayFunction found @ https://gist.github.com/ralphcrisostomo/3141412
function compressArray(original) {
 let compressed = [];
 let copy = original.slice(0);
 for (let i = 0; i < original.length; i++) {
     let myCount = 0;	
     for (let w = 0; w < copy.length; w++) {
         if (original[i] === copy[w]) {
             myCount++;
             delete copy[w];
         }
     }
     if (myCount > 0) {
         let a={
             value:original[i],
             count:myCount,
         }

         compressed.push(a);
     }
 }
 return compressed;
};



class Ingredients extends React.Component{
    static contextType=Context;
    
    constructor(){
        super()
        this.state={
            clicked:false,
            selectedFolderIds:[],
            selectedRecipeIds:[],
        }
    }
    createIngredientsCount=(items)=>{
        return items.recipes.map(recipes=>recipes.ingredients.map(ingredient=><li  key={uuidv4()}>{ingredient.name}, {ingredient.quantity} {ingredient.unit}</li>))
    }
    sortByFolder=(e)=>{
        e.preventDefault();
        let selectedFolders=[];
        let selectedRecipes = [];
        for (var i = 0, l = this.context.recipes.length; i < l; i++) {
            if(e.target.folderSort[i].selected){
                selectedFolders.push(e.target.folderSort[i].value);
            }
            
        } 
        // if(selectedFolders.length===0||selectedFolders[0]==='allF'){
        //     for(let i=0;i<this.context.recipes.length;i++){ 
        //         console.log(this.context.folders[i].id)
        //         this.setState({selectedFolderIds:[...this.state.selectedFolderIds,this.context.folders[i].id]})
               
        //     }
            
        // }
            this.setState({clicked:true,
    selectedFolderIds:[...selectedFolders]})
        let sort=selectedRecipes.filter((recipeId)=>this.context.recipes.filter(r=>{return(recipeId===r.id)}))
        
console.log(this.state)
    
    }
    sortByRecipe=(e)=>{
        e.preventDefault();
        if(this.state.selectedFolderIds==='allF'||this.state.selectedFolderIds.length===undefined){
            this.setState({selectedFolderIds:this.context.folders.map(f=>{
                return f.folderId})})
        }
        let selectedRecipes = [];
        for (var i = 0, l = e.target.recipeSort.length; i < l; i++) {
            if (e.target.recipeSort[i].selected) {
            selectedRecipes.push(e.target.recipeSort[i].value);
            }
        }
       
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'&&this.state.selectedFolderIds.length!==undefined){
            for(let i=0;i<this.context.recipes.length;i++){
                this.setState({selectedRecipeIds:this.context.recipes.filter((r,idx)=>{
                    return r.id===this.state.selectedRecipeIds})})
            }
        }
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'&&this.state.selectedFolderIds.length===0||this.state.selectedFolderIds.length===undefined){
            for(let i=0;i<this.context.recipes.length;i++){
                this.setState({selectedRecipeIds:this.context.recipes[i].value})
            }
        }
        this.setState({clicked:true,
        selectedRecipeIds:[...selectedRecipes]})
        let sort=selectedRecipes.filter((recipeId)=>this.state.selectedFolderIds.filter(f=>{return(recipeId===f)}))
        console.log(this.state)
    }
    render(){  
        console.log(this.state)
        let filteredRecipes=this.state.selectedFolderIds.map(id=>
            this.context.recipes.filter(r=>{
                    return (r.folderId===id)}))
        let folderOptions=this.context.folders.map((folder,idx)=>
            <option key={uuidv4()} value={folder.id}>{folder.name}</option>);
            console.log(this.state.selectedFolderIds.length)
        let recipeOptions;
        (this.state.selectedFolderIds.includes('allF')||this.state.selectedFolderIds.length===0)?
        (recipeOptions=this.context.recipes.map((recipe,idx)=>{ 
            return <option key={uuidv4()} value={recipe.id}>{recipe.name}</option>})):
        (recipeOptions=filteredRecipes.map((recipe,idx)=>{ 
            if(recipe.length===0){
                return null
            }else{return <option key={uuidv4()} value={recipe[idx].id}>{recipe[idx].name}</option>}
           }));
        let displayedIngredients;
        (this.props.recipes!==undefined)?(displayedIngredients=this.createIngredientsCount(this.props)):(displayedIngredients=this.createIngredientsCount(this.context));
        return(<>
        {/* <Header/>
        <Nav/> */}
        <form onSubmit={(e)=>this.sortByFolder(e)}>
            <fieldset>
                <legend>Sort Folders</legend>
                <label htmlFor='folderSort'>Select multiple: command + enter<br/>
                <select name='folderSort' multiple>
                    <option value='allF'>All Folders</option>
                    {folderOptions}
                </select>
                </label><br/>
                
            </fieldset>
            <button >Submit</button>
        </form>
       <br/>
        <form onSubmit={(e)=>this.sortByRecipe(e)}>
            <legend>Sort Recipes</legend>
                <label htmlFor='recipeSort'> Select multiple: command + enter<br/>
                <select name='recipeSort' multiple size='1'>
                    <option value='allR'>All Recipes</option>
                   {recipeOptions}
                </select>
                </label><br/>
                <button type='submit'>Submit</button>
        </form>
        <section className='ingredientsList'  key={uuidv4()}>
            <h3 key={uuidv4()}><Link to={'/ingredients'}  >Ingredients</Link></h3>
            {displayedIngredients}
        </section></>)
    }
}
export default withRouter(Ingredients)
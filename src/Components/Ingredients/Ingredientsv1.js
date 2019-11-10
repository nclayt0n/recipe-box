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
            clicked:false,
            selectedFolderIds:[],
            selectedRecipeIds:[],
            displayed:[],
            error:'',
        }
    }
    sortByFolder=(e)=>{
        e.preventDefault();
        this.setState({error:''})
        let selectedFolders=[];
        for (var i = 0, l = this.context.recipes.length; i < l; i++) {
            if(e.target.folderSort[i].selected){

                selectedFolders.push(e.target.folderSort[i].value);
            }
            
        } 
        this.setState({clicked:true,
    selectedFolderIds:[...selectedFolders]})
        
        let displayed=this.state.selectedFolderIds.map((folderId)=>this.context.recipes.filter(f=>{return(folderId===f.folderId)}));
        if(selectedFolders[0]==='allF'){
            this.setState({displayed:this.context.recipes})
        }else{
            this.setState({displayed:displayed[0]})
        } 
    }
    sortByRecipe=(e)=>{
        e.preventDefault();
        this.setState({error:''})
        let selectedRecipes = [];
        for (var i = 0, l = e.target.recipeSort.length; i < l; i++) {
            if (e.target.recipeSort[i].selected) {
            selectedRecipes.push(e.target.recipeSort[i].value);
            }
        }
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'){ 
            this.setState({displayed:this.state.displayed})
        }
        if(this.state.displayed===undefined){
            this.setState({error:'No Recipes To Display, try again'})
        }if(selectedRecipes.length>0||selectedRecipes!==undefined){
            let displayed=this.state.selectedRecipeIds.map((recipeId)=>this.state.displayed.filter(f=>{return(recipeId===f.id)}));
        }
            
        if(selectedRecipes.length===0||selectedRecipes[0]==='allR'){
            for(let i=0;i<this.context.recipes.length;i++){
                this.setState({selectedRecipeIds:this.context.recipes[i].value})
            }
        }
        this.setState({clicked:true,
        selectedRecipeIds:[...selectedRecipes]})
        let sort=selectedRecipes.filter((recipeId)=>this.state.selectedFolderIds.filter(f=>{return(recipeId===f)}))
    }
    render(){  
        let folderOptions=this.context.folders.map((folder,idx)=>
            <option key={uuidv4()} value={folder.id}>{folder.name}</option>);

        let filteredRecipes=this.state.selectedFolderIds.map(id=>{
           return  this.context.recipes.filter(r=>{
                    return (r.folderId===id)})})
        if(this.state.selectedFolderIds>1){
            let filteredRecipes= [].concat.apply([], filteredRecipes)
                return filteredRecipes;
        }

        let recipeOptions;
        (this.state.selectedFolderIds.includes('allF'))?

        (recipeOptions=this.context.recipes.map((recipe)=>{ 
            return <option value={recipe.id}>{recipe.name}</option>})):

        (recipeOptions=filteredRecipes.map((recipes,idx)=>{ 
            if(recipes.length===0||recipes===undefined){
                return null
            }else{
                return recipes.map(recipe=>{ 
                    return <option key={uuidv4()} value={recipe.id}>{recipe.name}</option>}
            )}
           }));

           
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
        <form className='recipeSort' onSubmit={(e)=>this.sortByRecipe(e)}>
            <legend>Sort Recipes</legend>
                <label htmlFor='recipeSort'> Select multiple: command + enter<br/>
                <select  name='recipeSort' multiple size='1'>
                <option key={uuidv4()} value='allR'>All Recipes</option>
                   {recipeOptions}
                </select>
                </label><br/>
                <button type='submit'>Submit</button>
        </form>
        <section className='ingredientsList'  key={uuidv4()}>
            <h3 key={uuidv4()}><Link to={'/ingredients'}>Ingredients</Link></h3>
            {(this.state.clicked===false)?(<ValidationError Ingredientsmessage='Choose a Sort Field'/>):(null)}
            <ValidationError Ingredientsmessage={this.state.error}/>
           <ul>
                {(this.state.displayed===undefined)?
                (<ValidationError Ingredientsmessage={this.state.error||'No Recipe To Display'}/>):
                (this.state.displayed.map(recipes=>{
                    return recipes.ingredients.map(ingredient=>{
                        return <li key={uuidv4()}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>
                    })
                    })
                )}

            </ul> 
        </section></>)
    }
}
export default withRouter(Ingredients)
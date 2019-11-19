import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import FolderList from '../FolderList/FolderList';
import RecipeList from '../RecipeList/RecipeList'
import Context from '../../Context'
import Footer from '../Footer/Footer'
import hpStyles from '../HomePage/HomePageStyles'
import {Router} from 'react-router-dom'
import './HomePage.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders';

class HomePage extends React.Component{
    static contextType=Context;
    constructor(){
        super()
    this.state={
    folders:[],
    recipes:[],
    user_id:Number,
    error:''
  }
}
    render(){

        return(
        <div> 
            <GetRecipeAndFolders/>
            <Header/>
            <Nav/>
            <div className='addFolderContainer'style={{height:'fit-content'}}>
                <AddFolder/>
            </div>
            <AddRecipe />
            <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>
            <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
            <section className='ingredientsList'>
                <Link style={{color:'black',textDecoration:'none',cursor:'pointer'}} to={'/ingredients'}>Ingredients</Link>
            </section>
        </div>
        )}
}
export default withRouter(HomePage)
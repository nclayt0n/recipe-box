import React from 'react'
import {withRouter,Link,Route} from 'react-router-dom'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import FolderList from '../FolderList/FolderList';
import RecipeList from '../RecipeList/RecipeList'
import Search from '../Search/Search'
import Context from '../../Context'
import hpStyles from '../HomePage/HomePageStyles'
import {Router} from 'react-router-dom'
import './HomePage.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

class HomePage extends React.Component{
    static contextType=Context;
    
    render(){
        return(
        <div> 
            <Header/>
            <Nav/>
        <div className='addFolderContainer'>
            
        <AddFolder/></div>
           
            <AddRecipe/>
            <RecipeList />
            <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
            <section className='ingredientsList'>
            <Link style={{color:'black',textDecoration:'none',cursor:'pointer'}} to={'/ingredients'}>Ingredients</Link></section>
        </div>
        )}
}
export default withRouter(HomePage)
import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import FolderList from '../FolderList/FolderList';
import AllRecipes from '../AllRecipes/AllRecipes'
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
        <div className='addFolderContainer'><AddFolder/></div>
           
            <AddRecipe/>
            <AllRecipes />
            <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
            <section className='ingredientsList'>
            <Link to={'/ingredients'}>Ingredients</Link></section>
        </div>
        )}
}
export default withRouter(HomePage)
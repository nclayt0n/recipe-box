import React from 'react'
import {withRouter,Switch,Route} from 'react-router-dom'
import Header from '../Header/Header'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';
import Folder from '../Folder/Folder'
import FolderList from '../FolderList/FolderList';
import Ingredients from '../Ingredients/Ingredients'
import Nav from '../Nav/Nav'
import AllRecipes from '../AllRecipes/AllRecipes'
import Recipe from '../Recipe/Recipe'
import Search from '../Search/Search'
import UpdateFolder from '../UpdateFolder/UpdateFolder'
import Context from '../../Context'

class HomePage extends React.Component{
    static contextType=Context;
    render(){
        console.log(this.context)
        return(
        <div>
            <AddFolder/>
            <AddRecipe/>
            <AllRecipes />
            <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
            <Ingredients/>
            <Search/>
        </div>
        )}
}
export default withRouter(HomePage)
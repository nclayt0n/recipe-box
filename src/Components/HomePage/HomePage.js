import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import FolderList from '../FolderList/FolderList';
import Ingredients from '../Ingredients/Ingredients'
import AllRecipes from '../AllRecipes/AllRecipes'
import Search from '../Search/Search'
import Context from '../../Context'

class HomePage extends React.Component{
    static contextType=Context;
    render(){
        return(
        <div>
            <AddFolder/>
            <AddRecipe/>
            <AllRecipes />
            <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
            <section className='ingredientsList'>
            <Link to={'/ingredients'}>Ingredients</Link></section>
           
            <Search/>
        </div>
        )}
}
export default withRouter(HomePage)
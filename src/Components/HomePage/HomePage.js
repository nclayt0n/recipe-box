import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import FolderList from '../FolderList/FolderList';
import RecipeList from '../RecipeList/RecipeList'
import Context from '../../Context'
import MediaQuery from 'react-responsive'
import hpStyles from '../HomePage/HomePageStyles'
import HomePageStyles from './HomePageStyles'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders';
import Ingredients from '../Ingredients/Ingredients';

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
        const style=HomePageStyles
        return(
        <> 
            <GetRecipeAndFolders/>
            <Header/>
            <Nav/>
            <MediaQuery maxWidth={650}>
                <div className='addFolderContainer'style={style.addFolder.container}>
                <AddFolder/>
                </div>
                {this.context.folders.length===0?null:<FolderList folders={this.context.folders} recipes={this.context.recipes}/>}
                {this.context.folders.length===0?null:
                <AddRecipe />}
                {this.context.recipes.length===0?null:
                <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>}
                {this.context.folders.length===0?null:
                <section className='ingredientsContainer' style={style.ingredients.container}>
                    <Ingredients/>
                </section>}
            </MediaQuery>
            <MediaQuery minWidth={651} maxWidth={900}>
                <div className='addFolderContainer'style={style.addFolder.container}>
                <AddFolder/>
                </div>
                {this.context.folders.length===0?null:
                <AddRecipe />}
                {this.context.recipes.length===0?null:
                <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>}
                {this.context.folders.length===0?null:<FolderList folders={this.context.folders} recipes={this.context.recipes}/>}
                {this.context.folders.length===0?null:
                <section className='ingredientsContainer' style={style.ingredients.container}>
                    <Ingredients/>
                </section>}
            </MediaQuery>
            <MediaQuery minWidth={901}>
                <div className='addFolderContainer'style={style.addFolder.container}>
                <AddFolder/>
                </div>
                {this.context.folders.length===0?null:
                <AddRecipe />}
                {this.context.recipes.length===0?null:
                <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>}
                {this.context.folders.length===0?null:<FolderList folders={this.context.folders} recipes={this.context.recipes}/>}
                {this.context.folders.length===0?null:
                <section className='ingredientsContainer' style={style.ingredients.container}>
                    <Ingredients/>
                </section>}
            </MediaQuery>
        </>
        )}
}
export default withRouter(HomePage)
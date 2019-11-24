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
import folderListStyles from '../FolderList/FolderListStyles';
import Footer from '../Footer/Footer';

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
                <section className='ingredientsContainer' style={style.ingredientsContainer}>
                    <Ingredients/>
                </section>}
            </MediaQuery>
            <MediaQuery minWidth={651} maxWidth={950}>
            {this.context.folders.length===0?
            <section className='onlyAddFolderContainer'style={style.addFolder.container}>
                    <AddFolder/>
                </section>:
                <section className='addFolderContainer'style={style.addFolder.container}>
                    <AddFolder/>
                </section>}
                {this.context.folders.length===0?null:
                    <section>
                        <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
                    </section>}
                {this.context.folders.length===0?null:
                <AddRecipe />}
                {this.context.recipes.length===0?null:
                    <section className='recipelistContainer'>
                        <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>
                    </section>}
                
                {this.context.folders.length===0?null:
                    <section className='ingredientsContainer' style={style.ingredientsContainer}>
                        <Ingredients/>
                    </section>}
            </MediaQuery>
            <MediaQuery minWidth={951}>
            <div className='mainContainer' style={style.mainContainer}>
            {this.context.folders.length===0?null:
                    <section className='listLaptopContainer' style={style.listLaptopContainer}>
                        {this.context.folders.length===0?null:
                            <section className='folderListContainer' style={style.folderListStyle.container}>
                                <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
                            </section>}
                    </section>}
                    
                <section className='addLaptopContainer' style={style.addLaptopContainer}>
                    <AddFolder/>
                    {this.context.folders.length===0?null:<AddRecipe />} 
                </section>
               
                {this.context.folders.length===0?null:
                    <section className='listLaptopContainer' style={style.listLaptopContainer}>
                        {this.context.recipes.length===0?null:
                            <section className='recipeListContainer'>
                                <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>
                            </section>}
                    </section>} 
            </div>
                
            </MediaQuery>
        </>
        )}
}
export default withRouter(HomePage)
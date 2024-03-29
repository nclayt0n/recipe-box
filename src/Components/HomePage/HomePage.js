import React from 'react';
import {withRouter} from 'react-router-dom';
import AddFolder from '../AddFolder/AddFolder';
import AddRecipe from '../AddRecipe/AddRecipe';
import FolderList from '../FolderList/FolderList';
import RecipeList from '../RecipeList/RecipeList';
import Context from '../../Context';
import MediaQuery from 'react-responsive';
import HomePageStyles from './HomePageStyles';
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
        };
    }
    render(){
        const style=HomePageStyles;
        return(
        <> 
            <GetRecipeAndFolders/>
            <Header/>
            <Nav/>
            <MediaQuery maxWidth={650}>
                {this.context.recipes.length===0?null:
                    <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>}
                <div className='addFolderContainer'style={style.addFolder.container}>
                    <AddFolder/>
                </div>   
                {this.context.folders.length===0?null:
                    <FolderList folders={this.context.folders} recipes={this.context.recipes}/>}
              
            </MediaQuery>
            <MediaQuery minWidth={651} maxWidth={1050}>
              {this.context.recipes.length===0?null:
                    <section className='recipelistContainer'>
                        <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>
                    </section>}
                {this.context.folders.length===0?
                <section className='addFolderContainer'style={style.addFolder.container}>
                    <AddFolder/>
                </section>:null}
                {this.context.folders.length===0?null:
                    <section>
                        <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
                    </section>}
            </MediaQuery>
            <MediaQuery minWidth={1051}>
            <div 
                className='mainContainer' 
                style={style.mainContainer}>
                {this.context.folders.length===0?null:
                    <section className='listLaptopContainer' style={style.listLaptopContainer}>
                        {this.context.folders.length===0?null:
                            <section className='folderListContainer' style={style.folderListStyle.container}>
                                <FolderList folders={this.context.folders} recipes={this.context.recipes}/>
                            </section>}
                    </section>}
                <section className='addLaptopContainer' style={style.addLaptopContainer}>
                    <AddFolder/>
                    {this.context.folders.length===0
                    ?null
                    :<AddRecipe />
                } 
                </section>
                {this.context.folders.length===0
                    ?null
                    :<section 
                        className='listLaptopContainer' 
                        style={style.listLaptopContainer}>
                        {this.context.recipes.length===0?null:
                            <section className='recipeListContainer' style={style.folderListStyle.container}>
                                <RecipeList folders={this.context.folders} recipes={this.context.recipes}/>
                            </section>}
                    </section>} 
            </div>
            </MediaQuery>
        </>
        )}
}
export default withRouter(HomePage)
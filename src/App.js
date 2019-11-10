import React from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header'
import LoginForm from './Components/LoginForm/LoginForm'
import Footer from './Components/Footer/Footer';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import LandingPage from './Components/LandingPage/LandingPage';
import AddFolder from './Components/AddFolder/AddFolder';
import AddRecipe from './Components/AddRecipe/AddRecipe'
import RecipeList from './Components/RecipeList/RecipeList';
import Folder from './Components/Folder/Folder';
import FolderList from './Components/FolderList/FolderList';
import Ingredients from './Components/Ingredients/Ingredients';
import Search from './Components/Search/Search'
import Recipe from './Components/Recipe/Recipe';
import UpdateRecipe from './Components/UpdateRecipe/UpdateRecipe';
import UpdateFolder from './Components/UpdateFolder/UpdateFolder';
import NotFound from './Components/NotFound/NotFound';
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import PrivateRoute from './Utils/PrivateRoute'
import STORE from './STORE/STORE'
import Context from './Context'
import './App.css'
import TokenService from './services/token-service'
class App extends React.Component {
  static defaultProps={folders:STORE.folders[0],
  recipes:STORE.recipes[0]} 
  constructor(){
    super()
this.state={
    folders:[],
    recipes:[],
    user_id:0
  }
}
  handleAddFolders=(folders)=>{
    this.setState({folders:[...folders]})
  }
  handleAddRecipes=(recipes)=>{
    this.setState({recipes:[...recipes]})
  }
  handleAddRecipe=(recipe)=>{
    this.setState({
      recipes:[...this.state.recipes,recipe]
    })
  }
  handleAddFolder=(folder)=>{
    this.setState({
      folders:[...this.state.folders,folder]
    })
  }
  handleUpdateRecipe=(recipe)=>{
    this.setState({
        recipes:[...this.state.recipes.filter(r=>r.id!==recipe.id),recipe]
    })
  }
  handleUpdateFolder=(folder)=>{
    this.setState({
        folders:[...this.state.folders.filter(f=>f.id!==folder.id),folder]
    })
  }
  handleDeleteRecipe=(recipeId,props)=>{
    props.history.push('/folder-list')
    this.setState({
            recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
        });
  }
  handleDeleteFolder=(folderId)=>{
    
    this.setState({
            folders: this.state.folders.filter(folder => folder.id !== folderId)
        });
  }
  render(){
    let userId;
    (TokenService.getAuthToken()===null)?userId=0:
      userId=TokenService.decodeAuthToken(TokenService.getAuthToken())
    const contextValue={
      
      user_id:userId,
      folders:this.state.folders,
      recipes:this.state.recipes,
      addRecipe:this.handleAddRecipe,
      addRecipes:this.handleAddRecipes,
      addFolder:this.handleAddFolder,
      addFolders:this.handleAddFolders,
      updateRecipe:this.handleUpdateRecipe,
      updateFolder:this.handleUpdateFolder,
      deleteRecipe:this.handleDeleteRecipe,
      deleteFolder:this.handleDeleteFolder,
    }
    return (
    <div className='App' >
      <Context.Provider value={contextValue}>
        <Switch>    
          <Route exact path='/' component={LandingPage}/>
          <PublicOnlyRoute path='/login' component={LoginForm}/>
          <PublicOnlyRoute path='/register' component={RegistrationForm}/>
      
          <PrivateRoute path='/home-page' component={HomePage}/>
          <PrivateRoute path='/add-folder' component={AddFolder}/>
          <PrivateRoute path='/add-recipe' component={AddRecipe}/>
          <PrivateRoute path='/recipe-list' component={RecipeList}/>
          <PrivateRoute path='/recipe/:id' component={Recipe}/>
          <PrivateRoute path='/folder/:id' component={Folder}/>
          <PrivateRoute path='/folder-list' component={FolderList}/>
          <PrivateRoute path='/ingredients' component={Ingredients}/>
          <PrivateRoute path='/search' component={Search}/>
          <PrivateRoute path='/update-folder/:id' component={UpdateFolder}/>
          <PrivateRoute path='/update-recipe/:id'
           component={UpdateRecipe}/>
          <PrivateRoute path='/header' component={Header}/>
          <Route component={NotFound}/>
        </Switch>
      </Context.Provider>
      {/* <Footer/> */}
    </div>
  );}
}

export default App;

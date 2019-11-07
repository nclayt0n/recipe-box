import React from 'react'
import {Switch,Route} from 'react-router-dom'
import config from './config'
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
import Nav from './Components/Nav/Nav';
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
  // componentDidMount() {
  //   this.setState({user_id:this.context.user_id})
  //       const options = {
  //           method: 'GET',
  //           headers: {
  //               'content-type': 'application/json',
  //               'Authorization': `Bearer ${TokenService.getAuthToken()}`,
  //           },

  //       };
  //       Promise.all([
  //               fetch(`${config.API_ENDPOINT}/recipes`,
  //         options),
  //               fetch(`${config.API_ENDPOINT}/folders`,
  //         options)
  //           ])
  //           .then(([recipesRes, foldersRes]) => {
  //               if (!recipesRes.ok)
  //                   return recipesRes.json().then(e => Promise.reject(e));
  //               if (!foldersRes.ok)
  //                   return foldersRes.json().then(e => Promise.reject(e));

  //               return Promise.all([recipesRes.json(), foldersRes.json()]);
  //           })
  //           .then(([recipes, folders]) => {
  //               this.setState({ recipes, folders });
  //           })
  //           .catch(error => {
  //               console.error({ error });
  //           });

  //   }
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
  handleDeleteFolder=(folderId,props)=>{
    props.history.push(`/home-page`)
    this.setState({
            folders: this.state.folders.filter(folder => folder.id !== folderId)
        });
  }
  render(){
    console.log(config.API_ENDPOINT)
    console.log(TokenService.getAuthToken())
    const contextValue={
      user_id:this.state.user_id,
      folders:this.state.folders,
      recipes:this.state.recipes,
      addRecipe:this.handleAddRecipe,
      addFolder:this.handleAddFolder,
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
          <PrivateRoute path='/update-recipe/:id' component={UpdateRecipe}/>
          <PrivateRoute path='/header' component={Header}/>
          <Route component={NotFound}/>
        </Switch>
      </Context.Provider>
      {/* <Footer/> */}
    </div>
  );}
}

export default App;

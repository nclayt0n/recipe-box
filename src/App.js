import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header'
import LoginForm from './Components/LoginForm/LoginForm'
import Footer from './Components/Footer/Footer';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import LandingPage from './Components/LandingPage/LandingPage';
import AddFolder from './Components/AddFolder/AddFolder';
import AddRecipe from './Components/AddRecipe/AddRecipe'
import AllRecipes from './Components/AllRecipes/AllRecipes';
import Folder from './Components/Folder/Folder';
import FolderList from './Components/FolderList/FolderList';
import Ingredients from './Components/Ingredients/Ingredients';
import Search from './Components/Search/Search'
import Recipe from './Components/Recipe/Recipe';
import UpdateRecipe from './Components/UpdateRecipe/UpdateRecipe';
import UpdateFolder from './Components/UpdateFolder/UpdateFolder';
import NotFound from './Components/NotFound/NotFound';
import Nav from './Components/Nav/Nav';
import STORE from './STORE/STORE'
import Context from './Context'
class App extends React.Component {
  constructor(){
    super()
this.state={
    folders:[...STORE.folders],
    recipes:[...STORE.recipes],
  }
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
  
  render(){
    const contextValue={
      folders:this.state.folders,
      recipes:this.state.recipes,
      addRecipe:this.handleAddRecipe,
      addFolder:this.handleAddFolder,
      updateRecipe:this.handleUpdateRecipe,
      updateFolder:this.handleUpdateFolder,
    }
    return (
    <div className='App'>
    <Header/>
    <Nav/>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/login' component={LoginForm}/>
      <Route path='/register' component={RegistrationForm}/>
      <Context.Provider value={contextValue}>
      <Route path='/home-page' component={HomePage}/>
      <Route path='/add-folder' component={AddFolder}/>
      <Route path='/add-recipe' component={AddRecipe}/>
      <Route path='/all-recipes' component={AllRecipes}/>
      <Route path='/recipe/:id' component={Recipe}/>
      <Route path='/folder/:id' component={Folder}/>
      <Route path='/folder-list' component={FolderList}/>
      <Route path='/ingredients' component={Ingredients}/>
      <Route path='/search' component={Search}/>
      <Route path='/update-folder/:id' component={UpdateFolder}/>
      <Route path='/update-recipe/:id' component={UpdateRecipe}/>
      </Context.Provider>
      <Route path='/' component={NotFound}/>
</Switch>
     <Footer/>
    </div>
  );
  }
}

export default App;

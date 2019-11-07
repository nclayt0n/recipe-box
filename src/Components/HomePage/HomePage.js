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
import TokenService from '../../services/token-service'
import config from '../../config'

class HomePage extends React.Component{
    static contextType=Context;
//     constructor(){
//         super()
//     this.state={
//     folders:[],
//     recipes:[],
//     user_id:0
//   }
// }
  componentDidMount() {
    this.setState({user_id:this.context.user_id})
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },

        };
        Promise.all([
                fetch(`${config.API_ENDPOINT}/recipes`,
          options),
                fetch(`${config.API_ENDPOINT}/folders`,
          options)
            ])
            .then(([recipesRes, foldersRes]) => {
                if (!recipesRes.ok)
                    return recipesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([recipesRes.json(), foldersRes.json()]);
            })
            .then(([recipes, folders]) => {
                this.context.addRecipes(recipes);
                this.context.addFolders(folders)
            })
            .catch(error => {
                console.error({ error });
            });

    }
    render(){
        console.log(this.context)
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
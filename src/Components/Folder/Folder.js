import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import config from '../../config'
import Context from '../../Context'
import './Folder.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
const uuidv4 = require('uuid/v4');

function findFolder(id,folders){
    console.log(id, folders)
    if(folders.length===0){
        return null
    }else{
const folder = folders.filter(f =>f.id === id );
console.log(folder)
let folderName=(folder[0].name) 
return folderName}
}
function findRecipes(folderId,recipes){
    if(recipes.length===0){
        return null
    }else{
     let recipeList=recipes.filter(r=>r.folder_id===folderId);
    return recipeList.map(recipe=><section className='folderRecipeList' key={uuidv4()}>
        <Link to={`/recipe/${recipe.id}` }style={{margin:'auto',padding:'10px', width:'75px'}}>{recipe.name}</Link><br/></section>)   
    }
    
}
class Folder extends React.Component{
    static contextType=Context;
    deleteFolder=(id,props)=>{
        const url=`${config.API_ENDPOINT}/folders/${id}`;
        const options={
            method:'DELETE',
            headers:{
          'content-type':'application/json',
          'Authorization':`Bearer ${config.API_TOKEN}`,
        },
        body: JSON.stringify({'id':id})
    };
        fetch(url,options)
        .then(this.context.deleteFolder(id))
        .catch(error =>{
            this.setState({error})
        })
    }
    render(){
        let id=parseInt(this.props.match.params.id)
        let folderName=findFolder(id,this.context.folders);
        let recipeList=findRecipes(id,this.context.recipes);
        return(
            <>
             <Header/>
        <Nav/>
           <div className='folder'>
            <button onClick={()=>this.props.history.goBack()}>{folderName}</button>
            {recipeList}
            <div className='buttonBox'><button><Link to={`/update-folder/${this.props.match.params.id}`}>Update Folder</Link></button>
            <button><Link to={'/add-recipe'}>Add Recipe</Link></button>
            <button type='button' onClick={()=>this.deleteFolder(id,this.props)}>Delete Folder</button></div>
            
            </div></>
        )
    }
}
export default withRouter(Folder)
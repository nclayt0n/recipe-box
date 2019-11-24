import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import config from '../../config'
import Context from '../../Context'
import folderStyles from './FolderStyles'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import TokenService from '../../services/token-service'
import ValidationError from '../../Validation/ValidationError'
import GetRecipeAndFolders from '../../Components/Network/GetRecipesAndFolders'
import MediaQuery from 'react-responsive'
const uuidv4 = require('uuid/v4');



class Folder extends React.Component{
    static contextType=Context;
    state={error:''}
    deleteFolder=(id,props)=>{
        const url=`${config.API_ENDPOINT}/folder/${id}`;
        const options={
            method:'DELETE',
            headers:{
          'content-type':'application/json',
          'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({'id':id})
    };
        fetch(url,options)
        .then(this.context.deleteFolder(id))
        .catch(error =>{
            this.setState({error})
        })
        props.history.push(`/home-page`)
    }
    findFolder=(id,folders)=>{
        if(folders.length===0){
            return null
        }else{
        const folder = folders.filter(f =>f.id === id );
            let folderName=(folder[0].name) 
            return folderName
        }
    }
    findRecipes=(folderId,recipes,style)=>{
        console.log(folderId)
        if(recipes.length===0){
            return null
        }else{
            let recipeList=recipes.filter(r=>r.folder_id===folderId);
            return recipeList.map(recipe=><>
            <li key={uuidv4()} style={style.folderRecipeListLi}><Link to={`/recipe/${recipe.id}`} style={style.folderRecipeListLiA}>{recipe.name}</Link></li></>)   
        }
    }
    findTabletRecipes=(folderId,recipes,style)=>{
        if(recipes.length===0){
            return null
        }else{
            let recipeList=recipes.filter(r=>r.folder_id===folderId);
            return recipeList.map(recipe=><>
            <li key={uuidv4()} style={style.tablet.folderRecipeListLi}><Link to={`/recipe/${recipe.id}`} style={style.tablet.folderRecipeListLiA}>{recipe.name}</Link></li></>)   
        }
    }
    render(){
        
        const style=folderStyles
        if(this.context.folders.length===0){
           return  <GetRecipeAndFolders/>
        }
        let id=parseInt(this.props.match.params.id)
        let folderName=this.findFolder(id,this.context.folders);
        let recipeList=this.findRecipes(id,this.context.recipes,style);
        console.log(recipeList)
        const tabletRecipeList=this.findTabletRecipes(id,this.context.recipes,style); 
        return(
            <>
                <Header/>
                <Nav/>
                <MediaQuery maxWidth={650}>
                    <div className='folder' style={style.folder}>
                        <div className='folderItems' style={style.folderItems}>
                            <ul className='folderRecipeList' key={uuidv4()} style={style.folderRecipeList}>
                                <h3 style={style.h}>{folderName}</h3>
                                    {recipeList}
                            </ul>
                            <div className='buttonBoxMobile' style={style.buttonBoxMobile}>
                                <button style={style.buttonBoxMobileButton}>
                                    <Link to={'/add-recipe'} style={style.buttonBoxMobileButtonA}>Add Recipe</Link>
                                </button><br/>
                                <button type='button' style={style.buttonBoxMobileButton}>
                                    <Link to={`/update-folder/${this.props.match.params.id}`} style={style.buttonBoxMobileButtonA}>Update Folder</Link>
                                </button><br/>
                                <button type='button' onClick={()=> this.deleteFolder(id,this.props)} style={style.buttonBoxMobileButton}> Delete Folder
                                </button><br/>
                            </div>
                            <ValidationError Namemessage={this.state.error}/><br/>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={651}>
                    <div className='folder' style={style.tablet.folder}>
                        <div className='folderItems' style={style.tablet.folderItems}>
                            <ul className='folderRecipeList' key={uuidv4()} style={style.tablet.folderRecipeList}>
                                <h3 style={style.tablet.h}>{folderName}</h3>
                                {tabletRecipeList}
                            </ul>
                            <div className='buttonBox' style={style.tablet.buttonBox}>
                                <button style={style.tablet.buttonBoxButton}>
                                    <Link to={'/add-recipe'} style={style.tablet.buttonBoxButtonA}>Add Recipe</Link>
                                </button><br/>
                                <button type='button' style={style.tablet.buttonBoxButton}>
                                    <Link to={`/update-folder/${parseInt(this.props.match.params.id)}`} style={style.tablet.buttonBoxButtonA}>Update Folder</Link>
                                </button><br/>
                                <button type='button' onClick={()=> this.deleteFolder(id,this.props)} style={style.tablet.buttonBoxButton}> Delete Folder
                                </button><br/>
                            </div> 
                            <ValidationError Namemessage={this.state.error}/><br/>
                        </div>
                    </div>
                </MediaQuery>
                </>
        )
    }
}
export default withRouter(Folder)
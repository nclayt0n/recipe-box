import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import config from '../../config'
import Context from '../../Context'
import './Folder.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import TokenService from '../../services/token-service'
import ValidationError from '../../Validation/ValidationError'
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
return folderName}
}
    findRecipes=(folderId,recipes)=>{
    if(recipes.length===0){
        return null
    }else{
     let recipeList=recipes.filter(r=>r.folder_id===folderId);
    return recipeList.map(recipe=><>
        <li key={uuidv4()}><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></li></>)   
    }
}
    render(){
        let id=parseInt(this.props.match.params.id)
        let folderName=this.findFolder(id,this.context.folders);
        let recipeList=this.findRecipes(id,this.context.recipes);
        return(
            <>
                <Header/>
                <Nav/>
                <div className='folder'>
                <div className='folderItems'>
                    <ul className='folderRecipeList' key={uuidv4()}>
                    <h3>{folderName}</h3>
                        {recipeList}
                    </ul>
                    <MediaQuery maxWidth={770}>
                    <div className='buttonBoxMobile'>
                    <button>
                            <Link to={'/add-recipe'}>Add Recipe</Link>
                        </button><br/>
                        <button type='button'>
                            <Link to={`/update-folder/${this.props.match.params.id}`}>Update Folder</Link>
                        </button><br/>
                        <button type='button' 
                            onClick={()=>this.deleteFolder(id,this.props)}
                            >Delete Folder
                        </button><br/>
                    </div>
                    </MediaQuery>
                    <MediaQuery minWidth={770}>
                    <div className='buttonBox'>
                    <button>
                            <Link to={'/add-recipe'}>Add Recipe</Link>
                        </button><br/>
                        <button type='button'>
                            <Link to={`/update-folder/${this.props.match.params.id}`}>Update Folder</Link>
                        </button><br/>
                        <button type='button' 
                            onClick={()=>this.deleteFolder(id,this.props)}>Delete Folder
                        </button><br/>
                    </div>
                    </MediaQuery>
                    <ValidationError Namemessage={this.state.error}/><br/>
                    </div>
                </div>
                </>
        )
    }
}
export default withRouter(Folder)
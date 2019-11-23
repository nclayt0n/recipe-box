import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import config from '../../config'
import hpStyles from '../HomePage/HomePageStyles'
import addFStyles from './AddFolderStyles'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import MediaQuery from 'react-responsive'
import ValidationError from '../../Validation/ValidationError'
import TokenService from '../../services/token-service'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'

class AddFolder extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const folderName=(e.target.folderName.value)
        if(folderName.length<3){
            this.setState({error:'Name Must contain at least 3 characters'})
        }
        if(folderName.length>=3){
            const url=`${config.API_ENDPOINT}/folders`;
            const options={
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    'Authorization': `Bearer ${TokenService.getAuthToken()}`,
                },
                body: JSON.stringify({'name':folderName,'user_id':this.context.user_id})
            };

            fetch(url,options)
            .then(response => {
                if (response.ok) {
                return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(responseJson =>this.context.addFolder(responseJson))
            .catch(error =>{
                console.error(error)
            })
            if(this.props.location.pathname==='/home-page'){
                this.props.history.push('/home-page')
            }else{
                this.props.history.push('/folder-list')
            }  
        }
    }
    render(){ 
      
        let style;
         if(this.props.location.pathname===`/home-page`){
            style=hpStyles.addFolder
        }if(this.props.location.pathname==='/add-folder'){
            style=addFStyles  
            if(this.context.folders.length===0){
            return <GetRecipeAndFolders/>
        }
        }
        return(
        <>
        {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
        <MediaQuery maxWidth={650}>
            <div className='addFolder' style={style.addFolderDivStyle} >
        {(this.props.location.pathname===`/home-page`)&& this.context.folders.length>=1?
            <h3><Link to={'/add-folder'} style={style.h3}>ADD FOLDER</Link></h3>:<h3 style={style.h3}>ADD FOLDER</h3>} 
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <fieldset style={style.addFolderFieldset}>
                        <label htmlFor ='folderName' style={style.addFolderLabel}>Folder Name:
                        {(this.props.location.pathname===`/home-page`)?<br/>:null} 
                        <input type='text' name='folderName' style={style.addFolderInput}/></label>
                        {(this.props.location.pathname===`/home-page`)?<br/>:null} 
                        <ValidationError Namemessage={this.state.error}/>
                        <button type='submit' style={style.addFolderButtons}>Submit
                        </button>
                    </fieldset>
                </form> 
                {(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.push('/home-page')}style={style.addFolderButtons}>Cancel</button>} 
            </div>
        </MediaQuery>
        <MediaQuery minWidth={651} maxWidth={950}>
            <div className='addFolder' style={style.tablet.addFolderDivStyle}>
            {(this.props.location.pathname===`/home-page`)&& this.context.folders.length>=1?
            <h3><Link to={'/add-folder'} style={style.tablet.h3}>ADD FOLDER</Link></h3>:<h3 style={style.tablet.h3}>ADD FOLDER</h3>} 
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <fieldset style={style.addFolderFieldset}>
                        <label htmlFor ='folderName' style={style.tablet.addFolderLabel}>Folder Name:
                        {(this.props.location.pathname===`/home-page`)?<br/>:null} 
                        <input type='text' name='folderName' style={style.tablet.addFolderInput}/></label>
                        {(this.props.location.pathname===`/home-page`)?<br/>:null} 
                        <ValidationError Namemessage={this.state.error}/>
                        <button type='submit' style={style.tablet.addFolderButtons}>Submit
                        </button>
                    </fieldset>
                </form> 
            {(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.push('/home-page')}style={style.tablet.addFolderButtons}>Cancel</button>} 
        </div>
        </MediaQuery>
        <MediaQuery minWidth={951}>
            <div className='addFolder' style={style.laptop.addFolderDivStyle}>
            {(this.props.location.pathname===`/home-page`)&& this.context.folders.length>=1?
            <h3><Link to={'/add-folder'} style={style.laptop.h3}>ADD FOLDER</Link></h3>:<h3 style={style.laptop.h3}>ADD FOLDER</h3>} 
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <fieldset style={style.addFolderFieldset}>
                        <label htmlFor ='folderName' style={style.laptop.addFolderLabel}>Folder Name:<br/>
                        <input type='text' name='folderName' style={style.laptop.addFolderInput}/></label>
                        <br/>
                        <ValidationError Namemessage={this.state.error}/>
                        <button type='submit' style={style.laptop.addFolderButtons}>Submit
                        </button>
                    </fieldset>
                </form> 
            {(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.push('/home-page')}style={style.laptop.addFolderButtons}>Cancel</button>} 
        </div>
        </MediaQuery>
        </>
        )
    }
}
export default withRouter(AddFolder)
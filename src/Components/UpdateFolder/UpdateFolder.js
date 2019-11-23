import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header'
import config from '../../config'
import TokenService from '../../services/token-service'
import Nav from '../Nav/Nav'
import updateFolderStyles from './UpdateFolderStyles'
import ValidationError from '../../Validation/ValidationError'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
import MediaQuery from 'react-responsive'

const uuidv4 = require('uuid/v4');

class UpdateFolder extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={nameError:''}
    }
    findFolderName=()=>{
        const folder = this.context.folders.filter(f =>f.id ===parseInt(this.props.match.params.id) );
        return folder[0].name;

}
    handleSubmit=(e)=>{
        e.preventDefault();
        const updatedName=(e.target.updatedName.value)
        if(updatedName.length===0){this.setState({nameError:'New name must be 3 characters, or cancel to go back.'})
    }else{
        const url=`${config.API_ENDPOINT}/folder/${this.props.match.params.id}`;
        const options={
            method:'PATCH',
            headers:{
          'content-type':'application/json',
          'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({name:updatedName})
    };
        fetch(url,options)
        .then(this.context.updateFolder({name:updatedName,id:parseInt(this.props.match.params.id),user_id:TokenService.decodeAuthToken(TokenService.getAuthToken())}))
        .catch(error =>{
            this.setState({error})
        })
    this.props.history.push(`/folder-list`)
            }
    }
    render(){
        if(this.context.recipes.length===0){
            return  <GetRecipeAndFolders/>
         }
        return(<>
        <Header/>
        <Nav/>
        <MediaQuery maxWidth={650}>
        <div className='updateFolder' style={updateFolderStyles.updateFolder}>
            <h3 className='updateh3' style={updateFolderStyles.updateh3}>Update Folder: {this.findFolderName()}</h3>
                <form action='PATCH'  onSubmit={(e)=>this.handleSubmit(e)}>    
                    <fieldset style={updateFolderStyles.updateFolderFieldset}>
                        <label htmlFor ='updatedName' style={updateFolderStyles.updateFolderLabel}>Update Name:
                            <input type='text' name='updatedName' style={updateFolderStyles.updateFolderInput}/>
                        </label>
                        <button type='submit' className='updateButtons' style={updateFolderStyles.button}>Update
                        </button>
                        <button className='updateButtons'onClick={()=>this.props.history.goBack()} style={updateFolderStyles.button}>Cancel</button>
                    </fieldset>
                </form>
        </div>
        </MediaQuery>
        <MediaQuery minWidth={651} maxWidth={900}>
        <div className='updateFolder' style={updateFolderStyles.tablet.updateFolder}>
            <h3 className='updateh3' style={updateFolderStyles.tablet.updateh3}>Update Folder: {this.findFolderName()}</h3>
                <form action='PATCH'  onSubmit={(e)=>this.handleSubmit(e)}>    
                    <fieldset style={updateFolderStyles.tablet.updateFolderFieldset}>
                        <label htmlFor ='updatedName' style={updateFolderStyles.tablet.updateFolderLabel}>Update Name:
                        <input type='text' name='updatedName' style={updateFolderStyles.tablet.updateFolderInput}/></label>
                        <button type='submit' className='updateButtons' style={updateFolderStyles.tablet.button}>Submit
                        </button>
                        <button className='updateButtons'onClick={()=>this.props.history.goBack()} style={updateFolderStyles.tablet.button}>Cancel</button>
                    </fieldset>
                </form>
        </div>
        </MediaQuery>
        <MediaQuery minWidth={901}>
        <div className='updateFolder' style={updateFolderStyles.laptop.updateFolder}>
            <h3 className='updateh3' style={updateFolderStyles.laptop.updateh3}>Update Folder: {this.findFolderName()}</h3>
                <form action='PATCH'  onSubmit={(e)=>this.handleSubmit(e)}>    
                    <fieldset style={updateFolderStyles.laptop.updateFolderFieldset}>
                        <label htmlFor ='updatedName' style={updateFolderStyles.laptop.updateFolderLabel}>Update Name:
                        <input type='text' name='updatedName' style={updateFolderStyles.laptop.updateFolderInput}/></label>
                        <button type='submit' className='updateButtons' style={updateFolderStyles.laptop.button}>Submit
                        </button>
                        <button className='updateButtons'onClick={()=>this.props.history.goBack()} style={updateFolderStyles.laptop.button}>Cancel</button>
                    </fieldset>
                </form>
        </div>
        </MediaQuery>
        </>
        )
    }
}
export default withRouter(UpdateFolder)
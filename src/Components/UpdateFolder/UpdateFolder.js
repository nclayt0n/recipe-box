import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header'
import config from '../../config'
import TokenService from '../../services/token-service'
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
import './UpdateFolder.css'
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
        <div className='updateFolder'>
        <h3 className='updateh3'>Update Folder: {this.findFolderName()}</h3>
            <form action='PATCH'  onSubmit={(e)=>this.handleSubmit(e)}>    
                <fieldset>
                    <label htmlFor ='updatedName'>Update Name:
                    <input type='text' name='updatedName'/></label>
                    <button type='submit' className='updateButtons'>Submit
                    </button>
                    <button className='updateButtons'onClick={()=>this.props.history.goBack()}>Cancel</button>
                </fieldset>
            </form>
        </div></>
        )
    }
}
export default withRouter(UpdateFolder)
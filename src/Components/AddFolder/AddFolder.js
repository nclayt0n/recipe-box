import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import config from '../../config'
import hpStyles from '../HomePage/HomePageStyles'
import addFStyles from './AddFolderStyles'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
import TokenService from '../../services/token-service'
const uuidv4 = require('uuid/v4');


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
          'Authorization':`Bearer ${config.API_TOKEN}`,
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
    .then(responseJson => this.context.addFolder(responseJson))
    .catch(error =>{
        console.error(error)
    })

                // this.context.addFolder({name:folderName,id:uuidv4(),user_id:2})
            // this.props.history.push('/folder-list')
           
        }
    
    }
    render(){  
        console.log(this.context)
        console.log(this.props)
        let style;
         if(this.props.location.pathname===`/home-page`){
            style=hpStyles
        }if(this.props.location.pathname==='/add-folder'){
            style=addFStyles
        }
        return(
            <>
             {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
        <div className='addFolder' style={style.addFolderDivStyle} >
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <fieldset>
                    <legend>Add Folder Form</legend>
                    <label htmlFor ='folderName'>Folder Name:
                    <input type='text' name='folderName'/></label> 
                     <ValidationError Namemessage={this.state.error}/>
                    <button type='submit'>Submit
                    </button>
                </fieldset>
            </form> 
          
        </div></>
        )
    }
}
export default withRouter(AddFolder)
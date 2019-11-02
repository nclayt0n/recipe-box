import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import hpStyles from '../HomePage/HomePageStyles'
import addFStyles from './AddFolderStyles'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import ValidationError from '../../Validation/ValidationError'
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
                this.context.addFolder({name:folderName,id:uuidv4(),user_id:2})
            this.props.history.push('/folder-list')
           
        }
    
    }
    render(){  
        
        let style;
         if(this.props.location.pathname==='/home-page'){
            style=hpStyles
        }if(this.props.location.pathname==='/add-folder'){
            style=addFStyles
        } 
        console.log(style)
        return(
            <>
             {(this.props.location.pathname==='/home-page')?'':<Header/>}
        {(this.props.location.pathname==='/home-page')?'':<Nav/>}
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
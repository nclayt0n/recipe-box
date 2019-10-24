import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'

const uuidv4 = require('uuid/v4');

class AddFolder extends React.Component{
    static contextType=Context;
    handleSubmit=(e)=>{
        const folderName=(e.target.folderName.value)
        this.context.addFolder({name:folderName,id:uuidv4(),user_id:2})
    }
    render(){
        return(
        <div className="AddFolder">
            <form action="POST"  onSubmit={(e)=>this.handleSubmit(e)}>
                <fieldset>
                    <legend>Add Folder Form</legend>
                    <label htmlFor ='folderName'>Folder Name:</label> 
                    <input type="text" name="folderName"/>
                    <button type="submit">Submit
                    </button>
                </fieldset>
            </form>
        </div>
        )
    }
}
export default withRouter(AddFolder)
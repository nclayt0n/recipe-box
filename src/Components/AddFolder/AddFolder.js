import React from 'react'
import {withRouter,Link} from 'react-router-dom'
class AddFolder extends React.Component{
    render(){
        return(
        <div className="AddFolder">
            <form action="POST" >
                <fieldset>
                    <legend>Add Folder Form</legend>
                    <label for ='title'>Folder Name:</label> 
                    <input type="text" className="folderName"/>
                    <button type="submit">Submit
                    </button>
                </fieldset>
            </form>
        </div>
        )
    }
}
export default withRouter(AddFolder)
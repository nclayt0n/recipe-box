import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import ValidationError from '../../Validation/ValidationError'
const uuidv4 = require('uuid/v4');

class UpdateFolder extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={nameError:''}
    }
    findFolderName=()=>{
        const folder = this.context.folders.filter(f =>f.id ===this.props.match.params.id );
        return folder[0].name;

}
    handleSubmit=(e)=>{
        const updatedName=(e.target.updatedName.value)
        if(updatedName.length===0){this.setState({nameError:'New name must be 3 characters, or cancel to go back.'})}else{this.context.updateFolder({name:updatedName,id:this.props.match.params.id,user_id:2})}
        this.props.history.goBack()
    }
    render(){
        console.log(this.props)
        return(
        <div className='AddFolder'>
            <form action='POST'  onSubmit={(e)=>this.handleSubmit(e)}>
                <fieldset>
                    <legend>Update Folder: {this.findFolderName()}</legend>
                    <label htmlFor ='updatedName'>Update Name: <br/>
                    <input type='text' name='updatedName'/></label><br/>
                    <button type='submit'>Submit
                    </button><br/><button onClick={()=>this.props.history.goBack()}>Cancel</button>
                </fieldset>
            </form>
        </div>
        )
    }
}
export default withRouter(UpdateFolder)
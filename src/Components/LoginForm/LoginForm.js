import React from 'react'
import {withRouter} from 'react-router-dom'
import './LoginForm.css'


onsubmit=(e)=>{
e.preventDefault()
}

class LoginForm extends React.Component{
    render(){
        return(
            <div className='loginForm'>
              <form id='loginForm'>
        <fieldset>
            <legend>Login Form</legend>
            <label for='username'>   Email:<br/><input type='text' name='username'/></label><br/>
            <label for='password'>Password:
            <br/><input type='text' name='password'/></label><br/>
            <button onClick={(e)=>this.onsubmit}><a href='home-page'>Submit</a></button>
        </fieldset>

    </form>  
            </div>
        )
    }
}
export default withRouter(LoginForm)
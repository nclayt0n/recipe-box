import React from 'react'
import {withRouter} from 'react-router-dom'

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
            <label for='username'>Email:</label>
            <input type='text' name='username'/>
            <label for='password'>Password:</label>
            <input type='text' name='password'/>
            <button onClick={(e)=>this.onsubmit}><a href='home-page'>Submit</a></button>
        </fieldset>

    </form>  
            </div>
        )
    }
}
export default withRouter(LoginForm)
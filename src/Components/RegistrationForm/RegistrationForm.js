import React from 'react'
import {withRouter} from 'react-router-dom'

class RegistrationForm extends React.Component{
    render(){
        return(
            <div className='registrationForm'>
        <form method='POST'>
            <fieldset>
                <legend>Create User Form</legend>
                <label for='email'>Email:
                <input type='text' name='email'/></label><br/>
                <label for='confirmEmail'>Confirm Email:
                <input type='text' name='confirmEmail'/></label><br/>
                <label for='password'>Password:
                <input type='text' name='password'/></label><br/>
                <label for='confirmPassword'>Confirm Password:
                <input type='text' name='confirmPassword'/></label><br/>
                <label for='fullname'>Full Name:
                <input type='text' name='fullname'/></label><br/>
                <button>Submit</button>
            </fieldset>
        </form>
            </div>
        )
    }
}
export default withRouter(RegistrationForm)
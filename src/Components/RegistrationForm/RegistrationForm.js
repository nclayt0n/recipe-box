import React from 'react'
import {withRouter,Link} from 'react-router-dom'

class RegistrationForm extends React.Component{
    render(){
        return(
            <div className='registrationForm'>
        <form method='POST'>
            <fieldset>
                <legend>Create User Form</legend>
                <label htmlFor='email'>Email:
                <input type='text' name='email'/></label><br/>
                <label htmlFor='confirmEmail'>Confirm Email:
                <input type='text' name='confirmEmail'/></label><br/>
                <label for='password'>Password:
                <input type='text' name='password'/></label><br/>
                <label htmlFor='confirmPassword'>Confirm Password:
                <input type='text' name='confirmPassword'/></label><br/>
                <label htmlFor='fullname'>Full Name:
                <input type='text' name='fullname'/></label><br/>
                <button><Link to={'/login'}>Submit</Link></button>
            </fieldset>
        </form>
            </div>
        )
    }
}
export default withRouter(RegistrationForm)
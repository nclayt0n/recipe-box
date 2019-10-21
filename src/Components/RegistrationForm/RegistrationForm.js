import React from 'react'
import {withRouter} from 'react-router-dom'

class RegistrationForm extends React.Component{
    render(){
        return(
            <div className="registrationForm">
        <form method="POST">
            <fieldset>
                <legend>Create User Form</legend>
                <label for="email">Email:</label>
                <input type="text" name="email"/><br/>
                <label for="confirmEmail">Confirm Email:</label>
                <input type="text" name="confirmEmail"/><br/>
                <label for="password">Password:</label>
                <input type="text" name="password"/><br/>
                <label for="confirmPassword">Confirm Password:</label>
                <input type="text" name="confirmPassword"/><br/>
                <label for="fullname">Full Name:</label>
                <input type="text" name="fullname"/><br/>
                <button>Submit</button>
            </fieldset>
        </form>
            </div>
        )
    }
}
export default withRouter(RegistrationForm)
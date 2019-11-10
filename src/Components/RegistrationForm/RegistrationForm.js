import React from 'react'
import {withRouter} from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import Header from '../Header/Header'
class RegistrationForm extends React.Component{
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    
      state = { error: null }
    
      handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, email, password } = ev.target
        this.setState({error:null})
        AuthApiService.postUser({
          email:email.value,
          password:password.value,
          full_name:full_name.value,
        })
        .then(user=>{
          full_name.value = ''
          email.value = ''
          password.value = ''
          const { history } = this.props
          history.push('/login')
        })
        .catch(res=>{
          this.setState({error:res.error})
        })
      }
    
    render(){
        const { error } = this.state
        return(<>
        <Header/>
            <div className='registrationForm'>
        <form onSubmit={this.handleSubmit} >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
            <fieldset>
                <legend>Create User Form</legend>
                <label htmlFor='full_name'>Full Name:
                <input type='text' name='full_name'/></label><br/>
                <label htmlFor='email'>Email:
                <input type='text' name='email'/></label><br/>
                <label htmlFor='password'>Password:
                <input type='password' name='password'/></label><br/>
                
                <button type='submit'>Register</button>
            </fieldset>
        </form>
            </div></>
        )
    }
}
export default withRouter(RegistrationForm)
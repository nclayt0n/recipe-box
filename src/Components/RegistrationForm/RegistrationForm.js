import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import Header from '../Header/Header'
import ValidationError from '../../Validation/ValidationError'
import './RegistrationForm.css'
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
            <div className='registrationForm'>
        <form onSubmit={this.handleSubmit} >
        <div role='alert'>
          {error && <p className='red' style={{color:'red',fontWeight:'bold',textAlign:'center',padding:'5px',margin:'10px'}}>{error}</p>}
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
                {(this.state.error==='Email is already in use')?<button type='button'><Link to={'/login'}>Login</Link></button>:null}
            </fieldset>
        </form>
            </div></>
        )
    }
}
export default withRouter(RegistrationForm)
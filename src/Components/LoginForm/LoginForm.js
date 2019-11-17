import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import './LoginForm.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import Context from '../../Context'
import ValidationError from '../../Validation/ValidationError'
class LoginForm extends React.Component{
  static contextType=Context;
    static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

state = { error: null }
  handleLoginSuccess = (token) => {
    let user_id=TokenService.decodeAuthToken(token)
    this.context.user_id=user_id;
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/home-page'
    history.push(destination)
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { email, password } = ev.target
    TokenService.saveAuthToken(
     TokenService.makeBasicAuthToken(email.value,password.value))
    email.value = ''
    password.value = ''
    this.handleLoginSuccess()
  }
handleSubmitJWTAuth=ev=>{
  ev.preventDefault()
  this.setState({error:null})
  const {email,password}=ev.target
  AuthApiService.postLogin(email.value,
    password.value)

  .then(res=>{ 
    console.log('in the then block',res)
    email.value=''
    password.value=''
    TokenService.saveAuthToken(res.authToken)
    this.handleLoginSuccess(res.authToken)
   
  })
  .catch(res=>{
    console.log('in the catch block',res)
    this.setState({error:res.error})
  })
}
    render(){
        const { error } = this.state
        return(
          <div className='loginForm'>
              <form id='loginForm' onSubmit={this.handleSubmitJWTAuth}>
                <div role='alert'>
                {error && <p className='red'>{error}</p>}
                </div>
                <fieldset>
                  <legend>Login Form</legend>
                  <label htmlFor='username'>   Email:<br/><input type='text' name='email'/></label><br/>
                  <label htmlFor='password'>Password:
                  <br/><input type='password' name='password'/></label><br/>
                  <button type='submit'>Login</button>
                  <button><Link to='/register' className='landingButtons'>Create New Account</Link></button>
                </fieldset>
              </form>  
              <ValidationError Namemessage={error}/>
          </div>
        )
    }
}
export default withRouter(LoginForm)
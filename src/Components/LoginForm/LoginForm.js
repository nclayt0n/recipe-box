import React from 'react'
import {withRouter} from 'react-router-dom'
import './LoginForm.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
class LoginForm extends React.Component{
    static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
      console.log(this.props)
    const { location, history } = this.props
    console.log(location)
    const destination = (location.state || {}).from || '/'
    history.push('/home-page')
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { email, password } = ev.target

 TokenService.saveAuthToken(
     TokenService.makeBasicAuthToken(email.value,password.value)
 )

    email.value = ''
    password.value = ''
    this.handleLoginSuccess()
  }
handleSubmitJWTAuth=ev=>{
  ev.preventDefault()
  
  this.setState({error:null})
  const {email,password}=ev.target
  console.log( email.value,password.value)
  AuthApiService.postLogin(email.value,
    password.value)
  .then(res=>{

    email.value=''
    password.value=''
    TokenService.saveAuthToken(res.authToken)
    this.handleLoginSuccess()
  })
  .catch(res=>{
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
            <button type='submit'>Submit</button>
        </fieldset>

    </form>  
            </div>
        )
    }
}
export default withRouter(LoginForm)
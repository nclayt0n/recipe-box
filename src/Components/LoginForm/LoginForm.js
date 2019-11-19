import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import loginFormStyles from './LoginFormStyles'
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
    if (res.error) {
      this.setState({error:res.error})
   }
   else {
        email.value=''
       password.value=''
       TokenService.saveAuthToken(res.authToken)
       this.handleLoginSuccess(res.authToken)
   }
   
  })
  .catch(res=>{
    this.setState({error:res.error})
  })
}
    render(){
      const style=loginFormStyles
        const { error } = this.state
        return( <>
        <MediaQuery maxHeight={759}>
          <div className='loginForm' style={style.loginForm}>
              <form id='loginForm' onSubmit={this.handleSubmitJWTAuth} >
                <fieldset style={style.loginFormFieldset}>
                  <legend style={style.loginFormLegend}>Login Form</legend>
               
                  <label htmlFor='username' style={style.loginFormLabel}>   Email:<br/><input type='text' name='email' style={style.loginFormInput}/></label><br/>
                  <label htmlFor='password'  style={style.loginFormLabel}>Password:
                  <br/><input type='password' name='password' style={style.loginFormInput}/></label><br/>
                  <button type='submit' style={style.loginFormButtonA}>Login</button><br/>
                  <button style={style.loginFormButtonA}><Link to='/register' style={style.loginFormButtonA}className='landingButtons'>Create New Account</Link></button>
                </fieldset>
              </form>  
              <ValidationError Namemessage={error}/>
          </div>
          </MediaQuery>
          <MediaQuery minHeight={760}>
          <div className='loginForm' style={style.tablet.loginForm}>
              <form id='loginForm' onSubmit={this.handleSubmitJWTAuth} >
                <fieldset style={style.loginFormFieldset}>
                  <legend style={style.loginFormLegend}>Login Form</legend>
                  <label htmlFor='username' style={style.loginFormLabel}>   Email:<br/><input type='text' name='email' style={style.tablet.loginFormInput}/></label><br/>
                  <label htmlFor='password'  style={style.loginFormLabel}>Password:
                  <br/><input type='password' name='password' style={style.tablet.loginFormInput}/></label><br/>
                  <button type='submit' style={style.loginFormButtonA}>Login</button><br/>
                  <button style={style.loginFormButtonA}><Link to='/register' style={style.loginFormButtonA}className='landingButtons'>Create New Account</Link></button>
                </fieldset>
              </form>  
              <ValidationError Namemessage={error}/>
          </div>
          </MediaQuery>
          </>
        )
    }
}
export default withRouter(LoginForm)
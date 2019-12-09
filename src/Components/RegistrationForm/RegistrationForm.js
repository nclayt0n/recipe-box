import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import MediaQuery from 'react-responsive'
import ValidationError from '../../Validation/ValidationError'
import registrationFormStyles from './RegistrationFormStyles'
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
          this.setState({error:res.message})
        })
      }
    
    render(){
      const style=registrationFormStyles
     
        return(
    <>
      <MediaQuery maxWidth={740}>
      <div className='registrationForm' style={style.registrationForm}>
        <form onSubmit={this.handleSubmit} >
            <fieldset style={style.registrationFormFieldset}>
                <legend style={style.registrationFormLegend}>Create New Account</legend>
                <label htmlFor='full_name' style={style.registrationFormLabel}>Full Name:<br/>
                <input type='text' name='full_name' style={style.registrationFormInput}/></label><br/>
                <label htmlFor='email' style={style.registrationFormLabel}>Email:<br/>
                <input type='text' name='email' style={style.registrationFormInput}/></label><br/>
                <label htmlFor='password' style={style.registrationFormLabel}>Password:<br/>
                <input type='password' name='password' style={style.registrationFormInput}/></label><br/>
                <button type='submit' style={style.registrationFormButtonA}>Register</button><br/>
                {(this.state.error==='Email is already in use')?<button type='button' style={style.registrationFormButtonA}><Link to={'/login'} style={style.registrationFormButtonA}>Login</Link></button>:<button style={style.registrationFormButtonA}><Link to={'/'} style={style.registrationFormButtonA}>Cancel</Link></button>}
            </fieldset>
            <ValidationError Namemessage={this.state.error}/>
        </form> 
      </div>
      </MediaQuery>
      <MediaQuery minWidth={741} maxWidth={1049}>
      <div className='registrationForm' style={style.registrationFormLaptop}>
        <form onSubmit={this.handleSubmit} >
            <fieldset style={style.registrationFormFieldset}>
                <legend style={style.registrationFormLegend}>Create New Account</legend>
                <label htmlFor='full_name' style={style.registrationFormLabel}>Full Name:<br/>
                <input type='text' name='full_name' style={style.registrationFormInputTablet}/></label><br/>
                <label htmlFor='email' style={style.registrationFormLabel}>Email:<br/>
                <input type='text' name='email' style={style.registrationFormInputTablet}/></label><br/>
                <label htmlFor='password' style={style.registrationFormLabel}>Password:<br/>
                <input type='password' name='password' style={style.registrationFormInputTablet}/></label><br/>
                <button type='submit' style={style.registrationFormButtonA}>Register</button><br/>
                {(this.state.error==='Email is already in use')?<button type='button' style={style.registrationFormButtonA}><Link to={'/login'} style={style.registrationFormButtonA}>Login</Link></button>:<button style={style.registrationFormButtonA}><Link to={'/'} style={style.registrationFormButtonA}>Cancel</Link></button>}
            </fieldset>
            <ValidationError Namemessage={this.state.error}/>
        </form> 
      </div>
      </MediaQuery>
      <MediaQuery minWidth={1050}>
      <div className='registrationForm' style={style.registrationFormLaptop}>
        <form onSubmit={this.handleSubmit} >
            <fieldset style={style.registrationFormFieldset}>
                <legend style={style.registrationFormLegend}>Create New Account</legend>
                <label htmlFor='full_name' style={style.registrationFormLabel}>Full Name:<br/>
                <input type='text' name='full_name' style={style.registrationFormInputLaptop}/></label><br/>
                <label htmlFor='email' style={style.registrationFormLabel}>Email:<br/>
                <input type='text' name='email' style={style.registrationFormInputLaptop}/></label><br/>
                <label htmlFor='password' style={style.registrationFormLabel}>Password:<br/>
                <input type='password' name='password' style={style.registrationFormInputLaptop}/></label><br/>
                <button type='submit' style={style.registrationFormButtonA}>Register</button><br/>
                {(this.state.error==='Email is already in use')?<button type='button' style={style.registrationFormButtonA}><Link to={'/login'} style={style.registrationFormButtonA}>Login</Link></button>:<button style={style.registrationFormButtonA}><Link to={'/'} style={style.registrationFormButtonA}>Cancel</Link></button>}
            </fieldset>
            <ValidationError Namemessage={this.state.error}/>
        </form> 
      </div>
      </MediaQuery>
    </>
        )
    }
}
export default withRouter(RegistrationForm)
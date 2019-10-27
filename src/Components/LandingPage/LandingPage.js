import React from 'react'
import {withRouter,Link}from 'react-router-dom'
import './LandingPage.css'
class LandingPage extends React.Component{
    render(){
        return(
            <div className='landingPage'>
                <div className='greeting'>
                   
                    <h4></h4>
                    <div className='landingPageLinkBox'><button><Link to='/register' className='landingButtons'>Create User</Link></button>
                    <button><Link  to='login' className='landingButtons'>Login</Link></button></div>
                </div>
            </div>
        )
    }
}
export default withRouter(LandingPage)
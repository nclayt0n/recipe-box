import React from 'react'
import {withRouter,Link}from 'react-router-dom'
import './LandingPage.css'
class LandingPage extends React.Component{
    render(){
        return(
            <div className='landingPage'>
                <div className='greeting'>
                   
                    <h4>Bring joy back to the kitchen </h4>
                    <button><Link to='/register'>Create User</Link></button>
                    <button><Link to='login'>Login</Link></button>
                </div>
            </div>
        )
    }
}
export default withRouter(LandingPage)
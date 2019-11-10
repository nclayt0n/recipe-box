import React from 'react'
import {withRouter,Link}from 'react-router-dom'
import './LandingPage.css'
import TokenService from '../../services/token-service'
class LandingPage extends React.Component{
    render(){ 
        return(
            <div className='landingPage'>
                <div className='greeting'>
                    <div className='landingPageLinkBox'>
                        <button><Link to='/register' className='landingButtons'>Create User</Link></button>
                        {(TokenService.hasAuthToken())?(this.props.history.push('/home-page')):(<button><Link  to='/login' className='landingButtons'>Login</Link></button>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(LandingPage)
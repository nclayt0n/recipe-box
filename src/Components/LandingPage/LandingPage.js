import React from 'react'
import {withRouter,Link}from 'react-router-dom'
import landingPageStyles from './LandingPageStyles'
import TokenService from '../../services/token-service'
class LandingPage extends React.Component{
    render(){ 
        let style=landingPageStyles
        return(
            <div className='landingPage' style={style.landingPage}>
                <div className='greeting' style={style.greeting}>
                    <div className='landingPageLinkBox' style={style.landingPageLinkBox}>
                        <button style={style.button}><Link to='/register' style={style.landingButtons} className='landingButtons'>Create User</Link></button>
                        {(TokenService.hasAuthToken())?(this.props.history.push('/home-page')):(<button style={style.button}><Link  to='/login' className='landingButtons'style={style.landingButtons}>Login</Link></button>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(LandingPage)
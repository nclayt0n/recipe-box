import React from 'react'
import {withRouter,Link}from 'react-router-dom'
class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage">
                <h1>Recipe Box</h1>
                <div className="greeting">
                    <h2>Welcome</h2>
                    <h4>Bring joy back to the kitchen </h4>
                    <button><Link to="/register">Create User</Link></button>
                    <button><Link to="login-page">Login</Link></button>
                </div>
            </div>
        )
    }
}
export default withRouter(LandingPage)
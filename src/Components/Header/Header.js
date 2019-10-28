import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Header.css'

class Header extends React.Component{
    render(){
    return(
        <div className='header' >
            <Link to='/home-page' className='headerLink'> <img src={require('./headerImages/purpleLogo.png')} alt=""/></Link>
        </div>
    )}
}
export default withRouter(Header)
import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Header.css'
import Context from '../../Context'

class Header extends React.Component{
    static contextType=Context;
   
    render(){ 
    return(
        <div className='header' >
            <Link to={`/home-page`} className='headerLink'> <img src={require('./headerImages/purpleLogo.png')} alt=""/></Link>
        </div>
    )}
}
export default withRouter(Header)
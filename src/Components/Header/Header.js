import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Header.css'

class Header extends React.Component{
    render(){
    return(
        <div className='header' >
            <h3><Link to='/home-page' className='headerLink'> RecipeBox </Link> </h3>
        </div>
    )}
}
export default withRouter(Header)
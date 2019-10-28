import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
class Nav extends React.Component{
    render(){
        return(<>
        <nav className='nav-main'>
            <div className='btn-toggle-nav'></div>
            <ul className='navPageLinks'>
                <li><Link to={'/home-page'}>Home</Link></li>
                <li><Link to={'/folder-list'}>Folders</Link></li>
                <li><Link to={'/all-recipes'}>All Recipes</Link></li>
                <li><Link to={'/ingredients'}>Ingredients</Link></li>
                <li><Link to={'/add-recipe'}>Add Recipe</Link></li>
                <li><Link to={'/add-folder'}>Add Folder</Link></li>
            </ul> 
            {/* <ul className='navAcctLinks'>
                <li><Link to={'/register'}>Create New Account</Link></li>
                <li><Link to={'/login'}></Link>Login</li>
                <li>Logout</li>
            </ul> */}

    </nav>
    <aside className='nav-sidebar'><ul className='navPageLinks'>
                <li><Link to={'/home-page'}>Home</Link></li>
                <li><Link to={'/folder-list'}>Folders</Link></li>
                <li><Link to={'/all-recipes'}>All Recipes</Link></li>
                <li><Link to={'/ingredients'}>Ingredients</Link></li>
                <li><Link to={'/add-recipe'}>Add Recipe</Link></li>
                <li><Link to={'/add-folder'}>Add Folder</Link></li>
            </ul> </aside ></>)
    
}}
export default Nav
import React from 'react'
import {Link} from 'react-router-dom'

import navStyles from './NavStyles'
// import './Nav.css'
class Nav extends React.Component{
    constructor(){
        super()
        this.state={clicked:false,
        hidden:navStyles.hidden,
        visible:navStyles.visible}
    }
    navStyles=()=>{
        if(this.state.clicked===false){this.setState({clicked:true})
    
    }
        if(this.state.clicked===true){
            this.setState({clicked:false})
        }
    }
    render(){
        return(<>
        <nav className='nav-main' style={(this.state.clicked===false)?(this.state.visible.main):(this.state.hidden.main)}>
            <button className='btn-toggle-nav' onClick={()=>this.navStyles()} style={(this.state.clicked===false)?(this.state.visible.toggleBtn):(this.state.hidden.toggleBtn)}></button>
            {/* <ul className='navPageLinks' style={navStyles.mainUl}>
                <li style={navStyles.mainUlLi}><Link to={'/home-page'}>Home</Link></li>
                <li style={navStyles.mainUlLi}><Link to={'/folder-list'}>Folders</Link></li>
                <li style={navStyles.mainUlLi}><Link to={'/recipe-list'}>All Recipes</Link></li>
                <li style={navStyles.mainUlLi}><Link to={'/ingredients'}>Ingredients</Link></li>
                <li style={navStyles.mainUlLi}><Link to={'/add-recipe'}>Add Recipe</Link></li>
                <li style={navStyles.mainUlLi}><Link to={'/add-folder'}>Add Folder</Link></li>
            </ul>  */}
            <ul className='navAcctLinks' style={(this.state.clicked===false)?(this.state.hidden.mainUl):(this.state.visible.mainUl)}>
                <li style={(this.state.clicked===false)?(this.state.hidden.mainUlLi):(this.state.visible.mainUlLi)}><Link to={'/register'}>Create New Account</Link></li>
                <li style={(this.state.clicked===false)?(this.state.hidden.mainUlLi):(this.state.visible.mainUlLi)}><Link to={'/login'}></Link>Login</li>
                <li style={(this.state.clicked===false)?(this.state.hidden.mainUlLi):(this.state.visible.mainUlLi)}>Logout</li>
            </ul>

    </nav>
    <aside className='nav-sidebar' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sidebar)}>
        <ul className='navPageLinks' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sideBar)}>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/home-page'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Home</Link>
                </li>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/folder-list'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Folders</Link>
                </li>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-folder'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Add Folder</Link>
                </li>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-recipe'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Add Recipe</Link>
                </li>

                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/recipe-list'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>All Recipes</Link>
                </li>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/ingredients'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Ingredients</Link>
                </li>
            </ul> </aside></>)
    
}}
export default Nav
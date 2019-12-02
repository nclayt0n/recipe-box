import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import TokenService from '../../services/token-service'
import navStyles from './NavStyles'
import AuthApiService from '../../services/auth-api-service'
import Context from '../../Context'
import MediaQuery from 'react-responsive'

class Nav extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={clicked:false,
        hidden:navStyles.hidden,
        visible:navStyles.visible}
    }
    handleDeleteAcct=(userId)=>{
        this.handleLogoutClick()
        AuthApiService.deleteUser(userId)
    }
    handleLogoutClick = () => {
        return TokenService.clearAuthToken()
    }
    
    navStyles=()=>{
        if(this.state.clicked===false){this.setState({clicked:true})
    }
        if(this.state.clicked===true){this.setState({clicked:false})}
    }
    render(){
        let userId=this.context.user_id;
        return(
        <>
        <MediaQuery maxWidth={650}>
        <nav className='nav-main' style={(this.state.clicked===false)?(this.state.visible.main):(this.state.hidden.main)}>
            <button className='btn-toggle-nav' onClick={()=>this.navStyles()} style={(this.state.clicked===false)?(this.state.visible.toggleBtn):(this.state.hidden.toggleBtn)}></button>
        </nav>
        <aside className='nav-sidebar' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sidebar)}>
            <ul className='navPageLinks' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sideBar)}>
            {this.props.location.pathname===`/home-page`?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={`/home-page`} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Home</Link>
                </li>}
                {this.props.location.pathname==='/recipe-list'||this.context.recipes.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/recipe-list'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Recipes</Link>
                </li>}
                {this.props.location.pathname==='/folder-list'||this.context.folders.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/folder-list'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Folders</Link>
                </li>}
                {this.props.location.pathname==='/add-recipe'||this.context.folders.length===0?null:
                 <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-recipe'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Add Recipe</Link>
                </li>}
                {this.props.location.pathname==='/add-folder'?null:
                <li style={(this.state.clicked===false)||this.context.recipes.length===0?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-folder'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Add Folder</Link>
                </li>}
                {this.props.location.pathname==='/ingredients'||this.context.recipes.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/ingredients'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Ingredients</Link>
                </li>}
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)} onClick={this.handleLogoutClick}>Logout</Link></li>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)} onClick={()=>this.handleDeleteAcct(userId)}>Delete Account</Link></li>
            </ul> 
        </aside>
        </MediaQuery>

        <MediaQuery minWidth={651} maxWidth={1050}>
        <nav className='nav-main' style={(this.state.clicked===false)?(this.state.visible.main):(this.state.hidden.main)}>
            <button className='btn-toggle-nav' onClick={()=>this.navStyles()} style={(this.state.clicked===false)?(this.state.visible.tablet.toggleBtn):(this.state.hidden.tablet.toggleBtn)}></button>
        </nav>
        <aside className='nav-sidebar' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sidebar)}>
            <ul className='navPageLinks' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sideBar)}>
            {this.props.location.pathname===`/home-page`?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={`/home-page`} style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)}>Home</Link>
                </li>}
                {this.props.location.pathname==='/recipe-list'||this.context.recipes.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/recipe-list'} style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)}>Recipes</Link>
                </li>}
                {this.props.location.pathname==='/folder-list'||this.context.folders.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/folder-list'} style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)}>Folders</Link>
                </li>}
                {this.props.location.pathname==='/add-recipe'||this.context.folders.length===0?null:
                 <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-recipe'} style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)}>Add Recipe</Link>
                </li>}
                {this.props.location.pathname==='/add-folder'?null:
                <li style={(this.state.clicked===false)||this.context.recipes.length===0?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-folder'} style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)}>Add Folder</Link>
                </li>}
                {this.props.location.pathname==='/ingredients'||this.context.recipes.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/ingredients'} style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)}>Ingredients</Link>
                </li>}
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)} onClick={this.handleLogoutClick}>Logout</Link></li>
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.tablet.sideBarUlLiA):(this.state.visible.tablet.sideBarUlLiA)} onClick={()=>this.handleDeleteAcct(userId)}>Delete Account</Link></li>
            </ul> 
        </aside>
        </MediaQuery>

        <MediaQuery minWidth={1051}>
        <nav className='nav-main' style={(this.state.clicked===false)?(this.state.visible.main):(this.state.hidden.main)}>
            <button className='btn-toggle-nav' onClick={()=>this.navStyles()} style={(this.state.clicked===false)?(this.state.visible.laptop.toggleBtn):(this.state.hidden.laptop.toggleBtn)}></button>
        </nav>
        <aside className='nav-sidebar' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sidebar)}>
            <ul className='navPageLinks' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sideBar)}>
            {this.props.location.pathname===`/home-page`?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                    <Link to={`/home-page`} style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)}>Home</Link>
                </li>}
                {this.props.location.pathname==='/recipe-list'||this.context.recipes.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                    <Link to={'/recipe-list'} style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)}>Recipes</Link>
                </li>}
                {this.props.location.pathname==='/folder-list'||this.context.folders.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                    <Link to={'/folder-list'} style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)}>Folders</Link>
                </li>}
                {this.props.location.pathname==='/add-recipe'||this.context.folders.length===0?null:
                 <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                    <Link to={'/add-recipe'} style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)}>Add Recipe</Link>
                </li>}
                {this.props.location.pathname==='/add-folder'?null:
                <li style={(this.state.clicked===false)||this.context.recipes.length===0?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                    <Link to={'/add-folder'} style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)}>Add Folder</Link>
                </li>}
                {this.props.location.pathname==='/ingredients'||this.context.recipes.length===0?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/ingredients'} style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)}>Ingredients</Link>
                </li>}
                <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)} onClick={this.handleLogoutClick}>Logout</Link></li>
                <li style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLi):(this.state.visible.laptop.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.laptop.sideBarUlLiA):(this.state.visible.laptop.sideBarUlLiA)} onClick={()=>this.handleDeleteAcct(userId)}>Delete Account</Link></li>
            </ul> 
        </aside>
        </MediaQuery>
        </>
        )
    
}}
export default withRouter(Nav)
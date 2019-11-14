import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import TokenService from '../../services/token-service'
import navStyles from './NavStyles'
// import './Nav.css'
class Nav extends React.Component{
    constructor(){
        super()
        this.state={clicked:false,
        hidden:navStyles.hidden,
        visible:navStyles.visible}
    }
    handleLogoutClick = () => {
        return TokenService.clearAuthToken()
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
            {/* <ul className='navAcctLinks' style={(this.state.clicked===false)?(this.state.hidden.mainUl):(this.state.visible.mainUl)}>
              
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.mainUlLi):(this.state.visible.mainUlLi)} onClick={this.handleLogoutClick}>Logout</Link>
            </ul> */}

    </nav>
    <aside className='nav-sidebar' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sidebar)}>
        <ul className='navPageLinks' style={(this.state.clicked===false)?(this.state.hidden.sideBar):(this.state.visible.sideBar)}>
        {this.props.location.pathname===`/home-page`?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={`/home-page`} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Home</Link>
                </li>}
                {this.props.location.pathname==='/recipe-list'?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/recipe-list'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Recipes</Link>
                </li>}
                {this.props.location.pathname==='/folder-list'?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/folder-list'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Folders</Link>
                </li>}
                {this.props.location.pathname==='/add-recipe'?null:
                 <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-recipe'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Add Recipe</Link>
                </li>}
                {this.props.location.pathname==='/add-folder'?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/add-folder'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Add Folder</Link>
                </li>}
                {this.props.location.pathname==='/ingredients'?null:
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                    <Link to={'/ingredients'} style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)}>Ingredients</Link>
                </li>}
                <li style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLi):(this.state.visible.sideBarUlLi)}>
                <Link to='/' style={(this.state.clicked===false)?(this.state.hidden.sideBarUlLiA):(this.state.visible.sideBarUlLiA)} onClick={this.handleLogoutClick}>Logout</Link></li>
            </ul> </aside></>)
    
}}
export default withRouter(Nav)
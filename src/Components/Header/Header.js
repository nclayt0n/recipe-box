import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Header.css'

class Header extends React.Component{
  isHeader=()=>{
    if(this.props.location.pathname==='/'){
        return 'none'
    }else{
        return 'auto'}
  }
    render(){ 
     console.log(this.props.location.pathname==='/login')
     let headerStyle=this.isHeader(this.props);
     
    return(
        <div className='header' style={{display:headerStyle
        }}>
            <Link to='/home-page'> RecipeBox </Link> 
        </div>
    )
    }
}
export default withRouter(Header)
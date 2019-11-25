import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header/Header'

class NotFound extends React.Component{
    render(){
        return(<>
            <Header/>
            <div className='notFoundPage' style={{margin:'50px'}}>
        <h2 style={{margin:'20px auto', textAlign:'center', fontSize:'26px'}}>404 - Page not found</h2>
        <p style={{margin:'20px auto', textAlign:'center', fontSize:'22px'}}>Try going back to your previous page.</p>
      </div></>
        )
    }
} 
export default withRouter(NotFound)
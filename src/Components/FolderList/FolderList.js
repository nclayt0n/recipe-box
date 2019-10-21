import React from 'react'
import {withRouter} from 'react-router-dom'
import Nav from '../Nav/Nav'
class FolderList extends React.Component{
    render(){
        return(
            <div className="FolderList">
                <ul>FolderList
                <li>props.names</li></ul>
            </div>
        )
    }
}
export default withRouter(FolderList)
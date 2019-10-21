import React from 'react'
import {withRouter} from 'react-router-dom'
class Folder extends React.Component{
    render(){
        return(
            <div className="Folder">
            <ul>Props.folderName
            <li>props.recipes, link to path 
            </li>
            </ul>
            </div>
        )
    }
}
export default withRouter(Folder)
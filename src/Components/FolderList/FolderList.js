import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'

class FolderList extends React.Component{
    static contextType=Context;
    render(){
        const folders=this.context.folders.map(folder=>{
            return <li>{folder.name}</li>
        })
        return(
            <div className="FolderList">
                <ul>FolderList
                {folders}
                </ul>
            </div>
        )
    }
}
export default withRouter(FolderList)
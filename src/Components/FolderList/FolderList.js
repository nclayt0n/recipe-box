import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'

class FolderList extends React.Component{
    static contextType=Context;
    render(){
        const folders=this.context.folders.map(folder=>{
            return <li key={folder.id}><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
        })
        return(
            <div className="FolderList">
                <ul><Link to={'/folder-list'}>FolderList</Link>
                {folders}
                </ul>
            </div>
        )
    }
}
export default withRouter(FolderList)
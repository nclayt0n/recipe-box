import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import './FolderList.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
class FolderList extends React.Component{
    static contextType=Context;
    render(){
        const folders=this.context.folders.map(folder=>{
            return <li key={folder.id}><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
        })
        return(<>
        {(this.props.location.pathname==='/home-page')?'':<Header/>}
        {(this.props.location.pathname==='/home-page')?'':<Nav/>}
            <div className='folderList'>
                <ul className='list'><Link to={'/folder-list'}>FolderList</Link>
                {folders}
                    <li><Link to={'/all-recipes'}>All Recipes</Link></li>
                </ul>
            </div></>
        )
    }
}
export default withRouter(FolderList)
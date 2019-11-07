import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header';
import hpStyles from '../HomePage/HomePageStyles'
import folderListStyles from './FolderListStyles'
import Nav from '../Nav/Nav';
class FolderList extends React.Component{
    static contextType=Context;
    render(){
        let style;
        if(this.props.location.pathname===`/home-page`){
            style=hpStyles
        }if(this.props.location.pathname==='/folder-list'){
            style=folderListStyles
        }
        const folders=this.context.folders.map(folder=>{
            return <li key={folder.id} style={style.folderListStyle.li}><Link to={`/folder/${folder.id}`} style={style.folderListStyle.liA}>{folder.name}</Link></li>
        })
        return(<>
        {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
            <div className='folderList' style={style.folderListStyle.div}>
                <ul className='list' style={style.folderListStyle.ul}><Link to={'/folder-list'}style={style.folderListStyle.ulA}>FolderList</Link>
                {folders}
                    <li style={style.folderListStyle.li}><Link to={'/recipe-list'} style={style.folderListStyle.liA}>All Recipes</Link></li>
                </ul>
            </div></>
        )
    }
}
export default withRouter(FolderList)
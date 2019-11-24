import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import Header from '../Header/Header';
import hpStyles from '../HomePage/HomePageStyles'
import folderListStyles from './FolderListStyles'
import Nav from '../Nav/Nav';
import MediaQuery from 'react-responsive'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders';
class FolderList extends React.Component{
    static contextType=Context;
    render(){
        if(this.context.folders.length===0){
            return <GetRecipeAndFolders/>
        }
        let style;
        if(this.props.location.pathname===`/home-page`){
            style=hpStyles
        }if(this.props.location.pathname==='/folder-list'){
            style=folderListStyles
        }
        const folders=this.context.folders.map(folder=>{
            return <li key={folder.id} style={style.folderListStyle.li}><Link to={`/folder/${folder.id}`} style={style.folderListStyle.liA}>{folder.name}</Link></li>
        })
        const tabletFolders=this.context.folders.map(folder=>{
            return <li key={folder.id} style={style.folderListStyle.tablet.li}><Link to={`/folder/${folder.id}`} style={style.folderListStyle.tablet.liA}>{folder.name}</Link></li>
        })
        const laptopFolders=this.context.folders.map(folder=>{
            return <li key={folder.id} style={style.folderListStyle.laptop.li}><Link to={`/folder/${folder.id}`} style={style.folderListStyle.laptop.liA}>{folder.name}</Link></li>
        })
        return(<>
        {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
        <MediaQuery maxWidth={650}>
            <div className='folderList' style={style.folderListStyle.div}>
                <ul className='list' style={style.folderListStyle.ul}>
                    <Link to={'/folder-list'}style={style.folderListStyle.ulA}>FOLDERS</Link>
                    {(this.props.location.pathname===`/home-page`)?
                        <div className='folderListDiv' style={{maxHeight:'175px',overflow:'auto'}}>
                            {folders}
                        </div>:
                        {folders}}
                </ul>
                {(this.props.location.pathname===`/home-page`)?null: 
                    (<div>
                        <button style={style.folderListStyle.button}>
                        <Link to={'/add-folder'} style={style.folderListStyle.buttonA}>Add Folder</Link>
                        </button><br/>
                        <button style={style.folderListStyle.button} type='button' onClick={()=>this.props.history.goBack()}>Back</button>
                    </div>)}
            </div>
            </MediaQuery>
            <MediaQuery minWidth={651} maxWidth={950}>
            <div className='folderList' style={style.folderListStyle.tablet.div}>
                <ul className='list' style={style.folderListStyle.tablet.ul}><Link to={'/folder-list'}style={style.folderListStyle.tablet.ulA}>FOLDERS</Link>
                     {(this.props.location.pathname===`/home-page`)?
                        <div className='folderListDiv' style={{maxHeight:'175px',overflow:'auto'}}>
                            {tabletFolders}
                        </div>:
                        {tabletFolders}}
                </ul>
                {(this.props.location.pathname===`/home-page`)?null: 
                    (<div>
                        <button style={style.folderListStyle.tablet.button}>
                            <Link to={'/add-folder'} style={style.folderListStyle.tablet.buttonA}>Add Folder</Link>
                        </button><br/>
                        <button style={style.folderListStyle.tablet.button} type='button' onClick={()=>this.props.history.goBack()}>Back</button>
                    </div>)}
            </div>
            </MediaQuery>
            <MediaQuery minWidth={951}>
            <div className='folderList' style={style.folderListStyle.laptop.div}>
                <ul className='list' style={style.folderListStyle.laptop.ul}><Link to={'/folder-list'}style={style.folderListStyle.laptop.ulA}>FOLDERS</Link>
                {(this.props.location.pathname===`/home-page`)?
                        <div className='folderListDiv' style={{maxHeight:'575px',overflow:'auto'}}>
                            {laptopFolders}
                        </div>:
                        {laptopFolders}}
                </ul>
                {(this.props.location.pathname===`/home-page`)?null: 
                    (<div>
                        <button style={style.folderListStyle.laptop.button}>
                            <Link to={'/add-folder'} style={style.folderListStyle.laptop.buttonA}>Add Folder</Link></button><br/>
                        <button style={style.folderListStyle.laptop.button} type='button' onClick={()=>this.props.history.goBack()}>Back</button>
                    </div>)}
            </div>
            </MediaQuery>
            </>
        )
    }
}
export default withRouter(FolderList)
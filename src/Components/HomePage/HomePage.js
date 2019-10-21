import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header/Header'
import AddFolder from '../AddFolder/AddFolder'
import AddRecipe from '../AddRecipe/AddRecipe'
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';
import Folder from '../Folder/Folder'
import FolderList from '../FolderList/FolderList';
import Ingredients from '../Ingredients/Ingredients'


class HomePage extends React.Component{
    render(){
        return(<div>
     <AddFolder/>
     <AddRecipe/>
     <UpdateRecipe/>
     <Folder/>
     <FolderList/>
     <Ingredients/>
     </div>
        )
    }
}
export default withRouter(HomePage)
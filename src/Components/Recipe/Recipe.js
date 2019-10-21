import React from 'react'
import {withRouter} from 'react-router-dom'

class Recipe extends React.Component{
    render(){
        return(
            <div className='recipe'>
                Recipe
            </div>
        )
    }
}
export default withRouter(Recipe)
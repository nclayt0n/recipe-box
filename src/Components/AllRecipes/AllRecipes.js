import React from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
class AllRecipes extends React.Component{
    static contextType=Context;
    
render(){
    let displayedRecipes;
(this.props.recipes!==undefined)?(displayedRecipes=this.props.recipes):(displayedRecipes=this.context.recipes);
console.log(displayedRecipes)
    return(
        <div className="allRecipes">
 
        </div>
    )
}
}
export default withRouter(AllRecipes)
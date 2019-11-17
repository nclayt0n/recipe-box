import React from 'react'
import TokenService from '../../services/token-service'
import config from '../../config'
import Context from '../../Context'

class GetRecipeAndFolders extends React.Component{
    static contextType=Context
    componentDidMount(){
const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },

        };
        Promise.all([
                fetch(`${config.API_ENDPOINT}/recipes`,
          options),
                fetch(`${config.API_ENDPOINT}/folders`,
          options)
            ])
            .then(([recipesRes, foldersRes]) => {
                if (!recipesRes.ok)
                    return recipesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([recipesRes.json(), foldersRes.json()]);
            })
            .then(([recipes, folders]) => {
                this.context.addFolders(folders)
                this.context.addRecipes(recipes)
                
            })
            .catch(error => {
                console.error({ error });
            });
    }    
    render(){
        return(<></>)
    }
}
export default GetRecipeAndFolders

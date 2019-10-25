import React from 'react'

const Context = React.createContext({
    folders: [],
    recipes: [],
    addRecipe: () => {},
    addFolder: () => {},
    updateRecipe:()=>{},
    updateFolder:()=>{},

})
export default Context
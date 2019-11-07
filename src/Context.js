import React from 'react'

const Context = React.createContext({
    folders: [],
    recipes: [],
    user_id: '',
    addRecipe: () => {},
    addFolder: () => {},
    addFolders: () => {},
    addRecipes: () => {},
    updateRecipe: () => {},
    updateFolder: () => {},
    deleteRecipe: () => {},
    deleteFolder: () => {},

})
export default Context
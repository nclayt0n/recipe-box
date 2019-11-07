import React from 'react'

const Context = React.createContext({
    folders: [],
    recipes: [],
    user_id: '',
    addRecipe: () => {},
    addFolder: () => {},
    updateRecipe: () => {},
    updateFolder: () => {},
    deleteRecipe: () => {},
    deleteFolder: () => {},

})
export default Context
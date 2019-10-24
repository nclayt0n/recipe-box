import React from 'react'

const Context = React.createContext({
    folders: [],
    recipes: [],
    addRecipe: () => {},
    addFolder: () => {},

})
export default Context
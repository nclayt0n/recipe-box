import React from 'react'

const Context = React.createContext({
    folders: [],
    recipes: [],
    addRecipe: () => {},

})
export default Context
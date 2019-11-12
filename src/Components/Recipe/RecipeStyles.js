import React from 'react'
import navImage from '../../images/lavleaves.png'
const recipeStyles = {
    mobile: {
        recipe: {
            margin: '10px 15px 15px 75px',
            display: 'flex',
            flexDirection: 'column',
            width: '70%'
        },

        recipeItems: {
            backgroundImage: `url(${navImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'white',
            padding: '15px',
            margin: '10px'
        },

        h3: {
            fontSize: '26px',
            margin: '10px'
        },
        recipeUl: {
            textAlign: 'center',
            margin: '5px',
            padding: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.562)',
            border: '1px solid black'
        },

        recipeLi:{
            letterSpacing: '2 px',
            margin: 'auto',
            padding: '15 px',
            textAlign: 'left',
            listStyle: 'none'
            /* text-decoration: underline; */
        },
        button:{
            width:'20%'
        }
    },
    laptop: {
        recipe: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
        },

        recipeItems: {
            backgroundImage: `url(${navImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'white',
            padding: '15px',
            margin: '10px'
        },

        h3: {
            fontSize: '26px',
            margin: '10px'
        },
        recipeUl: {
            textAlign: 'center',
            margin: '5px',
            padding: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.562)',
            border: '1px solid black'
        },

        recipeLi:{
            letterSpacing: '2 px',
            margin: 'auto',
            padding: '10 px',
            textAlign: 'left',
            listStyle: 'none'
            /* text-decoration: underline; */
        }
    }

}
export default recipeStyles
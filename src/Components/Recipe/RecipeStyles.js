import React from 'react'
import navImage from '../../images/purpleLpurpleleaves.png'
const recipeStyles = {
    mobile: {
        recipe: {
            margin: '10px 15px 15px 75px',
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            fontSize: '2.5vw'
        },

        recipeItems: {
            backgroundImage: `url(${navImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'white',
            backgroundPosition: 'center',
            padding: '15px',
            margin: '10px',
            border: '1px solid var(--lightPurple)'

        },

        h3: {
            fontSize: '3.5vw',
            margin: 'auto',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '1px 1px rgba(138, 100, 163, 0.733)',
            textTransform: 'uppercase'
        },
        recipeUl: {
            textAlign: 'center',
            margin: 'auto auto 10px',
            padding: '10px',
            width: '80%',
            fontWeight: 'bolder',
            color: 'var(--purple)',
            backgroundColor: 'var(--lightPurple)',
        },

        recipeLi: {
            letterSpacing: '2 px',
            margin: 'auto',
            padding: '15 px',
            width: '60%',
            textAlign: 'center',
            listStyle: 'none',
            fontWeight: 'normal',
            color: 'var(--purple)'
                /* text-decoration: underline; */
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',
            flexDirection: 'column'
        },
        recipeButton: {
            width: 'fit-content',
            margin: 'auto',
            marginBottom: '5px',
            fontSize: '2vw',
            border: '2px solid var(--lightPurple)',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--purple)'
        },
        folderButton: {
            width: 'fit-content',
            margin: 'auto'

        }
    },
    laptop: {
        recipe: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
            padding: '10px',
            fontSize: '2vw',

        },

        recipeItems: {
            backgroundImage: `url(${navImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'white',
            padding: '15px',
            margin: '10px',
            border: '1px solid var(--lightPurple)'

        },

        h3: {
            fontSize: '2.5vw',
            margin: 'auto auto 20px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '1px 1px rgba(138, 100, 163, 0.733)',
            textTransform: 'uppercase'
        },
        recipeUl: {
            textAlign: 'center',
            width: '60%',
            margin: 'auto auto 15px',
            padding: '15px',
            backgroundColor: 'var(--lightPurple)',
            fontWeight: 'bolder',
            color: 'var(--purple)',
            // border: '1px solid var(--purple)',
            textShadow: '.5px .5px rgba(138, 100, 163, 0.733)',
        },

        recipeLi: {
            letterSpacing: '2 px',
            width: '60%',
            margin: 'auto',
            padding: '10 px',
            textAlign: 'center',
            listStyle: 'none',
            textDecoration: 'none',
            fontWeight: 'normal',
            color: 'var(--purple)'
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',

        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px',
            fontSize: '1.5vw',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--purple)',
            border: '2px solid var(--purple)'
        },
        folderButton: {
            width: 'fit-content',

        }
    }

}
export default recipeStyles
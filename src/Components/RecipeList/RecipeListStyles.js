import React from 'react'
import backgroundImage from '../../images/bluePurpleLeaves.png'
const recipeListStyles = {
    recipeListStyle: {

        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--brown)',
            width: 'fit-content',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '50px',
            padding: '50px',
            textDecoration: 'none',
            listStyle: 'none',

        },
        ul: {
            padding: '10px',
            fontSize: '22px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'var(--purple)'
        },
        ulA: {
            color: 'var(--purple)',
            textDecoration: 'none'
        },
        li: {
            padding: '10px',
            fontSize: '18px',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
        },
        liA: {

            color: 'var(--purple)',
            textDecoration: 'none'
        }
    },

}


export default recipeListStyles
import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.png'
const recipeListStyles = {
    recipeListStyle: {

        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--brown)',
            width: '80%',
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
            border: '1px solid white'


        },
        ul: {
            padding: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'white'
        },
        ulA: {
            fontSize: '4.5vw',
            color: 'white',
            textDecoration: 'none',
            textShadow: '1px 1px var(--lightPurple)'
        },
        li: {
            padding: '10px',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
        },
        liA: {

            color: 'white',
            textDecoration: 'none',
            fontSize: '4vw'
        },
        button: {
            margin: '10px auto auto ',
            color: 'var(--purple)',
            backgroundColor: 'white',
            fontWeight: 'bold',
            width: 'fit-content',
            fontSize: '4vw'
        },
        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundColor: 'var(--brown)',
                width: '50%',
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
                border: '1px solid white'


            },
            ulA: {
                fontSize: '1.75vw',
                color: 'white',
                textDecoration: 'none',
                textShadow: '1px 1px var(--lightPurple)'
            },
            li: {
                padding: '10px',
                fontSize: '1.5vw',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5vw'
            },
            button: {
                margin: '10px auto auto ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                width: 'fit-content',
                fontSize: '1.5vw'
            },

        }
    },

}


export default recipeListStyles
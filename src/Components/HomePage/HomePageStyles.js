import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.png'
import addFbackgroundImage from '../../images/purplelavleaves.jpg'
const hpStyles = {
    homePageStyle: {
        backgroundColor: '#C8923B'
    },
    addFolder: {
        addFolderDivStyle: {
            backgroundImage: `url(${addFbackgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            width: '350px',
            backgroundPosition: 'top',
            border: '2px solid var(--darkPurple)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginBottom: '20px',
            padding: '20px',
        },
        addFolderFieldset: {
            border: 'none'
        },
        addFolderButtons: {
            width: '100px',
            backgroundColor: 'var(--purple)',
            color: 'white'
        },
        addFolderLabel: {
            flexGrow: '2',
            color: 'var(--purple)'
        },
        addFolderInput: {
            flexGrow: '2',
            color: 'var(--purple)'
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '3vw',
        }
    },

    addRecipeStyle: {
        div: {
            border: '2px solid black',
            width: 'fit-content',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '50px',
            padding: '50px',
        },
        select: { backgroundColor: 'white' }

    },
    folderListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            width: '400px',
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
            fontSize: '22px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'white'
        },
        ulA: {
            color: 'white',
            textDecoration: 'underline'
        },
        li: {
            padding: '10px',
            fontSize: '18px',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
        },
        liA: {

            color: 'white',
            textDecoration: 'none',
            margin: 'auto',
            fontWeight: 'normal'
        }
    },
    recipeListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
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
            border: '1px solid white'

        },
        ul: {
            padding: '10px',
            fontSize: '22px',
            fontWeight: 'bolder',
            cursor: 'pointer',
            color: 'white'
        },
        ulA: {
            textDecoration: 'underline',
            color: 'white',
        },
        li: {
            padding: '10px',
            fontSize: '18px',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
            fontWeight: 'normal'
        },
        liA: {

            color: 'white',
            textDecoration: 'none'
        },
        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundColor: 'var(--brown)',
                width: '30%',
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

    }

}

export default hpStyles
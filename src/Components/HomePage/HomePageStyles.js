import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.png'
const hpStyles = {
    homePageStyle: {
        backgroundColor: '#C8923B'
    },
    addFolder: {
        addFolderDivStyle: {
            border: '2px solid black',
            width: 'fit-content',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '0px',
            padding: '20px',
        },
        addFolderButtons: {
            width: '100px'
        },
        addFolderInput: {
            flexGrow: '2'
        },
    },

    addRecipeStyle: {
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

    }

}

export default hpStyles
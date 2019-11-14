import React from 'react'
import backgroundImage from '../../images/bluePurpleLeaves.png'
const hpStyles = {
    homePageStyle: {
        backgroundColor: '#C8923B'
    },
    addFolderDivStyle: {
        border: '2px solid black',
        width: 'fit-content',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '0px',
        padding: '20px',
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
            border: '2px solid black',
            width: 'fit-content',
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
            color: 'black'
        },
        ulA: {
            color: 'black',
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

            color: 'black',
            textDecoration: 'none',
            margin: 'auto'
        }
    },
    recipeListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--lightBlue)',
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

        },
        ul: {
            padding: '10px',
            fontSize: '22px',
            fontWeight: 'bolder',
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
            fontWeight: 'normal'
        },
        liA: {

            color: 'var(--purple)',
            textDecoration: 'none'
        }
    }

}

export default hpStyles
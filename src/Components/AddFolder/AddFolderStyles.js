import React from 'react'
import addFbackgroundImage from '../../images/purplelavleaves.jpg'
const addFStyles = {
    addFolderDivStyle: {
        backgroundImage: `url(${addFbackgroundImage})`,
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
        backgroundColor: 'var(--purple)',
        backgroundPosition: 'top',
        border: '2px solid var(--purple)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        margin: '20px auto ',
        fontSize: '2vw',
        padding: '50px',
    },
    addFolderLabel: {
        fontSize: '2vw',
        color: 'var(--purple)'
    },
    addFolderInput: {
        width: '50%',
        fontSize: '2vw',
        margin: '5px auto',

    },
    addFolderButtons: {
        width: '100px',
        backgroundColor: 'var(--purple)',
        color: 'white',
        margin: 'auto'
    },
    h3: {
        color: 'var(--purple)',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '3vw',
    }

}


export default addFStyles
import React from 'react'
import backgroundImage from '../../images/purplelavleaves.jpg'
const addFStyles = {
    addFolderDivStyle: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundColor: 'white',
        backgroundPosition: 'top',
        border: '2px solid var(--purple)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70%',
        margin: '50px auto',
        fontSize: '2vw',
        padding: '50px',
    },
    addFolderLabel: {
        fontSize: '3vw',
        color: 'var(--purple)'
    },
    addFolderInput: {
        width: '70%',
        fontSize: '2.5vw',
        margin: '5px auto',

    },
    addFolderButtons: {
        width: '100px',
        backgroundColor: 'var(--purple)',
        color: 'white',
        margin: 'auto',
        fontSize: '3vw',
    },
    h3: {
        color: 'var(--purple)',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '3.25vw',
    },
    addFolderFieldset: {
        border: 'none'
    },
    tablet: {
        addFolderDivStyle: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundColor: 'white',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            margin: '50px auto ',
            padding: '40px',
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
            margin: 'auto',
            fontSize: '2vw',
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '2.75vw',
        },

    },
    laptop: {
        addFolderDivStyle: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundColor: 'white',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            margin: '50px auto ',
            padding: '40px',
        },
        addFolderLabel: {
            fontSize: '1.25vw',
            color: 'var(--purple)'
        },
        addFolderInput: {
            width: '40%',
            fontSize: '1.25vw',
            margin: '5px auto',

        },
        addFolderButtons: {
            width: '100px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            margin: 'auto',
            fontSize: '1.25vw',
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '1.75vw',
        },
    }

}


export default addFStyles
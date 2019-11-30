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
        width: '300px',
        margin: '50px auto',
        padding: '30px',
    },
    addFolderLabel: {
        fontSize: '16px',
        color: 'var(--purple)',
        fontWeight: 'bold'
    },
    addFolderInput: {
        width: '80%',
        fontSize: '14px',
        margin: '5px auto',
        color: 'var(--purple)',
        border: '1px solid var(--darkPurple)'
    },
    addFolderButtons: {
        width: '100px',
        backgroundColor: 'var(--purple)',
        color: 'white',
        margin: 'auto',
        fontSize: '14px',
    },
    h3: {
        color: 'var(--purple)',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '18px',
        margin: '5px auto'
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
            padding: '30px',
        },
        addFolderLabel: {
            fontSize: '16px',
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        addFolderInput: {
            width: '50%',
            fontSize: '14px',
            margin: '5px auto',
            border: '1px solid var(--darkPurple)'

        },
        addFolderButtons: {
            width: '100px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            margin: 'auto',
            fontSize: '14px',
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            textShadow: '.5px .5px var(--darkPurple)',
            fontSize: '18px',
            margin: '10px auto'
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
            fontSize: '18px',
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        addFolderInput: {
            width: '40%',
            fontSize: '16px',
            margin: '5px auto',
            color: 'var(--purple)',
            border: '1px solid var(--darkPurple)'

        },
        addFolderButtons: {
            width: '100px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            margin: 'auto',
            fontSize: '18px',
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            textShadow: '.5px .5px var(--darkPurple)',
            fontSize: '20px',
            margin: '10px auto'
        },
    }

}


export default addFStyles
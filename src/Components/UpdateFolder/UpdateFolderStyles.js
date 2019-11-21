import backgroundImage from '../../images/purpleLpurpleleaves.jpg'
const updateFolderStyles = {
    updateFolder: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '1px solid var(--lightPurple)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        width: '50%'
    },

    updateh3: {
        color: 'white',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '2.5vw',
        textTransform: 'uppercase'
    },

    updateFolderFieldset: {
        margin: 'auto auto 15px',
        textAlign: 'center',
        width: '60%',
        backgroundColor: 'var(--lightPurple)'
    },

    updateFolderInput: {
        margin: '10px',
        fontSize: '2vw',
        padding: '5px',
        backgroundColor: 'var(--lightPurple)',
        border: '2px solid var(--purple)',
        fontWeight: 'bold',
        color: 'var(--purple)'
    },

    updateFolderLabel: {
        textTransform: 'uppercase',
        fontSize: '2.25vw',
        color: 'var(--purple)',
        fontWeight: 'bolder'
    },

    button: {
        margin: 'auto',
        backgroundColor: 'white',
        color: 'var(--purple)',
        fontSize: '1.5vw'
    },

    updateButtons: {
        display: 'flex',
        fontSize: '2vw',
        color: 'var(--purple)',
        border: '2px solid white',
        margin: 'auto auto 5px'
    },


}


export default updateFolderStyles
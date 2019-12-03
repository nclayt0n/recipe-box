import backgroundImage from '../../images/purpleLpurpleleaves.jpg'
const updateRecipeStyles = {

    div: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100%',
        backgroundColor: 'var(--purple)',
        width: '90%',
        backgroundPosition: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '50px auto 20px',
        padding: '10px',
        textDecoration: 'none',
        listStyle: 'none',
        border: '1px solid var(--lightPurple)',
        fontWeight: 'bold'
    },
    fieldset: {
        margin: 'auto auto 15px',
        textAlign: 'center',
        width: '50%',
        display: 'flex',
        backgroundColor: 'var(--lightPurple)',
        border: '1px solid var(--lightPurple)',
        flexDirection: 'column',
    },
    h3: {
        color: 'white',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '18px',
        textTransform: 'uppercase'
    },
    h4: {
        fontSize: '16px',
        width: '100%',
        fontWeight: 'bolder',
        color: 'var(--purple)',
        textDecoration: 'none',
        textShadow: '1px 1px var(--lightPurple)',
        margin: 'auto auto 10px'
    },
    textarea: {
        margin: '5px',
        padding: '5px',
        fontSize: '14px',
        backgroundColor: 'var(--lightPurple)',
        border: '2px solid var(--darkPurple)',
        color: 'var(--darkPurple)',
        fontWeight: 'bolder',
        minWidth: '200px',
        maxWidth: '250px',
        minHeight: '75px',
        maxHeight: '300px'
    },
    input: {
        margin: '10px',
        fontSize: '14px',
        backgroundColor: 'var(--lightPurple',
        border: '2px solid var(--darkPurple',
        fontWeight: 'bold',
        color: 'var(--darkPurple)',
    },
    select: {
        margin: 'auto',
        width: '200px',
        fontWeight: 'bold',
        border: '2px solid var(--darkPurple)',
        fontSize: '14px',
        color: 'var(--darkPurple)',
        backgroundColor: 'var(--lightPurple)',
    },
    label: {
        textTransform: 'uppercase',
        margin: '5px',
        fontSize: '16px',
        color: 'var(--darkPurple)',
        fontWeight: 'bolder'
    },
    option: {
        margin: 'auto',
        fontSize: '16px',
        backgroundColor: 'var(--lightPurple)',
    },
    updateButtons: {
        display: 'flex',
        fontSize: '14px',
        color: 'var(--darkPurple)',
        border: '2px solid white',
        margin: 'auto auto 5px',
        backgroundColor: ' white',
        fontWeight: 'bold',
        cursor: 'pointer'
    },

    tablet: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--darkPurple)',
            width: '60%',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '50px auto 20px',
            padding: '10px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'
        },
        h3: {
            color: 'white',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '20px',
            textTransform: 'uppercase'
        },
        fieldset: {
            margin: 'auto auto 15px',
            textAlign: 'center',
            width: '80%',
            display: 'flex',
            backgroundColor: 'var(--lightPurple)',
            border: '1px solid white',
            flexDirection: 'column',
        },
    },
    laptop: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            width: '60%',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '50px auto 20px',
            padding: '10px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'
        },
        h3: {
            color: 'white',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '24px',
            textTransform: 'uppercase',
            margin: '20px auto'
        },
        h4: {
            fontSize: '22px',
            width: '100%',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            textDecoration: 'underline',
            textShadow: '1px 1px var(--lightPurple)',
            margin: 'auto auto 10px'
        },
        fieldset: {
            margin: 'auto auto 15px',
            textAlign: 'center',
            width: '20%',
            backgroundColor: 'var(--lightPurple)',
            border: '1px solid white',
            padding: '20px'

        },
        textarea: {
            margin: '5px',
            fontSize: '18px',
            padding: '10px',
            backgroundColor: 'var(--lightPurple)',
            border: '2px solid var(--darkPurple)',
            color: 'var(--darkPurple)',
            fontWeight: 'bolder',
            minWidth: '200px',
            maxWidth: '250px',
            maxHeight: '300px'
        },
        recipeBox1: {
            flex: '1',
            margin: '0'
        },
        recipeBox2: {
            flex: '1',
            margin: '0'
        },
        form: {
            display: 'flex',
            margin: 'auto'
        },
        input: {
            margin: '5px',
            fontSize: '18px',
            padding: '5px',
            backgroundColor: 'var(--lightPurple',
            border: '2px solid var(--darkPurple',
            fontWeight: 'bold',
            color: 'var(--darkPurple',
            width: '200px'
        },
        select: {
            margin: 'auto',
            border: '2px solid var(--darkPurple)',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'var(--darkPurple)',
            backgroundColor: 'var(--lightPurple)',
            padding: '5px'
        },
        label: {
            textTransform: 'uppercase',
            fontSize: '18px',
            color: 'var(--darkPurple)',
            fontWeight: 'bolder'
        },
        option: {
            margin: 'auto',
            fontSize: '18px',
            backgroundColor: 'var(--lightPurple)',
        },
        updateButtons: {
            display: 'flex',
            fontSize: '18px',
            color: 'var(--darkPurple)',
            border: '2px solid white',
            margin: '5px auto 10px',
            backgroundColor: ' white',
            fontWeight: 'bold',
            cursor: 'pointer'
        },
    }

}


export default updateRecipeStyles
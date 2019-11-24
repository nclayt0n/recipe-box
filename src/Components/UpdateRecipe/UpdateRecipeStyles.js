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
        border: '1px solid white'
    },
    fieldset: {
        margin: 'auto auto 15px',
        textAlign: 'center',
        width: '50%',
        display: 'flex',
        backgroundColor: 'var(--lightPurple)',
        border: '1px solid white',
        flexDirection: 'column',
    },
    h3: {
        color: 'white',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '3.25vw',
        textTransform: 'uppercase'
    },
    h4: {
        fontSize: '2vw',
        width: '100%',
        fontWeight: 'bolder',
        color: 'var(--purple)',
        textDecoration: 'underline',
        textShadow: '1px 1px var(--lightPurple)',
        margin: 'auto auto 10px'
    },
    textarea: {
        margin: '5px',
        fontSize: '2vw',
        padding: '10px',
        backgroundColor: 'var(--lightPurple)',
        border: '2px solid var(--purple)',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        minWidth: '200px',
        maxWidth: '250px',
        maxHeight: '300px'
    },
    input: {
        margin: '10px',
        fontSize: '2vw',
        padding: '5px',
        backgroundColor: 'var(--lightPurple',
        border: '2px solid var(--purple',
        fontWeight: 'bold',
        color: 'var(--purple',
    },
    select: {
        margin: 'auto',
        border: '2px solid var(--purple)',
        fontSize: '2vw',
        color: 'var(--purple)',
        margin: '5px',
        backgroundColor: 'var(--lightPurple)',
        padding: '5px'
    },
    label: {
        textTransform: 'uppercase',
        margin: '5px',
        fontSize: '2.25vw',
        color: 'var(--purple)',
        fontWeight: 'bolder'
    },
    option: {
        margin: 'auto',
        fontSize: '1vw',
        backgroundColor: 'var(--lightPurple)',
    },
    updateButtons: {
        display: 'flex',
        fontSize: '2vw',
        color: 'var(--purple)',
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
            fontSize: '3.25vw',
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
            fontSize: '2vw',
            textTransform: 'uppercase',
            margin: '20px auto'
        },
        h4: {
            fontSize: '1.5vw',
            width: '100%',
            fontWeight: 'bolder',
            color: 'var(--purple)',
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
            fontSize: '1vw',
            padding: '10px',
            backgroundColor: 'var(--lightPurple)',
            border: '2px solid var(--purple)',
            color: 'var(--purple)',
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
            fontSize: '1vw',
            padding: '5px',
            backgroundColor: 'var(--lightPurple',
            border: '2px solid var(--purple',
            fontWeight: 'bold',
            color: 'var(--purple',
            width: '200px'
        },
        select: {
            margin: 'auto',
            border: '2px solid var(--purple)',
            fontSize: '1vw',
            color: 'var(--purple)',
            margin: '5px',
            backgroundColor: 'var(--lightPurple)',
            padding: '5px'
        },
        label: {
            textTransform: 'uppercase',
            fontSize: '1vw',
            color: 'var(--purple)',
            fontWeight: 'bolder'
        },
        option: {
            margin: 'auto',
            fontSize: '1vw',
            backgroundColor: 'var(--lightPurple)',
        },
        updateButtons: {
            display: 'flex',
            fontSize: '1vw',
            color: 'var(--purple)',
            border: '2px solid white',
            margin: '5px auto 10px',
            backgroundColor: ' white',
            fontWeight: 'bold',
            cursor: 'pointer'
        },
    }

}


export default updateRecipeStyles
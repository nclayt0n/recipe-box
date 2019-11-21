import backgroundImage from '../../images/purpleLpurpleleaves.jpg'
const updateRecipeStyles = {

    div: {
        backgroundImage: `url(${backgroundImage})`,
        // backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100%',
        backgroundColor: 'var(--purple)',
        width: '90%',
        backgroundPosition: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '10px auto 20px',
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
        fontSize: '2.25vw',
        width: '100%',
        fontWeight: 'bolder',
        color: 'var(--purple)',
        textDecoration: 'underline',
        textShadow: '1px 1px var(--lightPurple)'
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
    updateButtons: {
        display: 'flex',
        fontSize: '2vw',
        color: 'var(--purple)',
        border: '2px solid white',
        margin: 'auto auto 5px',
        backgroundColor: ' white',
        fontWeight: 'bold'
    },
    option: {
        margin: 'auto',
        fontSize: '1vw',
        backgroundColor: 'var(--lightPurple)',
    },
    tablet: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            // backgroundAttachment: 'fixed',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            width: '60%',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '10px auto 20px',
            padding: '10px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'
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
            // backgroundAttachment: 'fixed',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            width: '90%',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '10px auto 20px',
            padding: '10px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'
        },
        fieldset: {
            margin: 'auto auto 15px',
            textAlign: 'center',
            width: '20%',
            backgroundColor: 'var(--lightPurple)',
            border: '1px solid white',

        },
        recipeBox1: {
            margin: 'auto',
            float: 'right'
        },
        recipeBox2: {
            margin: 'auto',
            float: 'right'
        },
        form: {
            display: 'flex',
            margin: 'auto'
        },
        updateButtons: {
            display: 'flex',
            fontSize: '2vw',
            color: 'var(--purple)',
            border: '2px solid white',
            margin: 'auto auto 10px',
            backgroundColor: ' white',
            fontWeight: 'bold'
        },
    }

}


export default updateRecipeStyles
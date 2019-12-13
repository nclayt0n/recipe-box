import backgroundImage from './LandingImage/mainPurple.png'
const landingPageStyles = {
    descriptionBox: {
        width: '90%',
        margin: '50px auto 50px',
        padding: '10px',
        backgroundColor: 'var(--medPurple)'
    },
    RecipeBoxSpan: {
        fontSize: '28px',
        color: 'white',
        textShadow: '.25px .25px var(--darkPurple)',
        letterSpacing: '1.5px',
        fontWeight: 'bolder',
        textAlign: 'center',
        margin: '0',
        textDecoration: 'underline',
        lineHeight: '30px',
    },

    description: {
        padding: '10px',
        width: '95%',
        margin: 'auto',
        color: 'white',
        textShadow: '.25px .5px var(--darkPurple)',
        letterSpacing: '1.5px',
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '30px',
    },
    descriptionStart: {
        width: '95%',
        margin: '10px auto',
        color: 'white',
        textShadow: '.25px .5px var(--darkPurple)',
        letterSpacing: '1.25px',
        fontSize: '22px',
        lineHeight: '28px',
        textAlign: 'center',
        fontWeight: 'bolder'
    },
    landingPage: {
        display: 'flex',
        height: '375px',
        margin: '50px auto auto',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: '430px',
        backgroundRepeat: 'no-repeat',
    },
    greeting: {
        width: 'fit-content',
        padding: '0px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },

    button: {
        margin: '5px',
        padding: '5px',
        border: '2px solid var(--purple)',
        backgroundColor: 'white',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        fontSize: '20px',
    },

    buttonA: {
        color: 'var(--purple)',
        fontWeight: 'bolder'
    },

    landingPageLinkBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '175px',
        marginTop: '150px',
    },

    landingButtons: {
        fontSize: '18px',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        fontFamily: 'Helvetica,sans-serif',
    },
    tablet: {
        descriptionBox: {
            width: '75%',
            margin: '50px auto 50px',
            padding: '5px',
            backgroundColor: 'var(--medPurple)'
        },
        RecipeBoxSpan: {
            fontSize: '28px',
            color: 'white',
            textShadow: '.25px .25px var(--darkPurple)',
            letterSpacing: '1.5px',
            fontWeight: 'bolder',
            textAlign: 'center',
            margin: '0',
            textDecoration: 'underline',
            lineHeight: '30px',
        },

        description: {
            padding: '10px',
            width: '95%',
            margin: 'auto',
            color: 'white',
            textShadow: '.25px .5px var(--darkPurple)',
            letterSpacing: '1.25px',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '30px',
        },
        descriptionStart: {
            width: '95%',
            margin: '10px auto',
            color: 'white',
            textShadow: '.25px .5px var(--darkPurple)',
            letterSpacing: '1.25px',
            fontSize: '22px',
            lineHeight: '28px',
            textAlign: 'center',
            fontWeight: 'bolder'
        },
    },
    laptop: {
        descriptionBox: {
            width: '45%',
            margin: '50px auto 50px',
            padding: '15px',
            backgroundColor: 'var(--medPurple)'
        },
        RecipeBoxSpan: {
            fontSize: '28px',
            color: 'white',
            textShadow: '.25px .25px var(--darkPurple)',
            letterSpacing: '1.5px',
            fontWeight: 'bolder',
            textAlign: 'center',
            margin: '0',
            textDecoration: 'underline',
            lineHeight: '34px',
        },

        description: {
            padding: '10px',
            width: '95%',
            margin: 'auto',
            color: 'white',
            textShadow: '.5px .5px var(--darkPurple)',
            letterSpacing: '1.5px',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '30px',
        },
        descriptionStart: {
            width: '95%',
            margin: '10px auto',
            color: 'white',
            textShadow: '.25px .5px var(--darkPurple)',
            letterSpacing: '1.25px',
            fontSize: '22px',
            lineHeight: '28px',
            textAlign: 'center',
            fontWeight: 'bolder'

        },
    }

}
export default landingPageStyles
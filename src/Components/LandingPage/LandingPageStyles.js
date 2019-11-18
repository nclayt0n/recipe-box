import backgroundImage from './LandingImage/mainPurple.png'
const landingPageStyles = {
    landingPage: {
        display: 'flex',
        height: '550px',
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
        fontSize: '1.25vw',
    },

    buttonA: {
        color: 'var(--purple)',
        fontWeight: 'bolder'
    },

    landingPageLinkBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '170px',
        marginTop: '150px',
    },

    landingButtons: {
        fontSize: '18px',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        fontFamily: 'Helvetica,sans-serif',
    },

}
export default landingPageStyles
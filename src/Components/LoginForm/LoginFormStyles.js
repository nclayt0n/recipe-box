const loginFormStyles = {
    loginForm: {
        margin: 'auto',
        marginTop: '50px',
        width: '80%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        border: '1px solid var(--lightPurple)',
        flexDirection: 'column',
    },

    loginFormFieldset: {
        textAlign: 'center',
        border: 'none'

    },

    loginFormInput: {
        width: '95%',
        margin: '5px',
        padding: '5px',
        justifyContent: 'center',
        backgroundColor: 'var(--lightPurple)',
        border: '2px solid var(--purple)',
        fontWeight: 'bolder',
        color: 'white',
        fontSize: '14px'
    },

    loginFormLabel: {
        textAlign: 'center',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        fontSize: '16px',
        textShadow: '.5px 1px var(--gray)',
    },

    loginFormLegend: {
        textAlign: 'center',
        margin: 'auto',
        padding: '10px',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        fontSize: '24px',
        textShadow: '1px 1px var(--gray)',
    },

    loginFormButtonA: {
        margin: 'auto',
        marginBottom: '5px',
        padding: '5px',
        backgroundColor: 'var(--purple)',
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '16px',
        textShadow: '.5px .5px var(--gray)',
    },

    tablet: {
        loginFormInput: {
            width: '70%',
            margin: '5px',
            padding: '5px',
            justifyContent: 'center',
            backgroundColor: 'var(--lightPurple)',
            border: '2px solid var(--purple)',
            fontWeight: 'bold',
            color: 'white',
            fontSize: '14px'
        },
        loginForm: {
            width: '400px',
            margin: 'auto',
            marginTop: '100px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            border: '1px solid var(--lightPurple)',
            flexDirection: 'column',
        },
    },
}
export default loginFormStyles
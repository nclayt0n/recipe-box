import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
const recipeListStyles = {
    recipeListStyle: {

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
            margin: '50px auto 50px',
            padding: '10px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'
        },
        ul: {
            padding: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'white'
        },
        ulA: {
            fontSize: '22px',
            color: 'white',
            textDecoration: 'none',
        },
        li: {
            padding: '10px',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
        },
        liA: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px'
        },
        button: {
            margin: '10px auto 10px ',
            color: 'var(--purple)',
            backgroundColor: 'white',
            fontWeight: 'bold',
            width: '40%',
            fontSize: '16px'
        },

        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                // backgroundAttachment: 'fixed',
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '50%',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: 'auto',
                marginTop: '50px',
                padding: '10px',
                textDecoration: 'none',
                listStyle: 'none',
                border: '1px solid white'


            },
            ul: {
                textDecoration: 'none',
                padding: '10px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                margin: 'auto'
            },
            ulA: {
                color: 'white',
                fontSize: '20px',
                textDecoration: 'none'
            },
            li: {
                padding: '10px',
                fontSize: '18px',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
                textDecoration: 'none'

            },
            liA: {
                color: 'white',
                margin: 'auto',
                fontSize: '18px',
                textDecoration: 'none',
            },
            button: {
                margin: '10px auto 10px ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                width: '40%',
                fontSize: '16px'
            },

        },
        laptop: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '30%',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '50px auto 50px',
                padding: '10px',
                textDecoration: 'none',
                listStyle: 'none',
                border: '1px solid white'
            },
            ul: {
                textDecoration: 'none',
                padding: '10px',
                fontSize: '22px',
                fontWeight: 'bold',
                cursor: 'pointer',

            },

            ulA: {
                fontSize: '22px',
                color: 'white',
                textDecoration: 'none',
                textShadow: '1px 1px var(--lightPurple)'
            },
            li: {
                padding: '10px',
                fontSize: '18px',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                fontSize: '18px'
            },
            button: {
                margin: '10px auto 10px ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                width: '40%',
                fontSize: '16px'
            },

        }
    },

}


export default recipeListStyles
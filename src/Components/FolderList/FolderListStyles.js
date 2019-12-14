import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
const folderListStyles = {
    folderListStyle: {
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
            textDecoration: 'none',
            padding: '10px',
            fontSize: '22px',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        ulA: {
            color: 'white',
            fontSize: '22px',
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
            textDecoration: 'none',
            margin: 'auto',
            fontSize: '18px',
        },
        button: {
            width: '40%',
            color: 'var(--purple)',
            margin: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: 'white'
        },
        buttonA: {
            color: 'var(--purple)',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: 'white'
        },

        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '50%',
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
                color: 'white',
                fontSize: '22px',
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
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '18px',
            },
            button: {
                width: '40%',
                color: 'var(--purple)',
                margin: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: 'white'
            },
            buttonA: {
                color: 'var(--purple)',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: 'white'
            },
        },
        laptop: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '40%',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '50px auto 50px ',
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
                color: 'white',
                fontSize: '22px',
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
                backgroundColor: 'var(--purple)',
                color: 'white',
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '18px',
            },
            button: {
                width: '50%',
                color: 'var(--purple)',
                margin: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: 'white'
            },
            buttonA: {
                color: 'var(--purple)',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: 'white'
            },
        }
    }
}


export default folderListStyles
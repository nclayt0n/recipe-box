import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
const folderListStyles = {
    folderListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            // backgroundAttachment: 'fixed',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            width: '80%',
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
            fontSize: '4.5vw',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        ulA: {
            color: 'white',
            fontSize: '4.5vw',
        },
        li: {
            padding: '10px',
            fontSize: '4vw',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
            textDecoration: 'none'

        },
        liA: {

            color: 'white',
            textDecoration: 'none',
            margin: 'auto',
            fontSize: '4vw',
        },
        button: {
            width: '40%',
            color: 'var(--purple)',
            margin: '10px',
            fontSize: '4vw',
            fontWeight: 'bold',
        },
        buttonA: {
            color: 'var(--purple)',
            fontSize: '4vw',
            fontWeight: 'bold',
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
                fontSize: '1.75vw',
                fontWeight: 'bold',
                cursor: 'pointer',
            },
            ulA: {
                color: 'white',
                fontSize: '1.75vw',
            },
            li: {
                padding: '10px',
                fontSize: '1.5vw',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
                textDecoration: 'none'

            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '1.5vw',
            },
            button: {
                width: '40%',
                color: 'var(--purple)',
                margin: '10px',
                fontSize: '1.5vw',
                fontWeight: 'bold',
            },
            buttonA: {
                color: 'var(--purple)',
                fontSize: '1.5vw',
                fontWeight: 'bold',
            },
        }
    }
}


export default folderListStyles
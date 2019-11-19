import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.png'
const folderListStyles = {
    folderListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
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
            padding: '5px',
            fontSize: '2.25vw',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        ulA: {
            color: 'white',
            textDecoration: 'underline'
        },
        li: {
            padding: '10px',
            fontSize: '2vw',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
            textDecoration: 'none'

        },
        liA: {

            color: 'white',
            textDecoration: 'none',
            margin: 'auto'
        },
        button: {
            width: '60%',
            color: 'var(--purple)',
            margin: '10px'
        },
        buttonA: {
            color: 'var(--purple)'
        }
    }
}


export default folderListStyles
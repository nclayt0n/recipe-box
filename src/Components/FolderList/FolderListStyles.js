import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.png'
const folderListStyles = {
    folderListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            width: 'fit-content',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '50px',
            padding: '50px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'

        },
        ul: {
            textDecoration: 'none',
            padding: '10px',
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
            fontSize: '1.75vw',
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
            width: '40%',
        }
    }
}


export default folderListStyles
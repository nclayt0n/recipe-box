import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
import addFbackgroundImage from '../../images/purplelavleaves.jpg'
const hpStyles = {
    homePageStyle: {
        backgroundColor: '#C8923B'
    },
    addFolder: {
        container: {
            height: 'fit-content',
            borderRadius: '5px',
        },
        addFolderDivStyle: {
            backgroundImage: `url(${addFbackgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            width: '80%',
            backgroundPosition: 'top',
            border: '2px solid var(--darkPurple)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginBottom: '20px',
            padding: '20px',
        },
        addFolderFieldset: {
            border: 'none'
        },
        addFolderButtons: {
            width: '100px',
            backgroundColor: 'var(--purple)',
            color: 'white'
        },
        addFolderLabel: {
            flexGrow: '2',
            color: 'var(--purple)'
        },
        addFolderInput: {
            flexGrow: '2',
            color: 'var(--purple)'
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '3vw',
        }
    },
    addRecipeStyle: {
        div: {
            width: '80%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '50px',
            padding: '50px',
            backgroundImage: `url(${addFbackgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            fontWeight: 'bold',
            fontSize: '2vw'

        },
        divLaptop: {
            width: '60%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '50px',
            padding: '50px',
            backgroundImage: `url(${addFbackgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            fontWeight: 'bold',
            fontSize: '2vw'

        },
        select: {
            backgroundColor: 'white',
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '2vw',
            border: '1px solid var(--purple)'

        },
        option: {
            color: 'var(--purple)',
        },
        selectLaptop: {
            backgroundColor: 'white',
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '1vw'

        },
        form: {
            border: '1px solid var(--purple)',
            width: 'fit-content',
            margin: 'auto',
            padding: '5px'

        },
        formLaptop: {
            border: '1px solid var(--purple)',
            backgroundColor: 'white',
            width: 'fit-content',
            margin: 'auto',
            padding: '5px'

        },
        fieldset: {
            border: 'none'
        },
        label: {
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        labelLaptop: {
            color: 'var(--purple)',
            fontSize: '1.5vw',
            fontWeight: 'bold'
        },
        legend: {
            color: 'var(--purple)',
            fontWeight: 'bolder',
            fontSize: '2.2vw',
        },
        legendLaptop: {
            color: 'var(--purple)',
            fontWeight: 'bolder',
            fontSize: '1.5vw',
        },
        button: {
            backgroundColor: 'var(--purple)',
            color: 'white'
        },
        ingredientInput: {
            width: '90%',
            color: 'var(--purple)',
        },
        ingredientInputLaptop: {
            width: '90%',
            fontSize: '1vw',
            color: 'var(--purple)',
        },
        input: {
            width: '125px',
            color: 'var(--purple)',
        },
        inputLaptop: {
            width: '90%',
            fontSize: '1vw',
            color: 'var(--purple)',
        },
        textarea: {
            minWidth: '125px',
            maxWidth: '125px',
            maxHeight: '150px',
            color: 'var(--purple)'
        },
        textareaLaptop: {
            width: '100%',
            minWidth: '125px',
            maxWidth: '125px',
            maxHeight: '150px',
            color: 'var(--purple)'
        },
        LaptopViewContainer: {
            display: 'flex',
            flexDirection: 'row',
        }
    },
    folderListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '80%',
            backgroundColor: 'var(--purple)',
            width: '80%',
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
            padding: '10px',
            fontSize: '22px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'white'
        },
        ulA: {
            color: 'white',
            textDecoration: 'underline'
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
            margin: 'auto',
            fontWeight: 'normal'
        },
        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'repeat-y',
                backgroundSize: '30%',
                backgroundColor: 'var(--purple)',
                width: '30%',
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
    },
    recipeListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '80%',
            backgroundColor: 'var(--purple)',
            width: '80%',
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
            padding: '10px',
            fontSize: '22px',
            fontWeight: 'bolder',
            cursor: 'pointer',
            color: 'white'
        },
        ulA: {
            textDecoration: 'underline',
            color: 'white',
        },
        li: {
            padding: '10px',
            fontSize: '18px',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
            fontWeight: 'normal'
        },
        liA: {

            color: 'white',
            textDecoration: 'none'
        },
        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'repeat-y',
                backgroundSize: '30%',
                backgroundColor: 'var(--purple)',
                width: '30%',
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
            ulA: {
                fontSize: '1.75vw',
                color: 'white',
                textDecoration: 'none',
                textShadow: '1px 1px var(--lightPurple)'
            },
            li: {
                padding: '10px',
                fontSize: '1.5vw',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5vw'
            },
            button: {
                margin: '10px auto auto ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                width: 'fit-content',
                fontSize: '1.5vw'
            },

        }

    },
    ingredients: {
        list: {
            height: '300px'
        }
    }

}

export default hpStyles
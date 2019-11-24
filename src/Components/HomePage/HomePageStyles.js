import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
import backgroundImage2 from '../../images/purplelavleaves.jpg'
const hpStyles = {
    mainContainer: {
        display: 'flex',
        width: '100%',
        margin: 'auto',
        padding: '10'
    },
    addLaptopContainer: {
        width: 'fit-content',
        padding: '0',
        flex: '2',
        margin: '10px',
    },
    listLaptopContainer: {
        width: '100%',
        padding: '0',
        flex: '1',
        margin: '10px'
    },
    homePageStyle: {
        backgroundColor: '#C8923B',

    },

    addFolder: {
        container: {
            height: 'fit-content',
            borderRadius: '5px',
        },
        addFolderDivStyle: {
            backgroundImage: `url(${backgroundImage2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            width: '90%',
            backgroundPosition: 'top',
            border: '2px solid var(--darkPurple)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '30px auto 50px',
            padding: '5px',
        },
        addFolderFieldset: {
            border: 'none'
        },
        addFolderButtons: {
            width: 'fit-content',
            padding: '5px',
            margin: '5px',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            color: 'white',
            fontSize: '3vw'

        },
        addFolderLabel: {
            fontSize: '3.5vw',
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        addFolderInput: {
            fontSize: '3.5vw',
            color: 'var(--purple)',
            border: '1px solid var(--purple)',
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            fontWeight: 'bolder',
            textShadow: '.5px .5px var(--darkPurple)',
            fontSize: '4vw',
        },
        tablet: {
            addFolderDivStyle: {
                backgroundImage: `url(${backgroundImage2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundColor: 'white',
                backgroundPosition: 'top',
                border: '2px solid var(--purple)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '60%',
                margin: '50px auto 50px',
                fontSize: '2vw',
                padding: '50px',
            },
            addFolderLabel: {
                fontSize: '2vw',
                color: 'var(--purple)',
                fontWeight: 'bold'
            },
            addFolderInput: {
                width: '30%',
                fontSize: '2vw',
                margin: '5px auto',
                border: '1px solid var(--purple)',

            },
            addFolderButtons: {
                width: 'fit-content',
                padding: '5px',
                fontWeight: 'bold',
                backgroundColor: 'var(--purple)',
                color: 'white',
                margin: 'auto',
                fontSize: '2vw',
            },
            h3: {
                color: 'var(--purple)',
                textAlign: 'center',
                textShadow: '1px 1px var(--darkPurple)',
                fontSize: '2.25vw',
            },
        },
        laptop: {
            addFolderDivStyle: {
                backgroundColor: 'white',
                border: '5px solid var(--darkPurple)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '70%',
                margin: '30px auto 30px',
                padding: '5px',
            },
            addFolderLabel: {
                fontSize: '1.25vw',
                color: 'var(--purple)',
                fontWeight: 'bold'
            },
            addFolderInput: {
                width: '40%',
                fontSize: '1.25vw',
                margin: '5px auto',
                border: '2px solid var(--purple)',

            },
            addFolderButtons: {
                width: 'fit-content',
                fontWeight: 'bold',
                backgroundColor: 'var(--purple)',
                color: 'white',
                margin: 'auto',
                padding: '5px',
                fontSize: '1.25vw',
            },
            h3: {
                color: 'var(--purple)',
                textAlign: 'center',
                textShadow: '1px 1px var(--darkPurple)',
                fontSize: '1.75vw',
            },
        }
    },
    addRecipeStyle: {
        div: {
            width: '90%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '50px auto',
            padding: '50px',
            backgroundColor: 'white',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            fontWeight: 'bold',
            fontSize: '2vw'
        },
        h3: {
            color: 'var(--purple)',
            textShadow: '.5px .5px var(--darkPurple)',
            fontSize: '4vw',
            margin: '5px'
        },
        select: {
            backgroundColor: 'white',
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '3vw',
            border: '1px solid var(--purple)',
            margin: '5px',
            padding: '5px'

        },
        option: {
            color: 'var(--purple)',
            fontSize: '3vw',
        },
        form: {
            border: '1px solid var(--purple)',
            width: '85%',
            margin: 'auto auto 10px',
            padding: '0'

        },
        fieldset: {
            border: 'none',
        },
        label: {
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '3.25vw',

        },

        legend: {
            color: 'var(--darkPurple)',
            fontWeight: 'bolder',
            fontSize: '3.5vw',
        },
        button: {
            backgroundColor: 'var(--purple)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '3vw',
            padding: '5px',
            margin: '5px'

        },
        ingredientInput: {
            width: '70%',
            color: 'var(--purple)',
            fontSize: '3.5vw',
            border: '1px solid var(--purple)',
        },
        input: {
            width: '70%',
            color: 'var(--purple)',
            fontSize: '3.5vw',
            border: '1px solid var(--purple)',
        },
        textarea: {
            minWidth: '70%',
            maxWidth: '125px',
            maxHeight: '250px',
            color: 'var(--purple)',
            border: '1px solid var(--purple)',
        },
        tablet: {
            div: {
                width: '60%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '50px auto 50px',
                padding: '50px',
                backgroundImage: `url(${backgroundImage2})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundColor: 'white',
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
                border: '1px solid var(--purple)',
                padding: '5px',
                margin: '5px'

            },
            option: {
                color: 'var(--purple)',
                fontSize: '2vw',
            },
            form: {
                border: '1px solid var(--purple)',
                width: '60%',
                margin: 'auto auto 10px',
                padding: '5px'

            },
            fieldset: {
                border: 'none',
                margin: 'auto',
                padding: '0'
            },
            label: {
                color: 'var(--purple)',
                fontWeight: 'bold',
                fontSize: '2vw',
                margin: '5px'
            },
            h3: {
                color: 'var(--purple)',
                fontSize: '2.25vw'
            },
            legend: {
                color: 'var(--darkPurple)',
                fontWeight: 'bolder',
                fontSize: '2.25vw',
            },
            button: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2vw',
                padding: '5px',
                margin: '5px'
            },
            ingredientInput: {
                width: '90%',
                color: 'var(--purple)',
                border: '1px solid var(--purple)',
            },
            input: {
                width: '90%',
                color: 'var(--purple)',
                margin: '5px',
                border: '1px solid var(--purple)',

            },
            textarea: {
                minWidth: '90%',
                maxWidth: '125px',
                maxHeight: '150px',
                color: 'var(--purple)',
                border: '1px solid var(--purple)',
            },
        },
        laptop: {
            div: {
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '20px auto 20px',
                padding: '10px',
                backgroundColor: 'white',
                fontWeight: 'bold',
                fontSize: '1.25vw',
                border: '5px solid var(--darkPurple)'
            },
            select: {
                backgroundColor: 'white',
                color: 'var(--purple)',
                fontWeight: 'bold',
                fontSize: '1.25vw',
                margin: '5px',
                border: '2px solid var(--purple)',

            },
            option: {
                color: 'var(--purple)',
                fontSize: '1.25vw',
                border: '2px solid var(--purple)',
            },
            form: {
                border: '4px solid var(--purple)',
                backgroundColor: 'white',
                width: '45%',
                height: 'fit-content',
                margin: ' auto',
                padding: '5px',

            },
            label: {
                color: 'var(--purple)',
                fontSize: '1.25vw',
                fontWeight: 'bold',

            },
            legend: {
                color: 'var(--darkPurple)',
                fontWeight: 'bolder',
                fontSize: '1.5vw',
            },
            ingredientInput: {
                width: '90%',
                fontSize: '1.25vw',
                color: 'var(--purple)',
                border: '2px solid var(--purple)',
            },
            input: {
                width: '90%',
                border: '2px solid var(--purple)',
                fontSize: '1.25vw',
                color: 'var(--purple)',
            },
            h3: {
                color: 'var(--purple)',
                fontSize: '1.75vw',
                textShadow: '1px 1px var(--darkPurple)',
                margin: '5px'
            },
            textarea: {
                minWidth: '90%',
                maxWidth: '125px',
                maxHeight: '150px',
                color: 'var(--purple)',
                border: '2px solid var(--purple)',
            },
            ViewContainer: {
                display: 'flex',
                flexDirection: 'row',
            },
            button: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                fontSize: '1.25vw',
                padding: '5px',
                fontWeight: 'bold',
                margin: '5px auto'
            },
        }
    },
    folderListStyle: {
        container: {

        },
        div: {
            backgroundImage: `url(${backgroundImage})`,
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
            padding: '50px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'
        },
        ul: {
            padding: '10px',
            fontSize: '4vw',
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
            fontSize: '3.5vw',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
        },
        liA: {

            color: 'white',
            textDecoration: 'none',
            margin: 'auto',
            fontSize: '3.5vw',
            fontWeight: 'normal'
        },
        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '45%',
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
                fontSize: '2.25vw',
                fontWeight: 'bold',
                cursor: 'pointer',
            },
            ulA: {
                color: 'white',
                fontSize: '2.25vw',
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
                margin: 'auto',
                fontSize: '2vw',
            },
            button: {
                width: '40%',
                color: 'var(--purple)',
                margin: '10px',
                fontSize: '2vw',
                fontWeight: 'bold',
                padding: '5px',
            },
            buttonA: {
                color: 'var(--purple)',
                fontSize: '2vw',
                padding: '5px',
                fontWeight: 'bold',

            },
        },
        laptop: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '100%',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                margin: '20px auto 20px',
                flexDirection: 'column',
                justifyContent: 'center',
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
                textShadow: '1px 1px #8a64a3',
            },
            li: {
                padding: '10px',
                fontSize: '1vw',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
                textDecoration: 'none'

            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '1vw',
            },
        }
    },
    recipeListStyle: {
        div: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            width: '80%',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '50px auto 50px',
            padding: '50px',
            textDecoration: 'none',
            listStyle: 'none',
            border: '1px solid white'

        },
        ul: {
            padding: '10px',
            fontSize: '4vw',
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
            fontSize: '3.5vw',
            cursor: 'pointer',
            listStyle: 'none',
            textAlign: 'center',
        },
        liA: {

            color: 'white',
            textDecoration: 'none',
            margin: 'auto',
            fontSize: '3.5vw',
            fontWeight: 'normal'
        },
        tablet: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '45%',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '50px auto 50px',
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
                fontSize: '2.25vw',
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
                margin: 'auto',
                fontSize: '2vw',
            },
            button: {
                margin: '10px auto auto ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                padding: '5px',
                width: 'fit-content',
                fontSize: '2vw'
            },

        },
        laptop: {
            div: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%',
                backgroundColor: 'var(--purple)',
                width: '100%',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '20px auto 20px',
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
                textShadow: '1px 1px #8a64a3',
            },
            li: {
                padding: '10px',
                fontSize: '1vw',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
                textDecoration: 'none'

            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '1vw',
            },
            button: {
                margin: '10px auto 10px ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                width: '40%',
                fontSize: '1.5vw'
            },

        }

    },

}

export default hpStyles
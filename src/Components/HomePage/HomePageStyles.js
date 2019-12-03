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
            fontSize: '14px'

        },
        addFolderLabel: {
            fontSize: '16px',
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        addFolderInput: {
            fontSize: '14px',
            color: 'var(--purple)',
            border: '1px solid var(--purple)',
        },
        h3: {
            color: 'var(--purple)',
            textAlign: 'center',
            fontWeight: 'bolder',
            textShadow: '.5px .5px var(--darkPurple)',
            fontSize: '20px',
            margin: '20px auto 5px'
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
                padding: '15px',
            },
            addFolderLabel: {
                fontSize: '16px',
                color: 'var(--purple)',
                fontWeight: 'bold'
            },
            addFolderInput: {
                width: '30%',
                fontSize: '14px',
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
                fontSize: '16px',
            },
            h3: {
                color: 'var(--purple)',
                textAlign: 'center',
                textShadow: '.25px .25px var(--darkPurple)',
                fontSize: '20px',
                margin: '10px auto 10px'
            },
        },
        laptop: {
            addFolderDivStyle: {
                backgroundColor: 'white',
                border: '3px solid var(--darkPurple)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '70%',
                margin: '30px auto 30px',
                padding: '15px',
            },
            addFolderLabel: {
                fontSize: '18px',
                color: 'var(--purple)',
                fontWeight: 'bold'
            },
            addFolderInput: {
                width: '60%',
                fontSize: '16px',
                padding: '5px',
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
                fontSize: '18px',
            },
            h3: {
                color: 'var(--purple)',
                textAlign: 'center',
                textShadow: '.25px .25px var(--darkPurple)',
                fontSize: '26px',
                margin: '10px'
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
            padding: '30px',
            backgroundColor: 'white',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            fontWeight: 'bold',
        },
        h3: {
            color: 'var(--purple)',
            textShadow: '.5px .25px var(--darkPurple)',
            fontSize: '18px',
            margin: '10px auto'
        },
        select: {
            backgroundColor: 'white',
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '14px',
            border: '1px solid var(--purple)',
            margin: '5px'
        },
        option: {
            color: 'var(--purple)',
            fontSize: '14px',
        },
        form: {
            border: '2px solid var(--purple)',
            width: '85%',
            margin: 'auto auto 10px',
            padding: '0'

        },
        fieldset: {
            border: 'none',
            padding: '0',
            margin: 'auto'
        },
        label: {
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '14px',

        },

        legend: {
            color: 'var(--purple)',
            fontWeight: 'bolder',
            fontSize: '16px',
            textShadow: '.5px .25px var(--purple)',
        },
        button: {
            backgroundColor: 'var(--purple)',
            color: 'white',
            fontSize: '14px',
            margin: '5px'

        },
        ingredientInput: {
            width: '70%',
            color: 'var(--purple)',
            fontSize: '14px',
            border: '1px solid var(--purple)',
        },
        input: {
            width: '65%',
            color: 'var(--purple)',
            fontSize: '14px',
            border: '1px solid var(--purple)',
        },
        textarea: {
            fontSize: '14px',
            minWidth: '75%',
            maxWidth: '125px',
            minHeight: '75px',
            maxHeight: '250px',
            color: 'var(--purple)',
            border: '1px solid var(--purple)',
        },
        tablet: {
            div: {
                width: '70%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '50px auto 50px',
                padding: '50px',
                backgroundColor: 'white',
                border: '2px solid var(--darkPurple)',
                fontWeight: 'bold',
            },
            select: {
                backgroundColor: 'white',
                color: 'var(--purple)',
                fontWeight: 'bold',
                fontSize: '16px',
                border: '1px solid var(--purple)',
                margin: '5px',
                padding: '5px'
            },
            option: {
                color: 'var(--purple)',
                fontSize: '16px',
            },
            form: {
                border: '2px solid var(--purple)',
                width: '60%',
                margin: 'auto auto 10px',
                padding: '5px'

            },
            fieldset: {
                border: 'none',
            },
            label: {
                color: 'var(--purple)',
                fontWeight: 'bold',
                fontSize: '18px',
                margin: '5px'
            },
            h3: {
                color: 'var(--purple)',
                fontSize: '20px'
            },
            legend: {
                color: 'var(--purple)',
                fontWeight: 'bolder',
                fontSize: '18px',
            },
            button: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                fontSize: '16px',
                margin: '5px'
            },
            ingredientInput: {
                width: '150px',
                padding: '5px',
                fontSize: '16px',
                color: 'var(--purple)',
                border: '1px solid var(--purple)',
            },
            input: {
                width: '175px',
                padding: '5px',
                fontSize: '16px',
                color: 'var(--purple)',
                margin: '5px',
                border: '1px solid var(--purple)',

            },
            textarea: {
                fontSize: '16px',
                minWidth: '90%',
                minHeight: '75px',
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
                padding: '15px',
                backgroundColor: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                border: '3px solid var(--darkPurple)',
                backgroundImage: `url(${backgroundImage2})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            },
            select: {
                backgroundColor: 'white',
                color: 'var(--purple)',
                fontWeight: 'bold',
                fontSize: '18px',
                border: '2px solid var(--purple)',
                margin: '5px'

            },
            option: {
                color: 'var(--purple)',
                fontSize: '18px',
            },
            form: {
                border: '2px solid var(--purple)',
                backgroundColor: 'white',
                width: '225px',
                margin: 'auto',
                padding: '5px',
            },
            label: {
                color: 'var(--purple)',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '5px',
            },
            legend: {
                color: 'var(--purple)',
                fontWeight: 'bolder',
                fontSize: '20px',
                margin: ' 10px auto'
            },
            ingredientInput: {
                width: '150px',
                fontSize: '18px',
                color: 'var(--purple)',
                border: '2px solid var(--purple)',
                margin: '5px'
            },
            input: {
                width: '175px',
                fontSize: '18px',
                color: 'var(--purple)',
                border: '2px solid var(--purple)',
                margin: '5px'

            },
            h3: {
                color: 'var(--purple)',
                fontSize: '26px'
            },
            textarea: {
                fontSize: '18px',
                minWidth: '175px',
                minHeight: '75px',
                maxWidth: '175px',
                maxHeight: '200px',
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
                fontSize: '18px',
                margin: '5px'
            },
        }
    },
    folderListStyle: {
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
            padding: '10px',
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
            fontSize: '22px',
            textDecoration: 'underline'
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
                fontSize: '22px',
                fontWeight: 'bold',
                cursor: 'pointer',
            },
            ulA: {
                color: 'white',
                fontSize: '22px',
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
                fontSize: '26px',
                fontWeight: 'bold',
                cursor: 'pointer',

            },
            ulA: {
                color: 'white',
                fontSize: '26px',
                textShadow: '1px 1px #8a64a3',
            },
            li: {
                padding: '10px',
                fontSize: '22px',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 'normal'

            },
            liA: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '22px',
            },
        }
    },
    recipeListStyle: {
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
            padding: '10px',
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
            fontSize: '22px',
            textDecoration: 'underline'
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
                fontSize: '22px',
                fontWeight: 'bold',
                cursor: 'pointer',
            },
            ulA: {
                color: 'white',
                fontSize: '22px',
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
                fontSize: '26px',
                fontWeight: 'bold',
                cursor: 'pointer',

            },
            ulA: {
                color: 'white',
                fontSize: '26px',
                textShadow: '1px 1px #8a64a3',
            },
            li: {
                padding: '10px',
                fontSize: '22px',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 'normal'

            },
            liA: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                textDecoration: 'none',
                margin: 'auto',
                fontSize: '22px',
            },
        }
    },

}

export default hpStyles
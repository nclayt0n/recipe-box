import backgroundImage from '../../images/purpleWhiteLeaves.jpg';
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
            backgroundColor: 'var(--lightPurple)',
            width: '90%',
            backgroundPosition: 'top',
            border: '2px solid var(--lightPurple)',
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
            fontSize: '14px',
            border: '1px solid var(--purple)'

        },
        addFolderLabel: {
            fontSize: '16px',
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        addFolderInput: {
            fontSize: '14px',
            color: 'var(--purple)',
            margin: '5px auto',
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
                backgroundColor: 'var(--lightPurple)',
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
                backgroundColor: 'var(--lightPurple)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '600px',
                margin: '30px auto 30px',
                padding: '15px',
            },
            addFolderLabel: {
                fontSize: '20px',
                color: 'var(--darkPurple)',
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
                border: '1px solid var(--purple)',
                color: 'white',
                margin: 'auto',
                padding: '5px',
                fontSize: '18px',
            },
            h3: {
                color: 'var(--darkPurple)',
                textAlign: 'center',
                textShadow: '.25px .25px var(--darkPurple)',
                fontSize: '26px',
                margin: '10px'
            },
        }
    },
    addRecipeStyle: {
        laptop: {
            div: {
                width: '600px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '20px auto 20px',
                padding: '15px',
                backgroundColor: 'var(--lightPurple)',
                fontWeight: 'bold',
                fontSize: '16px',
                border: '3px solid var(--lightPurple)',
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
                border: '4px solid var(--purple)',
                backgroundColor: 'var(--lightPurple)',
                width: '230px',
                margin: 'auto',
                padding: '10px',
            },
            label: {
                color: 'var(--darkPurple)',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '5px',
            },
            legend: {
                color: 'var(--darkPurple)',
                fontWeight: 'bolder',
                fontSize: '22px',
                margin: '10px',
                border: 'none'
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
                color: 'var(--darkPurple)',
                fontSize: '26px'
            },
            fieldset: {
                border: 'none'
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
                border: '1px solid var(--purple)',
                color: 'white',
                fontSize: '18px',
                margin: '5px',
                padding: '5px',
                fontWeight: 'bold'
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
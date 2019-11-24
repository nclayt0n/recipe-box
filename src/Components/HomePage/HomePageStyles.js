import React from 'react'
import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
import backgroundImage2 from '../../images/purplelavleaves.jpg'
const hpStyles = {
    mainContainer: {
        display: 'flex',
        width: '100%',
        margin: 'auto',
        padding: '0'
    },
    addLaptopContainer: {
        width: '100%',
        padding: '0',
        flex: '2',
        margin: '10px'
    },
    listLaptopContainer: {
        width: '100%',
        padding: '0',
        flex: '1',
        margin: '10px'
    },
    ingredientsContainer: {
        margin: '20px',
        flex: '1'
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
            padding: '20px',
        },
        addFolderFieldset: {
            border: 'none'
        },
        addFolderButtons: {
            width: 'fit-content',
            padding: '5px',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            color: 'white',
            fontSize: '3vw'

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
                textShadow: '1px 1px #8a64a3',
                fontSize: '2.25vw',
            },
        },
        laptop: {
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
                width: '70%',
                margin: '20px auto 50px',
                padding: '10px',
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

            },
            addFolderButtons: {
                width: 'fit-content',
                fontWeight: 'bold',
                backgroundColor: 'var(--purple)',
                color: 'white',
                margin: 'auto',
                fontSize: '1.25vw',
            },
            h3: {
                color: 'var(--purple)',
                textAlign: 'center',
                textShadow: '1px 1px #8a64a3',
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
            margin: 'auto',
            marginTop: '50px',
            padding: '50px',
            // backgroundImage: `url(${backgroundImage2})`,
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: '110%',
            backgroundColor: 'white',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            fontWeight: 'bold',
            fontSize: '2vw'
        },
        h3: {
            color: 'var(--purple)',
            fontSize: '3.5vw',
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
            width: '80%',
            margin: 'auto auto 10px',
            padding: '5px'

        },
        fieldset: {
            border: 'none',
        },
        label: {
            color: 'var(--purple)',
            fontWeight: 'bold',
            fontSize: '3vw',

        },

        legend: {
            color: 'var(--purple)',
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
            fontSize: '2.5vw'
        },
        input: {
            width: '70%',
            color: 'var(--purple)',
            margin: '5px',
            fontSize: '2.5vw'
        },
        textarea: {
            minWidth: '70%',
            maxWidth: '125px',
            maxHeight: '250px',
            color: 'var(--purple)'
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
                color: 'var(--purple)',
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
            },
            input: {
                width: '90%',
                color: 'var(--purple)',
                margin: '5px'

            },
            textarea: {
                minWidth: '90%',
                maxWidth: '125px',
                maxHeight: '150px',
                color: 'var(--purple)'
            },
        },
        laptop: {
            div: {
                width: '80%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '0',
                padding: '10px',
                // backgroundImage: `url(${backgroundImage2})`,
                // backgroundRepeat: 'noRepeat',
                // backgroundSize: 'cover',
                // backgroundPosition: 'top',
                backgroundColor: 'white',
                border: '2px solid var(--purple)',
                fontWeight: 'bold',
                fontSize: '1.25vw'

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
                width: '40%',
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
                color: 'var(--purple)',
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
                fontSize: '1vw',
                color: 'var(--purple)',
            },
            h3: {
                color: 'var(--purple)',
                fontSize: '1.75vw',
                textShadow: '1px 1px #8a64a3',
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
            },
        }
    },
    folderListStyle: {
        container: {

        },
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
                // backgroundAttachment: 'fixed',
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
                // backgroundAttachment: 'fixed',
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
            margin: '50px auto 50px',
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
                // backgroundAttachment: 'fixed',
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
            ulA: {
                fontSize: '2.25vw',
                color: 'white',
                textDecoration: 'none',
                textShadow: '1px 1px var(--lightPurple)'
            },
            li: {
                padding: '10px',
                fontSize: '2vw',
                cursor: 'pointer',
                listStyle: 'none',
                textAlign: 'center',
            },
            liA: {

                color: 'white',
                textDecoration: 'none',
                fontSize: '2vw'
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
                // backgroundAttachment: 'fixed',
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
                margin: '10px auto 10px ',
                color: 'var(--purple)',
                backgroundColor: 'white',
                fontWeight: 'bold',
                width: '40%',
                fontSize: '1.5vw'
            },

        }

    },
    ingredients: {

        recipeSort: {
            border: '1px solid var(--lightPurple)',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            width: '80%',
            margin: '50px auto 10px',
            padding: '15px',
            backgroundColor: 'white',
            textShadow: '1px 1px var(--purple)',
        },
        recipeSortLegend: {
            fontSize: '3.25vw',
            color: 'var(--purple)',
            fontWeight: 'bolder',
            textShadow: '1px 1px white',
            textTransform: 'uppercase'
        },

        ingredientsList: {
            border: '1px solid white',
            margin: '50px auto 50px',
            padding: '20px',
            width: '80%',
            backgroundColor: 'var(--purple)',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
            // backgroundAttachment: 'fixed',
            backgroundSize: '100%'

        },
        recipeSortLabel: {
            color: 'var(--purple)',
            textShadow: 'none',
            fontSize: '3vw',
            marginTop: '5PX'
        },
        recipeSortSelect: {
            padding: '10px',
            margin: '5px',
            width: 'fit-content',
            height: '20%',
            fontSize: '3vw',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            border: '1px solid var(--purple)',
            color: 'white',
            textShadow: '.5px .5px var(--purple)',

        },

        ingredientDisplayFieldset: {
            width: 'fit-content',
            margin: 'auto',
            border: 'none',
            backgroundColor: 'var(--purple)'
        },
        ingredientsDisplay: {
            padding: '5px'
        },
        recipeSortOption: {
            fontSize: '3vw',
            padding: '1px',
            color: 'white'

        },
        ingredientLabel: {
            fontSize: '3vw',
            height: '10px',
            padding: '5px',
            display: 'flex',
            color: 'white',
            textShadow: '1px 1px var(--purple)',
            fontWeight: 'bold',
            alignItems: 'center'
        },
        ingredientCheckbox: {
            height: '10px',
            padding: '5px',
            margin: '0',
            border: '1px solid var(--purple)'

        },
        sortButton: {
            backgroundColor: 'var(--purple)',
            color: 'white',
            fontWeight: 'bold',
            padding: '5px',
            fontSize: '2.75vw',
            margin: 'auto',
            width: '50%'
        },
        H3: {
            fontSize: '3.25vw',
            color: 'white',
            textShadow: '1px 1px var(--purple)',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
        tablet: {
            H3: {
                fontSize: '2.25vw',
                color: 'white',
                textShadow: '1px 1px var(--purple)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
            recipeSort: {
                border: '1px solid var(--lightPurple)',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: '60%',
                margin: '50px auto 10px',
                padding: '15px',
                backgroundColor: 'white',
                textShadow: '1px 1px var(--purple)',
            },
            recipeSortSelect: {
                padding: '10px',
                margin: '5px',
                width: '30%',
                height: '40%',
                fontSize: '2vw',
                fontWeight: 'bold',
                backgroundColor: 'var(--purple)',
                border: '1px solid var(--purple)',
                color: 'white',
                textShadow: '.5px .5px var(--purple)',
            },
            recipeSortLegend: {
                fontSize: '2vw',
                color: 'var(--purple)',
                fontWeight: 'bolder',
                textShadow: '1px 1px white',
                textTransform: 'uppercase'
            },
            recipeSortLabel: {
                color: 'var(--purple)',
                textShadow: 'none',
                fontSize: '2vw',
                marginTop: '5PX'
            },
            recipeSortOption: {
                fontSize: '2vw',
                padding: '1px',
                color: 'white'

            },
            ingredientDisplayFieldset: {
                width: 'fit-content',
                margin: '5px auto auto',
                padding: '15px',
                border: 'none',
                backgroundColor: 'var(--purple)'
            },
            ingredientCheckbox: {
                height: '15px',
                margin: '0',
                border: '1px solid var(--purple)'

            },
            ingredientsList: {
                border: '1px solid white',
                margin: '50px auto 50px',
                padding: '20px',
                width: '60%',
                backgroundColor: 'var(--purple)',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
                backgroundSize: '100%'
            },

            ingredientLabel: {
                fontSize: '2vw',
                height: '10px',
                padding: '15px',
                display: 'flex',
                color: 'white',
                textShadow: '1px 1px var(--purple)',
                fontWeight: 'bold',
                alignItems: 'center'
            },

            sortButton: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                fontWeight: 'bold',
                padding: '5px',
                fontSize: '2vw',
                margin: 'auto',
                width: 'fit-content'
            },
        },
        laptop: {
            H3: {
                fontSize: '1.75vw',
                color: 'white',
                textShadow: '1px 1px var(--purple)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
            recipeSort: {
                border: '1px solid var(--lightPurple)',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: '100%',
                margin: '0 0 20px 0',
                padding: '15px',
                backgroundColor: 'white',
                textShadow: '1px 1px var(--purple)',
            },
            recipeSortSelect: {
                padding: '10px',
                margin: '5px',
                width: 'fit-content',
                height: '70px',
                fontSize: '1vw',
                fontWeight: 'bold',
                backgroundColor: 'var(--purple)',
                border: '1px solid var(--purple)',
                color: 'white',
                textShadow: '.5px .5px var(--purple)',
            },
            recipeSortLegend: {
                fontSize: '2vw',
                color: 'var(--purple)',
                fontWeight: 'bolder',
                textShadow: '1px 1px white',
                textTransform: 'uppercase'
            },
            recipeSortLabel: {
                color: 'var(--purple)',
                textShadow: 'none',
                fontSize: '1.5vw',
                marginTop: '5PX'
            },
            recipeSortOption: {
                fontSize: '1vw',
                padding: '1px',
                color: 'white'

            },
            ingredientDisplayFieldset: {
                width: 'fit-content',
                margin: 'auto',
                padding: '25px',
                border: 'none',
                backgroundColor: 'var(--purple)'
            },
            ingredientsList: {
                border: '1px solid white',
                margin: 'auto',
                padding: '20px',
                width: '100%',
                backgroundColor: 'var(--purple)',
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100%'

            },

            ingredientCheckbox: {
                height: '20px',
                padding: '5px',
                margin: '0',
                border: '1px solid var(--purple)'

            },
            ingredientLabel: {
                fontSize: '1.5vw',
                height: '15px',
                padding: '15px',
                display: 'flex',
                color: 'white',
                textShadow: '1px 1px var(--purple)',
                fontWeight: 'bold',
                alignItems: 'center'
            },
            sortButton: {
                backgroundColor: 'var(--purple)',
                color: 'white',
                fontWeight: 'bold',
                padding: '5px',
                fontSize: '1vw',
                margin: 'auto',
                width: '50%'
            },
        },

    }

}

export default hpStyles
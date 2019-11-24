import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
const ingredientsStyles = {
    recipeSort: {
        border: '1px solid var(--lightPurple)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '80%',
        margin: '10px auto 25px',
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
        margin: 'auto',
        padding: '20px',
        width: '80%',
        backgroundColor: 'var(--purple)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center',
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
        height: '50px',
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
        fontSize: '2.75vw'
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
            fontSize: '2.5vw',
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
            margin: '10px auto 25px',
            padding: '15px',
            backgroundColor: 'white',
            textShadow: '1px 1px var(--purple)',
        },
        recipeSortSelect: {
            padding: '10px',
            margin: '5px',
            width: '30%',
            height: '50px',
            fontSize: '2vw',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            border: '1px solid var(--purple)',
            color: 'white',
            textShadow: '.5px .5px var(--purple)',
        },
        recipeSortLegend: {
            fontSize: '2.5vw',
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
            margin: 'auto',
            padding: '20px',
            width: '60%',
            backgroundColor: 'var(--purple)',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
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
            width: '40%'
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
            width: '40%',
            margin: '10px auto 25px',
            padding: '15px',
            backgroundColor: 'white',
            textShadow: '1px 1px var(--purple)',
        },
        recipeSortSelect: {
            padding: '10px',
            margin: '5px',
            width: '35%',
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
            width: '40%',
            backgroundColor: 'var(--purple)',
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
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
            width: '40%'
        },
    }
}
export default ingredientsStyles
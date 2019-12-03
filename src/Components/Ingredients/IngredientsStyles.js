import backgroundImage from '../../images/purpleWhiteLeaves.jpg'
const ingredientsStyles = {
    recipeSort: {
        border: '1px solid var(--lightPurple)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '90%',
        margin: '10px auto 25px',
        padding: '15px',
        backgroundColor: 'white',
        textShadow: '1px 1px var(--purple)',
    },
    recipeSortLegend: {
        fontSize: '18px',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        textShadow: '1px 1px white',
        textTransform: 'uppercase'
    },

    ingredientsList: {
        border: '1px solid white',
        margin: 'auto',
        padding: '20px',
        width: '90%',
        backgroundColor: 'var(--purple)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center',
        backgroundSize: '100%'

    },
    recipeSortLabel: {
        color: 'var(--purple)',
        textShadow: 'none',
        fontSize: '18px',
        marginTop: '5px'
    },
    recipeSortSelect: {
        padding: '10px',
        margin: '5px',
        width: '60%',
        height: '60px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: 'var(--purple)',
        border: '1px solid var(--purple)',
        color: 'white',
        textShadow: '.5px .5px var(--purple)',
    },
    recipeSortOption: {
        fontSize: '18px',
        padding: '1px',
        color: 'white'

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

    ingredientLabel: {
        fontSize: '18px',
        height: '10px',
        padding: '10px',
        display: 'flex',
        color: 'white',
        textShadow: '1px 1px var(--purple)',
        fontWeight: 'bold',
        alignItems: 'center',
    },
    ingredientCheckbox: {
        height: '15px',
        padding: '5px',
        margin: '10px',
        border: '1px solid var(--purple)'

    },
    sortButton: {
        backgroundColor: 'var(--purple)',
        color: 'white',
        width: '60%',
        fontWeight: 'bold',
        padding: '5px',
        fontSize: '16px',
        margin: 'auto'
    },
    H3: {
        fontSize: '18px',
        textAlign: 'center',
        color: 'white',
        textShadow: '1px 1px var(--purple)',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textDecoration: 'underline'
    },
    tablet: {
        H3: {
            fontSize: '22px',
            color: 'white',
            textShadow: '1px 1px var(--purple)',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            textDecoration: 'underline'
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
            width: '45%',
            height: '70px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            border: '1px solid var(--purple)',
            color: 'white',
            textShadow: '.5px .5px var(--purple)',
        },
        recipeSortOption: {
            fontSize: '20px',
            padding: '1px',
            color: 'white'

        },
        recipeSortLegend: {
            fontSize: '20px',
            color: 'var(--purple)',
            fontWeight: 'bolder',
            textShadow: '1px 1px white',
            textTransform: 'uppercase'
        },
        recipeSortLabel: {
            color: 'var(--purple)',
            textShadow: 'none',
            fontSize: '20px',
            margin: '5px'
        },

        ingredientDisplayFieldset: {
            width: 'fit-content',
            margin: '5px auto auto',
            padding: '15px',
            border: 'none',
            backgroundColor: 'var(--purple)'
        },
        ingredientCheckbox: {
            alignItems: 'center',
            height: '20px',
            margin: '0 10px 0 0',
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
            margin: '5px',
            fontSize: '20px',
            lineHeight: '20px',
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
            fontSize: '18px',
            margin: 'auto',
            width: '45%'
        },
    },
    laptop: {
        H3: {
            fontSize: '24px',
            color: 'white',
            textShadow: '1px 1px var(--purple)',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            textDecoration: 'underline'
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
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            border: '1px solid var(--purple)',
            color: 'white',
            textShadow: '.5px .5px var(--purple)',
        },
        recipeSortOption: {
            fontSize: '20px',
            padding: '1px',
            color: 'white'
        },
        recipeSortLegend: {
            fontSize: '24px',
            color: 'var(--purple)',
            fontWeight: 'bolder',
            textShadow: '1px 1px white',
            textTransform: 'uppercase'
        },
        recipeSortLabel: {
            color: 'var(--purple)',
            textShadow: 'none',
            fontSize: '20px',
            marginTop: '5px'
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
            height: '22px',
            padding: '5px',
            margin: '0 10px 0 0',
            border: '1px solid var(--purple)'

        },
        ingredientLabel: {
            fontSize: '20px',
            lineHeight: '24px',
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
            fontSize: '18px',
            margin: 'auto',
            width: '35%'
        },
    }
}
export default ingredientsStyles
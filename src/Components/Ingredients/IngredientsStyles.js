import backgroundImage from '../../images/purpleWhiteLeaves.png'
const ingredientsStyles = {
    recipeSort: {
        border: '1px solid var(--lightPurple)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '60%',
        margin: '10px auto 15px',
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
        width: '70%',
        backgroundColor: 'var(--lightPurple)',
        backgroundImage: `url(${backgroundImage})`,
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
        padding: '5px',
        border: '1px solid white',
        backgroundColor: 'var(--purple)'
    },
    recipeSortOption: {
        fontSize: '3vw',
        padding: '1px',
        color: 'white'

    },
    ingredientsDisplay: {
        padding: '5px'
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
        ingredientCheckbox: {
            height: '15px',
            padding: '5px',
            margin: '0',
            border: '1px solid var(--purple)'

        },
        ingredientsList: {
            border: '1px solid white',
            margin: 'auto',
            padding: '25px',
            width: '50%',
            backgroundColor: 'var(--lightPurple)',
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: '100%'
        },
        recipeSortSelect: {
            padding: '10px',
            margin: '5px',
            width: '30%',
            height: 'fit-content',
            fontSize: '1.5vw',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            border: '1px solid var(--purple)',
            color: 'white',
            textShadow: '.5px .5px var(--purple)',
        },
    },
    laptop: {
        ingredientCheckbox: {
            height: '20px',
            padding: '5px',
            margin: '0',
            border: '1px solid var(--purple)'

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
        recipeSortSelect: {
            padding: '10px',
            margin: '5px',
            width: 'fit-content',
            height: 'fit-content',
            fontSize: '1.5vw',
            fontWeight: 'bold',
            backgroundColor: 'var(--purple)',
            border: '1px solid var(--purple)',
            color: 'white',
            textShadow: '.5px .5px var(--purple)',
        },
    }
}
export default ingredientsStyles
import backgroundImage from '../../images/purpleWhiteLeaves.png'
const ingredientsStyles = {
    recipeSort: {
        border: '1px solid var(--lightPurple)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: 'fit-content',
        margin: '10px auto 15px',
        padding: '15px',
        backgroundColor: 'white',
        textShadow: '1px 1px var(--purple)',


    },

    recipeSortLegend: {
        fontSize: '1.75vw',
        color: 'var(--purple)',
        fontWeight: 'bolder',
        textShadow: '1px 1px white',
        textTransform: 'uppercase'
    },

    ingredientsList: {
        border: '1px solid white',
        margin: 'auto',
        padding: '25px',
        width: '60%',
        backgroundColor: 'var(--lightPurple)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: '100%'

    },
    ingredientsListTablet: {
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
        width: 'fit-content',
        height: '45px',
        fontSize: '1.5vw',
        fontWeight: 'bold',
        backgroundColor: 'var(--purple)',
        border: '1px solid var(--purple)',
        color: 'white',
        textShadow: '1px 1px var(--purple)',
    },

    ingredientDisplayFieldset: {
        width: 'fit-content',
        margin: 'auto',
        padding: '5px',
        border: '1px solid white',
        backgroundColor: 'var(--purple)'
    },
    recipeSortOption: {
        fontSize: '1.5vw',
        padding: '1px',
        color: 'white'

    },
    ingredientsDisplay: {
        padding: '20px'
    },
    ingredientLabel: {
        fontSize: '1.5vw',
        height: '10px',
        padding: '5px',
        display: 'flex',
        color: 'white',
        textShadow: '1px 1px var(--purple)',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    ingredientLabelLaptop: {
        fontSize: '1.5vw',
        height: '10px',
        padding: '15px',
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
    ingredientCheckboxTablet: {
        height: '15px',
        padding: '5px',
        margin: '0',
        border: '1px solid var(--purple)'

    },
    ingredientCheckboxLaptop: {
        height: '20px',
        padding: '5px',
        margin: '0',
        border: '1px solid var(--purple)'

    },
    sortButton: {
        backgroundColor: 'var(--purple)',
        color: 'white',
        fontWeight: 'bold',
        padding: '5px',
    },
    H3: {
        fontSize: '1.5vw',
        color: 'white',
        textShadow: '1px 1px var(--purple)',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
}
export default ingredientsStyles
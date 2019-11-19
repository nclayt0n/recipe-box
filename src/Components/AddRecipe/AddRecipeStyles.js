import backgroundImage from '../../images/purplelavleaves.jpg'
const addRStyles = {
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
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'top',
            border: '2px solid var(--purple)',
            fontWeight: 'bold'

        },
        select: {
            backgroundColor: 'white',
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        form: {
            border: '1px solid yellow',
            width: 'fit-content',
            margin: 'auto',

        },
        fieldset: {
            border: 'none'
        },
        label: {
            color: 'var(--purple)',
            fontWeight: 'bold'
        },
        button: {
            backgroundColor: 'var(--purple)',
            color: 'white'
        },
        ingredientInput: {
            width: '100px'
        }
    },


}


export default addRStyles
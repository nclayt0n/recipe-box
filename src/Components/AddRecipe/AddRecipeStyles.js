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
            backgroundImage: `url(${backgroundImage})`,
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
}


export default addRStyles
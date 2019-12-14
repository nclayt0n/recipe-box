import backgroundImage from '../../images/purplelavleaves.jpg'
const addRStyles = {
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
            margin: '5px',
            width: '65%',
            padding: '5px'
        },
        option: {
            color: 'var(--purple)',
            fontSize: '14px',
            padding: '5px'
        },
        form: {
            border: '2px solid var(--purple)',
            width: '85%',
            margin: 'auto auto 10px',
            padding: '5px'

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
                border: '2px solid var(--purple)',
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
                width: '160px',
                padding: '5px',
                fontSize: '16px',
                color: 'var(--purple)',
                border: '1px solid var(--purple)',
            },
            input: {
                width: '180px',
                padding: '5px',
                fontSize: '16px',
                color: 'var(--purple)',
                margin: '5px',
                border: '1px solid var(--purple)',

            },
            textarea: {
                fontSize: '16px',
                minWidth: '80%',
                minHeight: '75px',
                maxWidth: '125px',
                maxHeight: '150px',
                color: 'var(--purple)',
                border: '1px solid var(--purple)',
            },
        },
        laptop: {
            div: {
                width: '850px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '50px auto 50px',
                padding: '50px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundColor: 'white',
                backgroundPosition: 'top',
                border: '2px solid var(--purple)',
                fontWeight: 'bold',
            },
            select: {
                backgroundColor: 'white',
                color: 'var(--purple)',
                fontWeight: 'bold',
                fontSize: '18px',
                border: '1px solid var(--purple)',
                margin: '5px'

            },
            option: {
                color: 'var(--purple)',
                fontSize: '18px',
            },
            form: {
                border: '2px solid var(--purple)',
                backgroundColor: 'white',
                width: '275px',
                margin: 'auto',
                padding: '15px',
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
                border: '1px solid var(--purple)',
                margin: '5px'
            },
            input: {
                width: '175px',
                fontSize: '18px',
                color: 'var(--purple)',
                border: '1px solid var(--purple)',
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
                border: '1px solid var(--purple)',
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
}


export default addRStyles
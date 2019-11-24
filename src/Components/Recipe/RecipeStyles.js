import backgroundImage from '../../images/purpleLpurpleleaves.jpg'
const recipeStyles = {
    mobile: {
        recipe: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            fontSize: '3vw',
        },

        recipeItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'center',
            padding: '15px',
            margin: '10px',
            border: '1px solid var(--lightPurple)'

        },

        h3: {
            fontSize: '3.25vw',
            margin: 'auto',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '1px 1px rgba(138, 100, 163, 0.733)',
            textTransform: 'uppercase'
        },
        recipeUl: {
            textAlign: 'center',
            margin: 'auto auto 10px',
            padding: '10px',
            width: '80%',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            backgroundColor: 'var(--lightPurple)',
            fontSize: '3vw',
        },

        recipeLi: {
            letterSpacing: '1px',
            margin: 'auto',
            padding: '15 px',
            width: '70%',
            textAlign: 'center',
            listStyle: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)'
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',
            flexDirection: 'column'
        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px auto 5px',
            fontSize: '2.5vw',
            border: '2px solid var(--lightPurple)',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)'
        },
        folderButton: {
            width: 'fit-content',
            margin: 'auto'

        }
    },
    tablet: {
        recipe: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            padding: '10px',
            fontSize: '1.75vw',

        },

        recipeItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            padding: '15px',
            margin: '10px',
            border: '1px solid var(--lightPurple)'

        },

        h3: {
            fontSize: '2vw',
            margin: 'auto auto 20px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '1px 1px rgba(138, 100, 163, 0.733)',
            textTransform: 'uppercase'
        },
        recipeUl: {
            textAlign: 'center',
            width: '60%',
            margin: 'auto auto 15px',
            padding: '15px',
            backgroundColor: 'var(--lightPurple)',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            textShadow: '.5px .5px rgba(138, 100, 163, 0.733)',
        },

        recipeLi: {
            letterSpacing: '2px',
            width: '80%',
            margin: 'auto',
            padding: '10px',
            textAlign: 'center',
            listStyle: 'none',
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)'
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',
            fontSize: '1.75vw',

        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--purple)',
            border: '2px solid var(--purple)'
        },
        folderButton: {
            width: 'fit-content',
            fontSize: '1.75vw',

        }
    },
    laptop: {
        recipe: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '10px',
            fontSize: '1vw',

        },

        recipeItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            padding: '15px',
            margin: '10px',
            border: '1px solid var(--lightPurple)'

        },

        h3: {
            fontSize: '1.25vw',
            margin: 'auto auto 20px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '1px 1px rgba(138, 100, 163, 0.733)',
            textTransform: 'uppercase'
        },
        recipeUl: {
            textAlign: 'center',
            width: '60%',
            margin: 'auto auto 15px',
            padding: '15px',
            backgroundColor: 'var(--lightPurple)',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            textShadow: '.5px .5px rgba(138, 100, 163, 0.733)',
        },

        recipeLi: {
            letterSpacing: '2 px',
            width: '60%',
            margin: 'auto',
            padding: '10px',
            textAlign: 'center',
            listStyle: 'none',
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)'
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',

        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px',
            fontSize: '1vw',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            border: '2px solid var(--darkPurple)'
        },
        folderButton: {
            width: 'fit-content',

        }
    }

}
export default recipeStyles
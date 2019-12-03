import backgroundImage from '../../images/purpleLpurpleleaves.jpg'
const recipeStyles = {
    mobile: {
        recipe: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            fontSize: '16px',
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
            fontSize: '20px',
            margin: '5px auto',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '.5px .5px var(--darkPurple)',
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
            fontSize: '18px',
        },

        recipeLi: {
            letterSpacing: '1px',
            margin: '0 auto',
            padding: '10px',
            width: '70%',
            textAlign: 'center',
            listStyle: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)',
            fontSize: '16px',
        },
        recipeLiInstructions: {
            letterSpacing: '1px',
            margin: '0 auto',
            padding: '10px',
            width: '70%',
            textAlign: 'left',
            listStyle: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)',
            fontSize: '14px',
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',
            flexDirection: 'column',
            fontSize: '14px',
        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px auto 5px',
            fontSize: '14px',
            border: '2px solid var(--lightPurple)',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)'
        },
        recipeButtonA: {
            backgroundColor: 'white',
            color: 'var(--darkPurple)',
            fontSize: '14px',
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
            fontSize: '18px'
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
            fontSize: '20px',
            margin: 'auto auto 20px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            width: 'fit-content',
            textShadow: '1px 1px rgba(138, 100, 163, 0.733)',
            textTransform: 'uppercase'
        },
        recipeUl: {
            fontSize: '18px',
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
            fontSize: '16px',
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
        recipeLiInstructions: {
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
            fontSize: '16px',
        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            border: '2px solid var(--purple)',
            fontSize: '16px',
        },
        recipeButtonA: {
            backgroundColor: 'white',
            color: 'var(--darkPurple)',
            fontSize: '16px',
        },
        folderButton: {
            width: 'fit-content',
            fontSize: '16px',
        }
    },
    laptop: {
        recipe: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '10px',
            fontSize: '18px',

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
            fontSize: '22px',
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
            fontSize: '22px',
            textShadow: '.5px .5px rgba(138, 100, 163, 0.733)',
        },

        recipeLi: {
            letterSpacing: '2px',
            width: '60%',
            margin: 'auto',
            padding: '10px',
            textAlign: 'center',
            listStyle: 'none',
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)',
            fontSize: '20px'
        },
        recipeLiInstructions: {
            letterSpacing: '2px',
            width: '60%',
            margin: 'auto',
            padding: '10px',
            textAlign: 'center',
            listStyle: 'none',
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'var(--darkPurple)',
            fontSize: '20px'
        },
        buttons: {
            display: 'flex',
            width: 'fit-content',
            margin: 'auto',

        },
        recipeButton: {
            width: 'fit-content',
            margin: '5px',
            fontSize: '18px',
            backgroundColor: 'white',
            padding: '5px',
            fontWeight: 'bolder',
            color: 'var(--darkPurple)',
            border: '2px solid var(--darkPurple)'
        },
        recipeButtonA: {
            backgroundColor: 'white',
            color: 'var(--darkPurple)',
            fontSize: '18px',
        },
        folderButton: {
            width: 'fit-content',

        }
    }

}
export default recipeStyles
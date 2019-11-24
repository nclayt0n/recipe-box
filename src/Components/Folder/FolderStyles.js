import backgroundImage from '../../images/purpleLpurpleleaves.jpg'

const folderStyles = {
    folder: {
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',

    },

    folderItems: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundColor: 'var(--purple)',
        backgroundPosition: 'center',
        border: '1px solid #8a64a3',
    },

    folderRecipeList: {
        padding: '10px'
    },

    folderRecipeListUl: {
        margin: 'auto',
        textAlign: 'center'
    },

    folderRecipeListLi: {
        width: '60%',
        listStyle: 'none',
        padding: '5px',
        margin: 'auto',
        textAlign: 'center'
    },

    folderRecipeListLiA: {
        listStyle: 'none',
        textAlign: 'center',
        padding: '0px',
        color: 'white',
        textShadow: '.5px .5px #8a64a3',
        fontSize: '3vw'
    },

    buttonBox: {
        display: 'flex',
        margin: 'auto',
        padding: '15px',
        width: 'fit-content'
    },

    buttonBoxButton: {
        fontSize: '2.5vw',
        margin: '5px',
        padding: '5px',
        color: 'var(--purple)',
        border: '1px solid var(--purple)',
        fontWeight: 'bolder'
    },

    buttonBoxButtonA: {
        color: 'var(--purple)',
        fontWeight: 'bolder'
    },

    buttonBoxMobile: {
        display: 'flex',
        margin: 'auto',
        padding: '15px',
        width: 'fit-content',
        flexDirection: 'column'
    },

    buttonBoxMobileButton: {
        fontSize: '2.5vw',
        color: 'var(--purple)',
        border: '1px solid var(--purple)',
        fontWeight: 'bolder'
    },

    buttonBoxMobileButtonA: {
        color: 'var(--purple)',
        fontWeight: 'bolder'
    },

    h: {
        color: 'white',
        textAlign: 'center',
        textShadow: '1px 1px #8a64a3',
        fontSize: '3.25vw'
    },
    tablet: {
        folder: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
        },
        folderRecipeListLi: {
            width: '60%',
            listStyle: 'none',
            padding: '5px',
            margin: 'auto',
            textAlign: 'center'
        },
        folderRecipeListLiA: {
            listStyle: 'none',
            textAlign: 'center',
            padding: '0px',
            color: 'white',
            textShadow: '.5px .5px #8a64a3',
            fontSize: '2vw'
        },
        h: {
            color: 'white',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '2.25vw'
        },
        folderItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'center',
            border: '1px solid #8a64a3',
        },

        folderRecipeList: {
            padding: '10px'
        },

        folderRecipeListUl: {
            margin: 'auto',
            textAlign: 'center'
        },

        buttonBox: {
            display: 'flex',
            margin: 'auto',
            padding: '15px',
            width: 'fit-content'
        },

        buttonBoxButton: {
            fontSize: '2vw',
            margin: '5px',
            padding: '5px',
            color: 'var(--purple)',
            border: '1px solid var(--purple)',
            fontWeight: 'bolder'
        },

        buttonBoxButtonA: {
            color: 'var(--purple)',
            fontWeight: 'bolder'
        },
    },
    laptop: {
        folder: {
            margin: '50px auto',
            display: 'flex',
            flexDirection: 'column',
            width: '45%',
        },
        folderRecipeListLi: {
            width: '60%',
            listStyle: 'none',
            padding: '5px',
            margin: 'auto',
            textAlign: 'center'
        },
        folderRecipeListLiA: {
            listStyle: 'none',
            textAlign: 'center',
            padding: '0px',
            color: 'white',
            textShadow: '.5px .5px #8a64a3',
            fontSize: '1vw'
        },
        h: {
            color: 'white',
            textAlign: 'center',
            textShadow: '1px 1px #8a64a3',
            fontSize: '1.5vw'
        },
        folderItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'center',
            border: '1px solid #8a64a3',
        },

        folderRecipeList: {
            padding: '10px'
        },

        folderRecipeListUl: {
            margin: 'auto',
            textAlign: 'center'
        },

        buttonBox: {
            display: 'flex',
            margin: 'auto',
            padding: '15px',
            width: 'fit-content'
        },

        buttonBoxButton: {
            fontSize: '1vw',
            margin: '5px',
            padding: '5px',
            color: 'var(--purple)',
            border: '1px solid var(--purple)',
            fontWeight: 'bolder'
        },

        buttonBoxButtonA: {
            color: 'var(--purple)',
            fontWeight: 'bolder'
        },
    }
}
export default folderStyles
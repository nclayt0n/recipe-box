import backgroundImage from '../../images/purpleLpurpleleaves.jpg'

const folderStyles = {
    folder: {
        margin: '50px auto 50px',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',

    },

    folderItems: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100%',
        backgroundColor: 'var(--purple)',
        backgroundPosition: 'center',
        border: '1px solid #8a64a3',
    },

    folderRecipeList: {
        padding: '10px',
        color: 'white',
        textShadow: '1px 1px var(--darkPurple)',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 'bolder'
    },

    folderRecipeListUl: {
        margin: 'auto',
        textAlign: 'center',

    },

    folderRecipeListLi: {
        width: '60%',
        listStyle: 'none',
        padding: '5px',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'normal'
    },

    folderRecipeListLiA: {
        listStyle: 'none',
        textAlign: 'center',
        padding: '0px',
        color: 'white',
        textShadow: '.5px .5px #8a64a3',
        fontSize: '16px'
    },

    buttonBox: {
        display: 'flex',
        margin: 'auto',
        padding: '15px',
        width: 'fit-content'
    },
    buttonBoxMobile: {
        display: 'flex',
        margin: 'auto',
        padding: '15px',
        width: 'fit-content',
        flexDirection: 'column'
    },

    buttonBoxMobileButton: {
        fontSize: '14px',
        color: 'var(--purple)',
        border: '1px solid var(--purple)',
        fontWeight: 'bold'
    },

    buttonBoxMobileButtonA: {
        color: 'var(--purple)',
        fontWeight: 'bolder',
        fontSize: '14px'
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
            textAlign: 'center',
            fontWeight: 'normal'
        },
        folderRecipeListLiA: {
            listStyle: 'none',
            textAlign: 'center',
            padding: '0px',
            color: 'white',
            textShadow: '.5px .5px #8a64a3',
            fontSize: '16px'
        },

        folderItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'center',
            border: '1px solid #8a64a3',
        },

        folderRecipeList: {
            padding: '10px',
            color: 'white',
            textShadow: '1px 1px var(--darkPurple)',
            fontSize: '18px',
            textAlign: 'center',
            fontWeight: 'bolder'
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
            fontSize: '14px',
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
            textAlign: 'center',
            fontWeight: 'normal'
        },
        folderRecipeListLiA: {
            listStyle: 'none',
            textAlign: 'center',
            padding: '0px',
            color: 'white',
            textShadow: '.5px .5px #8a64a3',
            fontSize: '18px'
        },
        folderItems: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100%',
            backgroundColor: 'var(--purple)',
            backgroundPosition: 'center',
            border: '1px solid #8a64a3',
        },

        folderRecipeList: {
            padding: '10px',
            color: 'white',
            textShadow: '1px 1px var(--darkPurple)',
            fontSize: '24px',
            textAlign: 'center',
            fontWeight: 'bolder'
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
            fontSize: '16px',
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
};
export default folderStyles;
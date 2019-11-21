import backgroundImage from '../../images/purpleLpurpleleaves.jpg'

const folderStyles = {
    folder: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        fontSize: '2.5vw',
        width: '50%'
    },

    folderItems: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
        fontSize: '2vw'
    },

    buttonBox: {
        display: 'flex',
        margin: 'auto',
        padding: '15px',
        width: 'fit-content'
    },

    buttonBoxButton: {
        fontSize: '1.25vw',
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
        fontSize: '1.5vw',
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
        fontSize: '3vw'
    }
}
export default folderStyles
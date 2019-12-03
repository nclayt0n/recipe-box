import navImage from './NavImage/Hamburger_icon.png'
const navStyles = {
    hidden: {
        main: {
            width: 'fit-content',
            height: '50px',
            backgroundColor: 'var(--purple)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000,
            position: 'fixed',
            top: '30px'
        },
        toggleBtn: {
            margin: 0,
            width: '50px',
            height: '100%',
            backgroundImage: `url(${navImage})`,
            backgroundColor: 'var(--purple)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%',
            backgroundPosition: 'center',
            border: 'none',
            cursor: 'pointer'
        },
        mainUl: {
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: '15px'
        },
        mainUlLi: {
            listStyle: 'none',
            lineHeight: '60px'
        },
        mainUlLiA: {
            display: 'block',
            height: '100%',
            padding: '0 15px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            fontFamily: 'arial',
            fontSize: '16px',
            cursor: 'pointer'

        },
        sideBar: {
            position: 'fixed',
            left: '0',
            top: '80px',
            width: '0',
            padding: '0 5px',
            height: '0',
            backgroundColor: 'var(--purple)',
            zIndex: 1000,
            transition: 'all 0.3s ease-in-out'
        },
        sideBarUl: {
            paddingTop: '15px',
            overflow: 'hidden',
            visibility: 'hidden'
        },
        sideBarUlLi: {
            lineHeight: '60px',
            listStyle: 'none'
        },
        sideBarUlLiA: {
            display: 'none',
            height: '60px',
            padding: '0 10px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            fontFamily: 'arial',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer'
        },
        tablet: {
            toggleBtn: {
                margin: 0,
                width: '60px',
                height: '100%',
                backgroundImage: `url(${navImage})`,
                backgroundColor: 'var(--purple)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '40%',
                backgroundPosition: 'center',
                border: 'none',
                cursor: 'pointer'
            },
            mainUlLiA: {
                display: 'block',
                height: '100%',
                padding: '0 15px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'arial',
                fontSize: '20px',
                cursor: 'pointer'

            },
            sideBarUlLiA: {
                display: 'none',
                height: '60px',
                padding: '0 10px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                color: 'white',
                fontFamily: 'arial',
                fontSize: '20px',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer'
            }
        },
        laptop: {
            toggleBtn: {
                margin: 0,
                width: '70px',
                height: '100%',
                backgroundImage: `url(${navImage})`,
                backgroundColor: 'var(--purple)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '40%',
                backgroundPosition: 'center',
                border: 'none',
                cursor: 'pointer'
            },
            mainUlLiA: {
                display: 'block',
                height: '100%',
                padding: '0 15px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'arial',
                fontSize: '22px',
                cursor: 'pointer'

            },
            sideBarUlLiA: {
                display: 'none',
                height: '60px',
                padding: '0 10px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                color: 'white',
                fontFamily: 'arial',
                fontSize: '22px',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer'
            }
        },
    },
    visible: {
        main: {
            width: 'fit-content',
            height: '50px',
            backgroundColor: 'var(--purple)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000,
            position: 'fixed',
            top: '30px'
        },
        toggleBtn: {
            margin: 0,
            width: '50px',
            height: '100%',
            backgroundImage: `url(${navImage})`,
            backgroundColor: 'var(--purple)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%',
            backgroundPosition: 'center',
            border: 'none',
            cursor: 'pointer',
        },
        mainUl: {
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: '15px'
        },
        mainUlLi: {
            listStyle: 'none',
            lineHeight: '60px'
        },
        mainUlLiA: {
            display: 'block',
            height: '100%',
            padding: '0 10px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#111',
            fontFamily: 'arial',
            fontSize: '16px',
            cursor: 'pointer'
        },
        sideBar: {
            margin: 0,
            position: 'fixed',
            left: 0,
            top: '80px',
            width: 'fit-content',
            padding: '0 5px',
            height: '100%',
            backgroundColor: '#8A64A3',
            zIndex: 1000,
            transition: 'all 0.3s ease-in-out'

        },
        sideBarUl: {
            paddingTop: '15px',
            overflow: 'hidden',
            visibility: 'visible'
        },
        sideBarUlLi: { lineHeight: '60px', listStyle: 'none' },
        sideBarUlLiA: {
            height: '60px',
            padding: '0 10px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            fontWeight: 'bolder',
            fontFamily: 'arial',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            transition: 'all .3s ease-in-out',
            cursor: 'pointer'
        },
        tablet: {
            toggleBtn: {
                margin: 0,
                width: '60px',
                height: '100%',
                backgroundImage: `url(${navImage})`,
                backgroundColor: 'var(--purple)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '40%',
                backgroundPosition: 'center',
                border: 'none',
                cursor: 'pointer'
            },
            mainUlLiA: {
                display: 'block',
                height: '100%',
                padding: '0 10px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#111',
                fontFamily: 'arial',
                fontSize: '20px',
                cursor: 'pointer'
            },
            sideBarUlLiA: {
                height: '60px',
                padding: '0 10px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                color: 'white',
                fontWeight: 'bolder',
                fontFamily: 'arial',
                fontSize: '20px',
                whiteSpace: 'nowrap',
                transition: 'all .3s ease-in-out',
                cursor: 'pointer'
            },
        },
        laptop: {
            toggleBtn: {
                margin: 0,
                width: '70px',
                height: '100%',
                backgroundImage: `url(${navImage})`,
                backgroundColor: 'var(--purple)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '40%',
                backgroundPosition: 'center',
                border: 'none',
                cursor: 'pointer'
            },
            mainUlLiA: {
                display: 'block',
                height: '100%',
                padding: '0 10px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#111',
                fontFamily: 'arial',
                fontSize: '22px',
                cursor: 'pointer'
            },
            sideBarUlLiA: {
                height: '60px',
                padding: '0 10px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                color: 'white',
                fontWeight: 'bolder',
                fontFamily: 'arial',
                fontSize: '22px',
                whiteSpace: 'nowrap',
                transition: 'all .3s ease-in-out',
                cursor: 'pointer'
            },
            sideBarUlLi: { lineHeight: '90px', listStyle: 'none' },
        }

    }



}


export default navStyles
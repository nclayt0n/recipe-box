import React from 'react'
import navImage from './NavImage/Hamburger_icon.png'
const navStyles = {
    hidden: {
        main: {
            // margin: 0,
            width: 'fit-content',
            height: '50px',
            backgroundColor: 'var(--purple)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000,
            position: 'fixed',
            top: '50px'
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
            bottom: '0',
            width: '55px',
            padding: '0 5px',
            height: 'calc(108vh - 175px)',
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
        }
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
            top: '50px'
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
            bottom: 0,
            width: '175px',
            padding: '0 5px',
            height: 'calc(108vh - 175px)',
            // backgroundColor: '#38b6ff',
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
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer'
        }

    }
}


export default navStyles
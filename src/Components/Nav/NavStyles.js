import React from 'react'
import navImage from './NavImage/Hamburger_icon.png'
const navStyles = {
    hidden: {
        main: {
            width: '100%',
            height: '70px',
            border: '1px solid black',
            backgroundColor: 'var(--blue)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000
        },
        toggleBtn: {
            margin: 0,
            width: '60px',
            height: '100%',
            backgroundImage: `url(${navImage})`,
            backgroundColor: 'var(--blue)',
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
            color: 'white',
            fontFamily: 'arial',
            fontSize: '16px'
        },
        sideBar: {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '50px',
            padding: '0 5px',
            height: 'calc(100vh - 150px)'
        },
        sideBarUl: {
            paddingTop: '15px',
            overflow: 'hidden',
            visibility: 'hidden'
        },
        sideBarUlLi: { lineHeight: '60px', listStyle: 'none' },
        sideBarUlLiA: {
            display: 'block',
            height: '60px',
            padding: '0 10px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            fontFamily: 'arial',
            fontSize: '16px',
            whiteSpace: 'nowrap'
        }
    },
    visible: {
        main: {
            width: '100%',
            height: '70px',
            border: '1px solid black',
            backgroundColor: 'var(--blue)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000
        },
        toggleBtn: {
            margin: 0,
            width: '60px',
            height: '100%',
            backgroundImage: `url(${navImage})`,
            backgroundColor: 'var(--blue)',
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
            fontSize: '16px'
        },
        sideBar: {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '272px',
            padding: '0 5px',
            height: 'calc(100vh - 150px)'
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
            fontFamily: 'arial',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            visibility: 'visible'
        }

    }
}


export default navStyles
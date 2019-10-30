import React from 'react'
import navImage from './NavImage/Hamburger_icon.png'
const navStyles = {
    hidden: {
        main: {
            // margin: 0,
            width: '100%',
            height: '70px',
            backgroundColor: 'var(--blue)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000,
            // position: 'fixed',
            // top: '90px'
        },
        toggleBtn: {
            margin: 0,
            width: '50px',
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
            height: 'calc(100vh - 175px)',
            backgroundColor: 'black',
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
            width: '100%',
            height: '70px',
            backgroundColor: 'var(--blue)',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 1000,
            // position: 'fixed',
            // top: '90px'
        },
        toggleBtn: {
            margin: 0,
            width: '50px',
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
            height: 'calc(103vh - 175px)',
            backgroundColor: 'black',
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
            color: 'var(--blue)',
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
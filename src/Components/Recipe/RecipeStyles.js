import React from 'react'
import navImage from '../../images/lavleaves.png'
const recipeStyles = {
    mobile: {
        recipe: {
            margin: '10px 15px 15px 75px',
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            fontSize:'4vw'
        },

        recipeItems: {
            backgroundImage: `url(${navImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'white',
            padding: '15px',
            margin: '10px'
        },

        h3: {
            margin: 'auto',
            backgroundColor:'var(--purple)',
            color:'white',
            width:'fit-content',
            textShadow:'1px 1px rgba(138, 100, 163, 0.733)',
        },
        recipeUl: {
            textAlign: 'center',
            margin: '5px',
            padding: '15px',
            // border: '1px solid black',
            fontWeight:'bolder',
            color:'#5E1770'
        },

        recipeLi:{
            letterSpacing: '2 px',
            margin: 'auto',
            padding: '15 px',
            textAlign: 'center',
            listStyle: 'none',
            fontWeight:'normal',
            color:'var(--purple)'
            /* text-decoration: underline; */
        },
        buttons:{
            display:'flex',
            width:'fit-content',
            margin:'auto',
            flexDirection:'column'
        },
        recipeButton:{
            width:'fit-content',
            margin:'auto',
            marginBottom:'5px',
            fontSize:'3vw',
            border:'2px solid var(--purple)',
            backgroundColor:'var(--purple)',
            padding:'5px',
            fontWeight:'bolder',
            color:'white'
        },
        folderButton:{
            width:'fit-content',
            margin:'auto'
            
        }
    },
    laptop: {
        recipe: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
            padding:'10px',
            fontSize:'2vw',
            
        },

        recipeItems: {
            backgroundImage: `url(${navImage})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            backgroundColor: 'white',
            padding: '15px',
            margin: '10px',
            
        },

        h3: {
            fontSize:'2.5vw',
            margin: 'auto auto 20px',
            backgroundColor:'var(--purple)',
            color:'white',
            width:'fit-content',
            textShadow:'1px 1px rgba(138, 100, 163, 0.733)',
        },
        recipeUl: {
            textAlign: 'center',
            width:'60%',
            margin: 'auto auto 15px',
            padding: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            fontWeight:'bolder',
            color:'var(--purple)',
            border:'1px solid var(--purple)',
            textShadow:'.5px .5px rgba(138, 100, 163, 0.733)',
        },

        recipeLi:{
            letterSpacing: '2 px',
            width:'60%',
            margin: 'auto',
            padding: '10 px',
            textAlign: 'center',
            listStyle: 'none',
            textDecoration: 'none',
            fontWeight:'normal',
            color:'var(--purple)'
        },
        buttons:{
            display:'flex',
            width:'fit-content',
            margin:'auto',
            
        },
        recipeButton:{
            width:'fit-content',
            margin:'5px',
            fontSize:'1.5vw',
            backgroundColor:'var(--purple)',
            padding:'5px',
            fontWeight:'bolder',
            color:'white'
        },
        folderButton:{
            width:'fit-content',

        }
    }

}
export default recipeStyles
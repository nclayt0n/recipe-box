import React from 'react';
import {withRouter,Link}from 'react-router-dom';
import landingPageStyles from './LandingPageStyles';
import TokenService from '../../services/token-service';
import MediaQuery from 'react-responsive';
class LandingPage extends React.Component{
    render(){ 
        let style=landingPageStyles;
        const description='allows you to create Recipes and store them in different Folders. It makes for an easier experience, by keeping all your meals, menus, and memories safe and organized in one place.';
        const demo='To test out Recipe Box you can use enter in the following credentials: email: testEmailFor@RecipeBox.com and password: testP@ssw0rd. If you love Recipe Box and want to create your own space, just click log out in the navagation bar and you can then create a new account.';
        
        return(<> 
        
            <div className='landingPage' style={style.landingPage}>
           
                <div className='greeting' style={style.greeting}>
                    <div className='landingPageLinkBox' style={style.landingPageLinkBox}>
                        <button style={style.button}><Link to='/register' style={style.landingButtons} className='landingButtons'>Create Account</Link></button>
                        {(TokenService.hasAuthToken())?(this.props.history.push('/home-page')):(<button style={style.button}><Link  to='/login' className='landingButtons'style={style.landingButtons}>Login</Link></button>)}
                    </div>
                </div>
            </div>
            
            <MediaQuery maxWidth={650}>
                <section className='appDescription' style={style.descriptionBox}>
                    <p style={style.description}><span id='RecipeBoxSpan' style={style.RecipeBoxSpan}>Recipe Box</span> {description} </p>
                    <p style={style.description}>{demo}</p>
                    <p style={style.descriptionStart}>To get started Create an Account, or Login.</p> 
                </section>
            </MediaQuery>
            <MediaQuery minWidth={651} maxWidth={1000}>
                <section className='appDescription' style={style.tablet.descriptionBox}>
                    <p style={style.tablet.description}><span id='RecipeBoxSpan' style={style.tablet.RecipeBoxSpan}>Recipe Box</span> {description}</p>
                    <p style={style.tablet.description}>{demo}</p>
                    <p style={style.tablet.descriptionStart}>To get started Create an Account, or Login.</p> 
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1001}>
                <section className='appDescription' style={style.laptop.descriptionBox}>
                    <p style={style.laptop.description}><span id='RecipeBoxSpan' style={style.laptop.RecipeBoxSpan}>Recipe Box</span> {description}</p>
                    <p style={style.laptop.description}>{demo}</p>
                    <p style={style.laptop.descriptionStart}>To get started Create a new Account, or Login.</p> </section>
            </MediaQuery>
       </>
        )
    }
}
export default withRouter(LandingPage)
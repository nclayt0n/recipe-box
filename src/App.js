import React from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header'
import LoginForm from './Components/LoginForm/LoginForm'
import Footer from './Components/Footer/Footer';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import LandingPage from './Components/LandingPage/LandingPage';
class App extends React.Component {
  render(){
    return (
    <div className="App">
    <Header/>
    <Switch>
    <Route
    exact path={'/'} Component={LandingPage}/>
    </Switch>
     <Footer/>
    </div>
  );
  }
  
}

export default App;

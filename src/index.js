import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Architects Daughter', 'sans-serif']
  }
})

ReactDOM.render( 
<BrowserRouter>
<App /> 
</BrowserRouter>, document.getElementById('root'));
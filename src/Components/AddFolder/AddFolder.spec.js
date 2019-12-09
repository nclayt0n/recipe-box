import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddFolder from './AddFolder';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import addFStyles from './AddFolderStyles';

        
it('renders without crashing', () => {
    let style=addFStyles;
 const wrapper=shallow(<AddFolder style={style.addFDivStyle}/>)
 expect(toJson(wrapper))
 .toMatchSnapshot();

});
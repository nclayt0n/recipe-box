import React from 'react';
import AddFolder from './AddFolder';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import addFStyles from './AddFolderStyles';
import Context from '../../Context';
import {StaticRouter} from 'react-router-dom'

        
it('renders without crashing', () => {
    const contextType=Context;
    let style=addFStyles;
    const location={pathname:'/add-folder'};
    const wrapper=shallow(<StaticRouter><AddFolder location={location} style={style.addFolderDivStyle}/></StaticRouter>)
    expect(toJson(wrapper))
    .toMatchSnapshot();
});
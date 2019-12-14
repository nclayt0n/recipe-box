import React from 'react';
import AddFolder from './AddFolder';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import addFStyles from './AddFolderStyles';
import Context from '../../Context'
import HomePage from '../HomePage/HomePage';
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders';

        
it('renders without crashing', () => {
    const contextType=Context;
    let style=addFStyles;
    const location={pathname:'/add-folder'};
    const wrapper=shallow(<Context.Provider><GetRecipeAndFolders><AddFolder location={location} style={style.addFolderDivStyle}/></GetRecipeAndFolders></Context.Provider>)
    expect(toJson(wrapper))
    .toMatchSnapshot();
});
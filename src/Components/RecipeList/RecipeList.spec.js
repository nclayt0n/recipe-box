import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import RecipeList from './RecipeList'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AddRecipe',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<BrowserRouter><RecipeList /></BrowserRouter>,div);
            ReactDOM.unmountComponentAtNode(div);
        });
        it('snapshot', () => {
 const wrapper=shallow(<RecipeList/>)
 expect(toJson(wrapper))
 .toMatchSnapshot()

});
  
})
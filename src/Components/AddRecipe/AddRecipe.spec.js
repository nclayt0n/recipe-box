import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import AddRecipe from './AddRecipe'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AddRecipe',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<BrowserRouter><AddRecipe /></BrowserRouter>,div);
            ReactDOM.unmountComponentAtNode(div);
        });
        it('snapshot', () => {
 const wrapper=shallow(<AddRecipe/>)
 expect(toJson(wrapper))
 .toMatchSnapshot()

});
  
})

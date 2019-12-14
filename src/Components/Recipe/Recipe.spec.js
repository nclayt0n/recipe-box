import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';
import { shallow } from 'enzyme';
import {StaticRouter, BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Context from '../../Context';
 import ShallowRenderer from 'react-test-renderer/shallow';
 
 describe('<Recipe />', () => {
     const contextValues = { folders: [{
        "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fc3",
        "name": "Spangley",
        "user_id": 1
     },{
        "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fc3",
        "name": "Spangley",
        "user_id": 1
     }]};
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StaticRouter><Recipe/></StaticRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot', () => {
const wrapper=shallow(<StaticRouter><Recipe contextValues={contextValues}/></StaticRouter>)
expect(toJson(wrapper))
.toMatchSnapshot()
});
     })

import React from 'react'
import ReactDOM from 'react-dom';
import Folder from './Folder'
import { shallow } from 'enzyme'
import {BrowserRouter} from 'react-router-dom'
import toJson from 'enzyme-to-json'
import * as Context from '../../Context'
 import ShallowRenderer from 'react-test-renderer/shallow';
 
 describe.skip('<Folder />', () => {
     const contextValues = { folders: [{
        "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fc3",
        "name": "Spangley",
        "user_id": 1
     },{
        "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fc3",
        "name": "Spangley",
        "user_id": 1
     }]}
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Folder/></BrowserRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot', () => {
const wrapper=shallow(<Folder contextValues={contextValues}/>)
expect(toJson(wrapper))
.toMatchSnapshot()
     console.log(Context)
});
     })


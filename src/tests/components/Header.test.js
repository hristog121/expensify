import React from 'react';
import {shallow} from 'enzyme'
import Header from '../../components/Header';
//import setupTests from 'src/tests/setupTests.js'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').length).toBe(1);
    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

});

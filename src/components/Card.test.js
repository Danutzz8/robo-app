import { shallow, mount, render } from 'enzyme';
import { create } from "react-test-renderer";
import React from'react';
import Card from './Card';

// most used 90% will be shallow the other 2 mount/render will happen in a domAPI or browser
//====================================================================================
// it('expect to render Card component', () => {
//     expect(shallow(<Card/>).length).toEqual(1)
// });

it('expect to render Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot()
});

// it("renders correctly", () => {
//     expect(shallow(<Card/>)).toMatchSnapshot(); // check if a component renders correctly
//   });
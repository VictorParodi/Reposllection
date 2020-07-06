import React from 'react';
import { shallow } from 'enzyme';
import App from './../App.jsx';
import TitlePageComponent from './../components/TitlePageComponent/TitlePageComponent';
import Home from './../pages/Home/Home';

describe('Testing for App Component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    afterEach(() => {
        component.unmount();
    });

    it('renders the TitlePageComponent', () => {
        expect(component.find(TitlePageComponent).length).toEqual(1);
    });

    it('renders the Home component', () => {
        expect(component.find(Home).length).toEqual(1);
    });
});


import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='Type Lorem ipsum' name='Name Lorem ipsum' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });
  it('should render correct name', () => {
    const expectedName = 'Lorem ipsum';
    const expectedType = 'type';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedName);
  });
});

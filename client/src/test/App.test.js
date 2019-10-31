import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(
      <App />
    );
  });
  
  /*
    assertions started below
  */

  it('should have a plan panel',()=>{
    expect(
      wrapper.containMatchingElement(
        <PlanCard />
      )
    )
  });

})
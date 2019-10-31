import React from 'react';
import ReactDOM from 'react-dom';
import PlanCard from '../Components/PlanCard';
import {shallow} from 'enzyme';

describe('PlanCard',()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper = shallow(
        <PlanCard />
      );
    });
    
    /*
      assertions started below
    */
  
    it('should have a heading',()=>{
      expect(
        wrapper.containMatchingElement(
          <h1>heading</h1>
        )
      )
    });
  
  })
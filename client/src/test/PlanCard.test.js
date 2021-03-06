import React from 'react';
import PlanCard from '../Components/PlanCard';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

describe('PlanCard',()=>{

    configure({adapter: new Adapter()});

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
        wrapper.containsMatchingElement(
            <h1> Customise your plan </h1>
        )
      )
    });
  
  })
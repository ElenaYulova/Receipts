"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import ReceiptSteps from '../components/Primitive/ReceiptSteps';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('>>>ReceiptSteps --- Shallow Render REACT COMPONENTS',()=>{
    //shapshots
     
     
      const receiptComponent = <ReceiptSteps
      name = "name1"
      steps = "xdgfgjxhfjcgfh"
       />;
    
         
         const component = renderer.create(receiptComponent);
    
         it('renders receipt', () => {
           let componentTree = component.toJSON();
           expect(componentTree).toMatchSnapshot();
         });
    
         
    });
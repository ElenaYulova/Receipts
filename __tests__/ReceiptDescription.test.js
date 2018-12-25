"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import ReceiptDescription from '../components/Primitive/ReceiptDescription';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('>>>ReceiptDescription --- Shallow Render REACT COMPONENTS',()=>{
    //shapshots
     
     
      const receiptComponent = <ReceiptDescription 
      name = "name1"
      description = "ADSDfvSDvsD"
       />;
    
         
         const component = renderer.create(receiptComponent);
    
         it('renders receipt', () => {
           let componentTree = component.toJSON();
           expect(componentTree).toMatchSnapshot();
         });
    
         
    });
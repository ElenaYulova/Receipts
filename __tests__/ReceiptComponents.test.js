"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import ReceiptComponents from '../components/Primitive/ReceiptComponents';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('>>>ReceiptComponents --- Shallow Render REACT COMPONENTS',()=>{
    //shapshots
     
     
      const receiptComponent = <ReceiptComponents
      name = "name1"
      components = "sfADFASDFSA"
       />;
    
         
         const component = renderer.create(receiptComponent);
    
         it('renders receipt', () => {
           let componentTree = component.toJSON();
           expect(componentTree).toMatchSnapshot();
         });
    
         
    });
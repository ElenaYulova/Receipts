"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import ReceiptImage from '../components/Primitive/ReceiptImage';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>ReceiptImage --- Shallow Render REACT COMPONENTS',()=>{
    //shapshots
       
      const receipt1Component = <ReceiptImage 
      name = "name1"
      imageUrl = "../../Images/salad-chick-q.jpg"
       />;
    
       const receipt2Component = <ReceiptImage 
       name = "name2"
      imageUrl = "2222"
        />;
    
      
    
         const component1 = renderer.create(receipt1Component);
    
         it('renders usual receipt', () => {
           let componentTree = component1.toJSON();
           expect(componentTree).toMatchSnapshot();
         });
    
         const component2 = renderer.create(receipt2Component);
    
        it('renders receipt with wrong url', () => {
            let componentTree = component2.toJSON();
            expect(componentTree).toMatchSnapshot();
        });
    
    });
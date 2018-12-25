"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import receiptReducers from '../redux/receiptReducers';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });
const testReceipts = [
    {
        id: 1,
        name: "name1",
        components: "comp1. comp1",
        steps: "step1. step1.",
        description: "descr1",
        imageUrl: "../../Images/salad-chick-q.jpg",
    },
    {
        id: 2,
        name: "name2",
        components: "comp2. comp2",
        steps: "step2. step2.",
        description: "descr2",
        imageUrl: "../../Images/salad-chick-q.jpg",
        isSelected: true,
    },
    {
        id: 3,
        name: "name3",
        components: "comp3. comp3",
        steps: "step3. step3.",
        description: "descr3",
        imageUrl: "sdsd",
    }
]
let initialState = {
    receipts: testReceipts,
    dataLoaded: true,
}
describe('>>>test receipt reducers', ()=>{
    // CREATE_RECEIPT_LIST test
    it('CREATE_RECEIPT_LIST', () => { 
        const action = {
          type: 'CREATE_RECEIPT_LIST',
          receiptsList: [{"id": 1, "name": "Огуречно-капустный салат с курицей", "dish": "salad",
          "description":"Представленный салат очень сочный - капуста после перетирания с солью даёт много сока, становится чуть мягче, но остаётся хрустящей. Аромат огурцов придаёт салату свежесть. Жареная курица очень необычна. Она сильно выделяется в овощной составляющей своей упругостью и ярким вкусом.",
          "components":"350-400г куриного филе. 2 ст ложки растительного масла (~35г). 400г белокочанной капусты. 1 крупный огурец (~200г). 1 маленький зубчик чеснока (4г). 2 ст ложки майонеза (30г). 3 ст ложки сметаны (60г). соль.",
          "steps":"Куриное филе нарезать кубиками. В сковороде на сильном огне разогреть растительное масло и выложить курицу. Обжаривать до появления зажаренной корочки. Огонь убавить до минимума, курицу немного посолить и влить 5-7 столовых ложек воды. Сковороду закрыть крышкой. Тушить курицу 5 минут. Снять сковороду с огня и оставить остывать до тёплого. Капусту нарезать небольшими квадратами.Огурец нарезать соломкой. Смешать майонез, сметану и пропущенный через пресс чеснок. Всё перемешать и заправить соусом",
          "imageUrl": "../../Images/salad-chick-q.jpg" }]
        }
    
        expect(receiptReducers(initialState, action)).toEqual({
          ...initialState,
          receipts: [{"id": 1, "name": "Огуречно-капустный салат с курицей", "dish": "salad",
          "description":"Представленный салат очень сочный - капуста после перетирания с солью даёт много сока, становится чуть мягче, но остаётся хрустящей. Аромат огурцов придаёт салату свежесть. Жареная курица очень необычна. Она сильно выделяется в овощной составляющей своей упругостью и ярким вкусом.",
          "components":"350-400г куриного филе. 2 ст ложки растительного масла (~35г). 400г белокочанной капусты. 1 крупный огурец (~200г). 1 маленький зубчик чеснока (4г). 2 ст ложки майонеза (30г). 3 ст ложки сметаны (60г). соль.",
          "steps":"Куриное филе нарезать кубиками. В сковороде на сильном огне разогреть растительное масло и выложить курицу. Обжаривать до появления зажаренной корочки. Огонь убавить до минимума, курицу немного посолить и влить 5-7 столовых ложек воды. Сковороду закрыть крышкой. Тушить курицу 5 минут. Снять сковороду с огня и оставить остывать до тёплого. Капусту нарезать небольшими квадратами.Огурец нарезать соломкой. Смешать майонез, сметану и пропущенный через пресс чеснок. Всё перемешать и заправить соусом",
          "imageUrl": "../../Images/salad-chick-q.jpg" }],
        })
      })

      it('ADD_NEW_RECEIPT', () => { 
        const action = {
          type: 'ADD_NEW_RECEIPT',
          newReceipt:     {
            id: 4,
            name: "name4",
            components: "comp4. comp4",
            steps: "step4. step4.",
            description: "descr4",
            imageUrl: "sdsd",
        }
        }
        receiptReducers(initialState, action);
        
        expect(initialState.receipts.length).toEqual(4)
      })

      it('CHOOSE_RECEIPT', () => { 
        const action = {
          type: 'CHOOSE_RECEIPT',
          receiptId: 3
        }
        receiptReducers(initialState, action);
        
        expect(initialState.receipts[2].isSelected).toEqual(true)
      })

      it('DELETE_RECEIPT', () => { 
        const action = {
          type: 'DELETE_RECEIPT',
          receiptId: 1
        }
        receiptReducers(initialState, action);
        
        expect(initialState.receipts[0].id).toEqual(2)
      })

      
});
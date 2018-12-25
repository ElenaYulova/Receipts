"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {create_receipt_list, add_new_receipt, choose_receipt, delete_receipt} from '../redux/receiptsAC';

configure({ adapter: new Adapter() });

describe('>>>A C T I O N --- Test receiptsAC', ()=>{
    it('create_receipt_list', () => {
        const resList = [
            {"id": 1, "name": "Огуречно-капустный салат с курицей", "dish": "salad",
                "description":"Представленный салат очень сочный - капуста после перетирания с солью даёт много сока, становится чуть мягче, но остаётся хрустящей. Аромат огурцов придаёт салату свежесть. Жареная курица очень необычна. Она сильно выделяется в овощной составляющей своей упругостью и ярким вкусом.",
                "components":"350-400г куриного филе. 2 ст ложки растительного масла (~35г). 400г белокочанной капусты. 1 крупный огурец (~200г). 1 маленький зубчик чеснока (4г). 2 ст ложки майонеза (30г). 3 ст ложки сметаны (60г). соль.",
                "steps":"Куриное филе нарезать кубиками. В сковороде на сильном огне разогреть растительное масло и выложить курицу. Обжаривать до появления зажаренной корочки. Огонь убавить до минимума, курицу немного посолить и влить 5-7 столовых ложек воды. Сковороду закрыть крышкой. Тушить курицу 5 минут. Снять сковороду с огня и оставить остывать до тёплого. Капусту нарезать небольшими квадратами.Огурец нарезать соломкой. Смешать майонез, сметану и пропущенный через пресс чеснок. Всё перемешать и заправить соусом",
                "imageUrl": "../../Images/salad-chick-q.jpg" }]
        const testreceipts = create_receipt_list(resList)
        expect(testreceipts).toEqual({ type:"CREATE_RECEIPT_LIST", receiptsList:[
            {"id": 1, "name": "Огуречно-капустный салат с курицей", "dish": "salad",
                "description":"Представленный салат очень сочный - капуста после перетирания с солью даёт много сока, становится чуть мягче, но остаётся хрустящей. Аромат огурцов придаёт салату свежесть. Жареная курица очень необычна. Она сильно выделяется в овощной составляющей своей упругостью и ярким вкусом.",
                "components":"350-400г куриного филе. 2 ст ложки растительного масла (~35г). 400г белокочанной капусты. 1 крупный огурец (~200г). 1 маленький зубчик чеснока (4г). 2 ст ложки майонеза (30г). 3 ст ложки сметаны (60г). соль.",
                "steps":"Куриное филе нарезать кубиками. В сковороде на сильном огне разогреть растительное масло и выложить курицу. Обжаривать до появления зажаренной корочки. Огонь убавить до минимума, курицу немного посолить и влить 5-7 столовых ложек воды. Сковороду закрыть крышкой. Тушить курицу 5 минут. Снять сковороду с огня и оставить остывать до тёплого. Капусту нарезать небольшими квадратами.Огурец нарезать соломкой. Смешать майонез, сметану и пропущенный через пресс чеснок. Всё перемешать и заправить соусом",
                "imageUrl": "../../Images/salad-chick-q.jpg" }] })
    });


    it('add_new_receipt', () => {
        const newRes = add_new_receipt({id: 1,
            name: "name1",
            components: "comp1. comp1",
            steps: "step1. step1.",
            description: "descr1",
            imageUrl: "../../Images/salad-chick-q.jpg",})
        expect(newRes).toEqual({ type:"ADD_NEW_RECEIPT", newReceipt:{id: 1,
            name: "name1",
            components: "comp1. comp1",
            steps: "step1. step1.",
            description: "descr1",
            imageUrl: "../../Images/salad-chick-q.jpg"}})
    });


    it('choose_receipt', () => {
        const choseres =choose_receipt(11)
        expect(choseres).toEqual({ type:"CHOOSE_RECEIPT", receiptId: 11 })
    });
    it('delete_receipt', () => {
        const delres = delete_receipt(11)
        expect(delres).toEqual({ type:"DELETE_RECEIPT", receiptId: 11 })
    });
});
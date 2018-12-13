import React from 'react';
import PropTypes from 'prop-types';

import './NewReceiptForm.css';

import ReceiptButton from '../Primitive/ReceiptButton';
import ReceiptInput from '../Primitive/ReceiptInput';
import ReceiptTextarea from '../Primitive/ReceiptTextarea';

// Компонент Форма для добавления рецепта
export default class ReceiptListItem extends React.PureComponent {
    static propTypes = {
        receipts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            components: PropTypes.string.isRequired,
            steps: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageUrl: PropTypes.string,
            })
        ),
      
        onSubmit: PropTypes.func.isRequired,
        
       
    };
    
    state = {
        
        receipts: this.props.receipts.map((v) => v),
        name: "",
        description: "",
        components: "",
        steps: "",
        imageUrl: "",
      };

      lastReceiptId = receipts[receipts.length-1].id;


      validateText = (text)=> (typeof text != "string" || text == "")?false: true;         
      

      render() {
        
        return <div >
        <form onSubmit={this.props.onSubmit} className="receipt-form">

            <ReceiptInput 
            name="Название блюда" 
            type="text" 
            isRequired="true" 
            validationError="Введите название блюда"/>
            <ReceiptInput 
            name="Картинка" 
            type="text" 
            isRequired="false"/>
            <ReceiptTextarea 
            name="Описание блюда" 
            type="text" 
            isRequired="true" 
            validationError="Введите описание блюда"/>
            <ReceiptTextarea 
            name="Ингредиенты блюда" 
            type="text" 
            isRequired="true" 
            validationError="Введите ингредиенты блюда"/>
            <ReceiptTextarea 
            name="Приготовление блюда" 
            type="text" 
            isRequired="true" 
            validationError="Опишите, как готовить блюдо"/>
            <ReceiptButton name="save form" type="submit" value="Сохранить рецепт"></ReceiptButton>
        </form>
     
    </div>
 }   
}
import React from 'react';
import PropTypes from 'prop-types';

import './NewReceiptForm.css';
import {connect} from 'react-redux';
import ReceiptButton from '../Primitive/ReceiptButton';
import ReceiptFormInput from '../Primitive/ReceiptFormInput';
import ReceiptTextarea from '../Primitive/ReceiptTextarea';
import { add_new_receipt} from '../../redux/receiptsAC';
// Компонент Форма для добавления рецепта
class NewReceiptForm extends React.PureComponent {
                
    state = {
        formIsValid: false,
        name: "",
        description: "",
        components: "",
        steps: "",
        imageUrl: "",
        formIsSubmitted: false,
        dataSent: false,
        receipts: this.props.receipts,
      };



      validateText = (text)=> {
          if (typeof text != "string" || text == ""){
              return false
            } else {
                return true}; 
            }        
      validation = () => {
        if (this.validateText(this.state.name) && this.validateText(this.state.description) && this.validateText(this.state.components) && this.validateText(this.state.components) && this.validateText(this.state.steps)) {
            console.log(this.state);
            return this.setState({formIsValid: true});
        } else {
            return this.setState({formIsValid: false});
        }
     }

     receiptFormSubmit = () => {
         let receipts = this.props.receipts.receipts;
         let i = receipts.length-1;
        let newReceiptID = +receipts[i].id + 1;
        
        var newReceipt = {
            id: newReceiptID,
            name: this.state.name,
            description: this.state.description,
            components: this.state.components,
            steps: this.state.steps,
            imageUrl: this.state.imageUrl,
        };
        if (this.state.formIsValid) {
            
           
            this.props.dispatch(add_new_receipt(newReceipt));
            
            console.log("Receipt was add");
            this.setState({formIsSubmitted: true});
            
            
        } else {
            return console.error("При сохранении произошла ошибка")
        }
     }

    //  componentWillReceiveProps(newProps) {
                      
    //     updateAJAXStorage(newProps.receipts);
    //     console.log("sent: "+ newProps.receipts);
    //     this.setState({dataSent: true});
    //  }
     onInputChange = (EO) => {
        console.log(EO.target.id+EO.target.value);
        switch (EO.target.id) {
            case "name": {
                this.validation();
                return this.setState({name: EO.target.value});
                
            }
            case "url": {
                this.validation();
                return this.setState({imageUrl: EO.target.value});
                
            }
            case "description": {
                this.validation();
                return this.setState({description: EO.target.value});
                
            }
            case "components": {
                this.validation();
                return this.setState({components: EO.target.value});
                
            }
            case "steps": {
                this.validation();
                return this.setState({steps: EO.target.value});
                
            }
            default: {
                this.validation();
                return console.error("Ошибка обработки данных");
                
            }
            
        }
      
    }
      render() {
        const enabled = this.state.formIsValid;
        return <div >
            {this.state.formIsSubmitted && <div>
                <p>Рецепт добавлен</p>
                <button className="modal__close" onClick={this.props.modalClose}>Закрыть</button>
            </div>}||
        {
        <form className="receipt-form">
            {this.props.children}
            <ReceiptFormInput 
            id = "name"
            onEnterPressed = {false}
            name="Название блюда" 
            type="text" 
            isRequired={true} 
            validationError="Введите название блюда"
            validateText = {this.validateText}
            onInputChange= {this.onInputChange.bind(this)}
            onEnterPressed = {this.validation}
            validateText = {this.validateText}
            />
            
            <ReceiptFormInput 
            onEnterPressed = {false}
            name="Картинка" 
            type="text" 
            isRequired={false}
            id = "url"
            onInputChange= {this.onInputChange.bind(this)}
            onEnterPressed = {this.validation}
            validateText = {this.validateText}
            />
            <ReceiptTextarea 
            onEnterPressed = {false}
            placeholder = "Опишите блюдо"
            name="Описание блюда" 
            type="text" 
            id = "description"
            isRequired={true} 
            validationError="Введите описание блюда"
            onInputChange= {this.onInputChange.bind(this)}
            validateText = {this.validateText}
            />
            <ReceiptTextarea 
            placeholder = "Опишите ингредиенты блюда"
            id = "components"
            onEnterPressed = {false}
            name="Ингредиенты блюда" 
            type="text" 
            isRequired={true} 
            validationError="Введите ингредиенты блюда"
            onInputChange= {this.onInputChange.bind(this)}
            validateText = {this.validateText}
            />
            <ReceiptTextarea 
            placeholder = "Oпишите процесс приготовления блюда"
            id = "steps"
            onEnterPressed = {false}
            name="Приготовление блюда" 
            type="text" 
            isRequired={true}  
            validationError="Опишите, как готовить блюдо"
            onInputChange= {this.onInputChange.bind(this)}
            validateText = {this.validateText}
            receiptFormSubmit = {this.receiptFormSubmit.bind(this)}
            />
            <ReceiptButton receiptFormSubmit = {this.receiptFormSubmit.bind(this)} disabled = {!enabled} name="save form" buttonOnClick={"newReceipt"} title="Добавить рецепт в базу" type="submit" value="Сохранить рецепт">Сохранить рецепт</ReceiptButton>
        </form>}
     
    </div>
 }   
}
const mapStateToProps = function (state) {
    
    return {
      receipts: state.receipts,
    };
  }; 
 export default connect(mapStateToProps)(NewReceiptForm)
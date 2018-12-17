import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptInput.css';

// Поле input кулинарной книги. Переиспользуемое
export default class ReceiptFormInput extends React.PureComponent {
    static propTypes = {
        isRequired: PropTypes.bool.isRequired, //Является ли компонент обязательным для заполнения
        validationError: PropTypes.string, //текст ошибки при валидации. Только для обязательных полеф
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        
    };

    state = {
    
      isValid: false,
    }
    
    
      
      
      validateValue = (EO) => {
        if (this.props.validateText(EO.target.value)){
          return this.setState({isValid: true});
        } else {
          return this.setState({isValid: false});
        }
      }
      onInputChange = (EO) => {
        this.validateValue(EO);
        this.props.onInputChange(EO);
        
        
      }
      onEnterPressed = (EO) => {
        if(EO.keyCode == 13){
          console.log('value', EO.target.value);
          // submit по кнопке Enter
        this.props.onEnterPressed();
        } 
      }
    render() {
        const name = this.props.name;
    return <div className="receipt-form-input">
      <label htmlFor={name} className="receipt-form-input__label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <input type={this.props.type} name={name} id={this.props.id}
        onKeyDown={this.onEnterPressed}
        className="receipt-form-input__input"
        value={this.props.value} 
        onBlur={this.onInputChange} />
      {this.props.isRequired && !this.state.isValid && <span className="receipt-form-input__error">
        {this.props.validationError}
      </span>}
    </div>
 }   
}
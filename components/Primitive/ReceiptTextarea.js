import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptTextarea.css';

// Компонент textarea кулинарной книги. Переиспользуемый
export default class ReceiptTextarea extends React.PureComponent {
    static propTypes = {
        isRequired: PropTypes.bool.isRequired, //Является ли компонент обязательным для заполнения
        validationError: PropTypes.string, //текст ошибки при валидации. Только для обязательных полеф
        isValid: PropTypes.bool, //текст ошибки при валидации. Только для обязательных полей
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        onInputChange:PropTypes.func.isRequired,
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
       
    render() {
        const name = this.props.name;
        
    return <div className="receipt-form-Textarea">
      <label htmlFor={name} className="receipt-form-Textarea__label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <textarea  onBlur={this.onInputChange} placeholder={this.props.placeholder} name={name} id={this.props.id}
        className="receipt-form-Textarea__Textarea"
        value={this.props.value} onChange={this.onInputChange}></textarea>
      {this.props.isRequired && !this.state.isValid && <span className="receipt-form-textarea__error">
        {this.props.validationError}
      </span>}
    </div>
 }   
}
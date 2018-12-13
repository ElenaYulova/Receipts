import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptTextarea.css';

// Компонент textarea кулинарной книги. Переиспользуемый
export default class ReceiptInput extends React.PureComponent {
    static propTypes = {
        isRequired: PropTypes.bool.isRequired, //Является ли компонент обязательным для заполнения
        validationError: PropTypes.string, //текст ошибки при валидации. Только для обязательных полеф
        isValid: PropTypes.bool, //текст ошибки при валидации. Только для обязательных полей
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        onInputChange:PropTypes.func.isRequired,
    };

    onInputChange = (EO) => {
        const key = EO.target.name;
        const value = EO.target.value;
        this.props.onInputChange(key, value);

    }
    render() {
        const name = this.props.name;
    return <div className="receipt-form-Textarea">
      <label htmlFor={name} className="receipt-form-Textarea__label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <textarea placeholder={this.props.placeholder} name={name} id={name}
        className="receipt-form-Textarea__Textarea"
        value={this.props.value} onChange={this.onInputChange}></textarea>
      {this.props.isRequired && !this.props.isValid && <span className="receipt-form-textarea__error">
        {this.props.validationError}
      </span>}
    </div>
 }   
}

// Компонент imput кулинарной книги. Переиспользуемый
class ReceiptInput extends React.PureComponent {
    static propTypes = {
        isRequired: PropTypes.bool.isRequired, //Является ли компонент обязательным для заполнения
        validationError: PropTypes.string, //текст ошибки при валидации. Только для обязательных полеф
        isValid: PropTypes.bool, //текст ошибки при валидации. Только для обязательных полей
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onInputChange:PropTypes.func.isRequired,
    };

    onInputChange = (EO) => {
        const key = EO.target.name;
        const value = EO.target.value;
        this.props.onInputChange(key, value);

    }
    render() {
        const name = this.props.name;
    return <div className="receipt-form-input">
      <label htmlFor={name} className="receipt-form-input__label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <input type={this.props.type} name={name} id={name}
        className="receipt-form-input__input"
        value={this.props.value} onChange={this.onInputChange} />
      {this.props.isRequired && !this.props.isValid && <span className="receipt-form-input__error">
        {this.props.validationError}
      </span>}
    </div>
 }   
}
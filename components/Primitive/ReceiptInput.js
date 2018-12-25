import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptInput.css';

// Поле input кулинарной книги. Переиспользуемое
export default class ReceiptInput extends React.PureComponent {
    static propTypes = {
        isRequired: PropTypes.bool.isRequired, //Является ли компонент обязательным для заполнения
        validationError: PropTypes.string, //текст ошибки при валидации. Только для обязательных полеф
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        
    };

    state = {
    
      isValid: false,
    }
    onInputChange = () => {
      this.props.onInputChange();
      
    }
    onEnterPressed = (EO) => {
      if(EO.keyCode == 13){
        // console.log('value', EO.target.value);
        // поиск по кнопке Enter
      this.props.onEnterPressed();
      }

   }
    render() {
        const name = this.props.name;
    return <div className="receipt-form-input">
      <label htmlFor={name} className="receipt-form-input__label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <input type={this.props.type} name={name} id={name}
      onKeyDown={this.onEnterPressed}
        className="receipt-form-input__input"
        value={this.props.value} onChange={this.props.onInputChange} />
      {this.props.isRequired && !this.state.isValid && <span className="receipt-form-input__error">
        {this.props.validationError}
      </span>}
    </div>
 }   
}
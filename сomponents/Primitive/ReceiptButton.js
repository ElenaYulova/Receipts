import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptButton.css';

// Компонент Кнопка кулинарной книги. Переиспользуемый
export default class ReceiptDescription extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
    };
    
    
    render() {
        const name = this.props.name;
        const value = this.props.value;
        const title = this.props.value;
    return <button type={this.props.type} className="" title={title} value={value} name={name} ></button>
        
 }   
}
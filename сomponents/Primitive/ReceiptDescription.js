import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptDescription.css';

// Компонент Описание рецепта кулинарной книги. Переиспользуемый
export default class ReceiptDescription extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        
    };

    
    render() {
        const name = this.props.name;
        const text = this.props.description;
    return <div id = {name} className="receipt-description">
        {text}        
    </div>
 }   
}
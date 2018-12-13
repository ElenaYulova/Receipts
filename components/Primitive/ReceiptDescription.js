import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptDescription.css';

// Компонент Описание рецепта кулинарной книги. Переиспользуемый
export default class ReceiptDescription extends React.PureComponent {
    static propTypes = {
        
        description: PropTypes.string.isRequired,
        
    };

    
    render() {
        
        const text = this.props.description;
    return <div  className="receipt-description">
        {text}        
    </div>
 }   
}
import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptComponents.css';

// Компонент Ингредиенты рецепта кулинарной книги. Переиспользуемый
export default class ReceiptComponents extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        components: PropTypes.string.isRequired,
        
    };

    
    render() {
        const name = this.props.name;
        const text = this.props.steps.split(".");
        text = text.map((part, i) => <li  key={i}>{part}</li> );
    return <div className="receipt-components">
        <ul  id = {name} >{text}</ul>      
    </div>
 }   
}
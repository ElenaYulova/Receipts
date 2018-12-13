import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptSteps.css';

// Компонент Этапы приготовления кулинарной книги. Переиспользуемый
export default class ReceiptSteps extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        steps: PropTypes.string.isRequired,
        
    };

    
    render() {
        const name = this.props.name;
        let text = this.props.steps.split(".");
        text = text.map((part, i) => <p  key={i}>{part}</p> );
    return <div id = {name} className="receipt-steps">
        {text}        
    </div>
 }   
}
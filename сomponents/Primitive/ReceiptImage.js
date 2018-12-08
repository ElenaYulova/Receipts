import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptImage.css';

// Компонент img кулинарной книги. Переиспользуемый
export default class ReceiptImage extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        
    };

    
    render() {
        const name = this.props.name;
    return <div className="receipt-form-Image">

      <img url={this.props.imageUrl || "../../Images/img.jpg"} id={name}
        className="receipt-form-Image__Image"
        alt={name} title={name}/>
          
    </div>
 }   
}

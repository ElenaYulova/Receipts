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
        const imageUrl = this.props.imageUrl;
        return <div className="receipt-form-Image">

      <img src={imageUrl} onError={(EO)=>{EO.target.src='/Images/default.jpg'}} id={name}
        className="receipt-form-Image__Image"
        alt={name} title={name}/>
          
    </div>
 }   
}

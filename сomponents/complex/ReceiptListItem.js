import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptListItem.css';
import ReceiptDescription from'../Primitive/ReceiptDescription';
import ReceiptImage from'../Primitive/ReceiptImage';
import ReceiptButton from '../Primitive/ReceiptButton';

// Компонент Строка списка рецептов кулинарной книги. Переиспользуемый
export default class ReceiptListItem extends React.PureComponent {
    static propTypes = {
        receipts: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            isSelected: PropTypes.bool,}),
        receiptOnSelect: PropTypes.func.isRequired,
    
    };

    state = {
        id = this.props.receipt.id,
        name = this.props.receipt.name,
        components = this.props.receipt.components,
        steps = this.props.receipt.steps,
        description = this.props.receipt.description,
        imageUrl = this.props.receipt.imageUrl,
        receipt = this.props.receipt,
        isSelected = this.props.receipt.isSelected || false
      };

      componentWillReceiveProps = (newProps) => {
        console.log("ReceiptListItem id="+this.props.receipt.id+" componentWillReceiveProps");
        this.setState({receipt:newProps.receipt});
      };
      selectReceipt = () => {
        this.props.receiptOnSelect(this.props.receipt.id);
        this.setState({
            isSelected = !isSelected,
          });
    }
    render() {
        const { id, name, description} = this.state;
        const buttonValue = (isSelected && "Убрать из избранного") || "В избранное";
    return <div className="receipt-receipt-list__item">
    <h1>{name}</h1>
    <ReceiptImage className="" name={name} imageUrl={imageUrl}></ReceiptImage>
    
    <ReceiptDescription className=""  name={name} description={description}></ReceiptDescription> 
    <ReceiptButton title={buttonValue} value = "  " onClick={this.selectReceipt} className={(isSelected && "receipt-page-button__selected") || "receipt-page-button__non-selected"} name={name} ></ReceiptButton>
    </div>
 }  
    
}
import React from 'react';
import PropTypes from 'prop-types';


import './ReceiptPage.css';
import ReceiptDescription from'../Primitive/ReceiptDescription';
import ReceiptImage from'../Primitive/ReceiptImage';
import ReceiptComponents from '../Primitive/ReceiptComponents';
import ReceiptSteps from '../Primitive/ReceiptSteps';
import ReceiptButton from '../Primitive/ReceiptButton';

// Компонент Ингредиенты рецепта кулинарной книги. Переиспользуемый
export default class ReceiptPage extends React.PureComponent {
    static propTypes = {
        receipt: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            components: PropTypes.string.isRequired,
            steps: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageUrl: PropTypes.string,
            isSelected: PropTypes.bool,}),
        receiptOnSelect: PropTypes.func,
    };
    state = {
        id: this.props.receipt.id,
        name: this.props.receipt.name,
        components: this.props.receipt.components,
        steps: this.props.receipt.steps,
        description: this.props.receipt.description,
        imageUrl: this.props.receipt.imageUrl,
        receipt: this.props.receipt,
        isSelected: this.props.receipt.isSelected || false
      };

      componentWillReceiveProps = (newProps) => {
        console.log("ReceiptPage id="+this.props.receipt.id+" componentWillReceiveProps");
        this.setState({receipt:newProps.receipt});
      };
    selectReceipt = () => {
        this.props.receiptOnSelect(this.props.receipt.id);
        this.setState({
            isSelected:!isSelected,
          });
    }
    render() {
        const { id, name, components, steps, description, imageUrl} = this.state;
        const buttonValue = (this.state.isSelected && "Убрать из избранного") || "В избранное";
    return <div className="receipt-receipt-page">
    <h1>{name}</h1>
    <ReceiptImage className="" name={name} imageUrl={imageUrl}></ReceiptImage>
    <ReceiptButton title={buttonValue} value = {buttonValue} onClick={this.selectReceipt} className={(this.state.isSelected && "receipt-page-button__selected") || "receipt-page-button__non-selected"} name={name} >Добавить в избранное</ReceiptButton>
    <ReceiptDescription className=""  name={name} description={description.trim()}></ReceiptDescription> 
    <ReceiptComponents className="" name={name} components={components.trim()}></ReceiptComponents>  
    <ReceiptSteps className="" name={name} steps={steps}></ReceiptSteps> 
    
    
    </div>
 }   
}
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import './ReceiptListItem.css';
import ReceiptDescription from'../Primitive/ReceiptDescription';
import ReceiptImage from'../Primitive/ReceiptImage';
import ReceiptButton from '../Primitive/ReceiptButton';



// Компонент Строка списка рецептов кулинарной книги. Переиспользуемый
 class ReceiptListItem extends React.PureComponent {
    static propTypes = {
        receipt: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            isSelected: PropTypes.bool,}),
        // receiptOnSelect: PropTypes.func.isRequired,
    
    };

    state = {
        id: this.props.receipt.id,
        name: this.props.receipt.name,
        components: this.props.receipt.components,
        steps: this.props.receipt.steps,
        description: this.props.receipt.description,
        imageUrl: this.props.receipt.imageUrl,
        receipt: this.props.receipt,
        isSelected: this.props.receipt.isSelected || false,
        isRemoved:false,
      };

      componentWillReceiveProps = (newProps) => {
        console.log("ReceiptListItem id="+this.props.receipt.id+" componentWillReceiveProps");
        this.setState({receipt:newProps.receipt});
      };
      deleteReceipt = () => {
        this.props.dispatch( delete_receipt(this.props.match.params.lid) );
        this.setState({
          isRemoved: true
        });
      }
    render() {
        const {name, description, imageUrl} = this.state;
        
        const buttonValue = (this.state.isSelected && "Убрать из избранного") || "В избранное";
    return <div className="receipt-receipt-list__item">
    <h1>{name}</h1>
    <ReceiptImage className="" name={name} imageUrl={imageUrl}></ReceiptImage>
    
    <ReceiptDescription className="" description={description}></ReceiptDescription> 
    <ReceiptButton title={buttonValue} isSelected = {this.state.isSelected} receiptId={this.props.receipt.id} value = {buttonValue}  buttonOnClick="selection" className={(this.props.isSelected && "receipt-page-button__selected") || "receipt-page-button__non-selected"} name={name} >Добавить в избранное</ReceiptButton>
    <NavLink to={"/receipt/"+this.props.receipt.id} className="">{this.props.receipt.name}</NavLink>
    <ReceiptButton name={name} title={"Удалить рецепт"} receiptId={this.props.receipt.id} value = {"Удалить рецепт"}  buttonOnClick="delete" className={"receipt-page-button__non-selected"} name={name} >Удалить рецепт</ReceiptButton>
    </div>
 }  
    
}
const mapStateToProps = function (state) {
    console.log(state.receipts.receipts);
   return {
     receipts: state.receipts,
   };
 }; 
 export default connect(mapStateToProps)(ReceiptListItem);
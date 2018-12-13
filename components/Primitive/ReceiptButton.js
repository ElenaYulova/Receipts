import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './ReceiptButton.css';
import { choose_receipt } from '../../redux/receiptsAC';
// Компонент Кнопка кулинарной книги. Переиспользуемый
class ReceiptButton extends React.PureComponent {
    static propTypes = {
        receiptId: PropTypes.number,
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
        buttonOnClick: PropTypes.string,
    };
    funcButtonOnClick = () => 
    { if (this.props.buttonOnClick == "selection"){
        console.log(this.props.receiptId);
        this.props.dispatch(choose_receipt(this.props.receiptId));
    }
        
        
    }
    
    render() {
        
        const value = this.props.value;
        const title = this.props.value;
    return <button type={this.props.type} onClick = {this.funcButtonOnClick} className="" title={title} value={value} name={name} >{((this.props.isSelected) && "Убрать из избранного") || this.props.children}</button>
        
 }   
}
const mapStateToProps = function (state) {
    
   return {
     receipts: state.receipts,
   };
 }; 
export default connect(mapStateToProps)(ReceiptButton)
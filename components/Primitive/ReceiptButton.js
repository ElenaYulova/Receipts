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
        isSelected: PropTypes.bool,
        buttonOnClick: PropTypes.string,
        inputChangeValue: PropTypes.string,
        onSearchClicked: PropTypes.func,
        modalOpen: PropTypes.func,
    };
    state = {
        
        isSelected: this.props.isSelected || false,
    }
    funcButtonOnClick = () => 
    { switch (this.props.buttonOnClick){
       case "selection": { 
           let id = this.props.receiptId;
            console.log(id);
            this.props.dispatch(choose_receipt(id));
            this.setState({isSelected: !this.state.isSelected});
            console.log(this.state);
            break;
        }
        case "search": {
            this.props.onSearchClicked();
            break;
                       
        }
        case "modal": {
            this.props.modalOpen();
            break;
        }
        case "newReceipt": {
            this.props.receiptFormSubmit();
            console.log("Отправка формы");
            break;
        }
        default: {
            console.log("Кнопка не назначена");
                break;
            }
        };      
    }
 
        
    render() {
        
        const value = this.props.value;
        const title = this.props.value;
    return <button disabled = {this.props.disabled || false} type={this.props.type} onClick = {this.funcButtonOnClick} className="" title={title} value={value} name={name} >{((this.state.isSelected) && "Убрать из избранного") || this.props.children}</button>
        
 }   
}
const mapStateToProps = function (state) {
    
   return {
     receipts: state.receipts,
   };
 }; 
export default connect(mapStateToProps)(ReceiptButton)
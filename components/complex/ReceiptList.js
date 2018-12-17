import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptList.css';

import ReceiptListItem from'../complex/ReceiptListItem';
import ReceiptButton from '../Primitive/ReceiptButton';
import ReceiptInput from '../Primitive/ReceiptInput';
import NewReceiptModal from './NewReceiptModal'

// Компонент Список рецептов кулинарной книги. Переиспользуемый
export default class ReceiptList extends React.PureComponent {
    static propTypes = {
        heading: PropTypes.string.isRequired,
        receipts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            components: PropTypes.string.isRequired,
            steps: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageUrl: PropTypes.string,
            isSelected: PropTypes.bool,
            })
        ),
        
        
    };

    state = {
        heading: this.props.heading,
        receipts: this.props.receipts,
        inputChangeValue: " ",
        modal: false,

      };


      componentWillReceiveProps = (newProps) => {
        console.log("ReceiptList "+this.props.heading+" componentWillReceiveProps");
        this.setState({receipts:newProps.receipts});
      };
      onSearchClicked = () => {
          let filteredReceipts = [];

        for (let i = 0; i<this.state.receipts.length; i++) {
            let receipt = this.state.receipts[i];
            if (receipt.name.toLowerCase().indexOf(this.state.inputChangeValue.toLowerCase())>= 0){
                filteredReceipts.push(receipt);
                    
                    }
                }   
        console.log(filteredReceipts);
        return this.setState({receipts:filteredReceipts});
                   
      }

      onInputChange = (EO) => {
          console.log(EO.target.value);
        return this.setState({inputChangeValue: EO.target.value});
      }

      modalOpen = () => {
        return this.setState({modal: !this.state.modal});
      }
      

      render() {
        let receipts=((this.state.receipts.length>0) && this.state.receipts.map(receipt => {
            return <ReceiptListItem 
            key={receipt.id} 
            receipt={receipt}
            receiptOnSelect={this.receiptOnSelect}
  
               />;
            }
            )) || "Рецептов пока нет";
          
          let buttonSearch = "Поиск";
    return <div className="receipt-receipt-list">
    <h1>{this.state.heading}</h1>
    
    <ReceiptInput 
            name="Поиск по рецептам" 
            type="text" 
            isRequired={false}
            onInputChange = {this.onInputChange.bind(this)} 
            onEnterPressed= {this.onSearchClicked.bind(this)}/>
    <ReceiptButton onSearchClicked = {this.onSearchClicked.bind(this)} inputChangeValue= {this.state.inputChangeValue} title={buttonSearch} value = {buttonSearch} buttonOnClick={"search"} className="receipt-list-button" >Поиск</ReceiptButton>
    <ReceiptButton title={"Добавить новый рецепт"} value="Новый рецепт" modalOpen = {this.modalOpen.bind(this)} buttonOnClick={"modal"}>Новый рецепт</ReceiptButton>
    {this.state.modal && <NewReceiptModal modalOpen = {this.modalOpen.bind(this)}></NewReceiptModal>}
    {receipts}
    </div>
 }   
}
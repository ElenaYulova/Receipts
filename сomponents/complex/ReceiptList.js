import React from 'react';
import PropTypes from 'prop-types';

import './ReceiptList.css';

import ReceiptListItem from'../Primitive/ReceiptListItem';
import ReceiptButton from '../Primitive/ReceiptButton';
import ReceiptInput from '../Primitive/ReceiptInput';

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
        receiptOnSelect: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool,
        
    };

    state = {
        heading: this.props.heading,
        receipts: this.props.receipts.map((v) => v),
        

      };


      componentWillReceiveProps = (newProps) => {
        console.log("ReceiptList "+this.props.heading+" componentWillReceiveProps");
        this.setState({receipts:newProps.receipts});
      };

      receiptSearch = () => {
          
      }
      render() {
        
        let receipts=this.state.receipts.map(receipt => {
        
            return <ReceiptListItem 
            key={receipt.id} 
            receipt={receipt}
            receiptOnSelect={this.receiptOnSelect}

             />;
          }
          );
          let buttonSearch = "Поиск";
    return <div className="receipt-receipt-list">
    <h1>{this.state.heading}</h1>
    <label htmlFor="search">Поиск по рецептам</label>
    <ReceiptButton title={buttonSearch} value = {buttonSearch} onClick={this.receiptSearch} className="receipt-list-button" id="search" ></ReceiptButton>
    {receipts}
    </div>
 }   
}
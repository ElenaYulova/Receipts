import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';

class Page_ReceiptList extends React.PureComponent {


  render() {
    let filteredList = this.props.receipts.map(receipt => {
      if (receipt.isSelected){
          return receipt;
      }
      
  })    
    return (
      <ReceiptList heading = "Список избранных рецептов" receipts = {filteredList}

      />
    );
    
  }

}
    
export default Page_ReceiptList;
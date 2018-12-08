import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';


class Page_ReceiptList extends React.PureComponent {
 
  render() {

    return (
      <ReceiptList heading = "Список рецептов" receipts = {this.props.receipts}

      />
    );
    
  }

}
    
export default Page_ReceiptList;
    
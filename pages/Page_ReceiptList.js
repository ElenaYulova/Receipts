import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';
import { create_receipt_list } from '../redux/receiptsAC';


class Page_ReceiptList extends React.PureComponent {

  state = {
    receipts: this.props.receipts.receipts
  }
  

  render() {

    return (
      <ReceiptList heading = "Список рецептов" receipts = {this.state.receipts}

      />
    );
    
  }

}
const mapStateToProps = function (state) {
  return {
    receipts: state.receipts,
  };
};   
export default connect(mapStateToProps)(Page_ReceiptList);
    
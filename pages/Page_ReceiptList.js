import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';

// import updateAJAXStorage from '../actions/actionFetch';

class Page_ReceiptList extends React.Component {

  state = {
    receipts: this.props.receipts.receipts,
  }
  
  componentWillReceiveProps = (newProps) => {
    let newReceipts=newProps.receipts.receipts;
    // console.log("ReceiptList "  componentWillReceiveProps ");
    this.setState({receipts: newReceipts});
  };
  render() {
    console.log("props receipts: "+this.props.receipts);
    return (
      <ReceiptList heading = "Список рецептов" receipts = {this.props.receipts.receipts}

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
    
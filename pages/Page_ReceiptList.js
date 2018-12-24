import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';

import updateAJAXStorage from '../actions/actionFetch';

class Page_ReceiptList extends React.PureComponent {

  state = {
    receipts: this.props.receipts.receipts,
  }
  
  componentWillReceiveProps = (newProps) => {
    let newReceipts=newProps.receipts.receipts;
    console.log("ReceiptList "+this.props.heading+" componentWillReceiveProps^ ");
    this.setState({receipts: newReceipts});
  };
  render() {
    console.log("props receipts: "+this.props.receipts);
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
    
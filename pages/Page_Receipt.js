import React from 'react';

import ReceiptPage from '../components/complex/ReceiptPage';

import {connect} from 'react-redux';

class Page_Receipt extends React.PureComponent {
          
  render() {

    // раз написано <Route path="/receipt/:rcid" component={Page_Receipt} />
    // значит Page_Receipt получит то что в УРЛе после /receipt/ под именем props.match.params.rcid в виде строки
    let receiptId=parseInt(this.props.match.params.rcid);

    let receiptData=this.props.receipts.receipts.find( c => c.id==receiptId );

    return (
      <ReceiptPage
        receipt={receiptData}
      />
    );
    
  }

}
const mapStateToProps = function (state) {
  return {
    receipts: state.receipts,
  };
};   
export default connect(mapStateToProps)(Page_Receipt);   

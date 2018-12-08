import React from 'react';

import ReceiptPage from '../components/complex/ReceiptPage';

import {connect} from 'react-redux';

class Page_Client extends React.PureComponent {
          
  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    let receiptId=parseInt(this.props.match.params.rcid);

    let receiptData=appData.receipts.find( c => c.id==receiptId );

    return (
      <ReceiptPage
        receipt={receiptData}
      />
    );
    
  }

}
    
export default Page_Client;
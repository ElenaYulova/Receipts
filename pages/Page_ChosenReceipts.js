import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';

class Page_ReceiptList extends React.PureComponent {
  state= {
    receipts: this.props.receipts.receipts,
  }

  render() {
    let selectedReceiptsCnt = 0;
    let selectedReceiptsList = [];
    for (let i = 0; i < this.state.receipts.length; i++) {
      if (this.state.receipts[i].isSelected) {
        console.log(this.state.receipts[i]);
        selectedReceiptsCnt++;
        selectedReceiptsList.push(this.state.receipts[i]);
      }
    }
    
  
    return ( <div>
      {(selectedReceiptsCnt>0 && <ReceiptList heading = "Список избранных рецептов" receipts = {selectedReceiptsList}
 
      />) || <h2>Тут пока нет рецептов</h2>}
      </div>
    );
    
  }

}
const mapStateToProps = function (state) {
  return {
    receipts: state.receipts,
  };
};      
export default connect(mapStateToProps)(Page_ReceiptList);
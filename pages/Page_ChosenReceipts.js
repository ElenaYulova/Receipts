import React from 'react';

import ReceiptList from '../components/complex/ReceiptList';

import {connect} from 'react-redux';

class Page_ReceiptList extends React.PureComponent {
  state= {
    receipts: this.props.receipts.receipts,
  }

  render() {
    let i = 0;
    let filteredList = this.state.receipts.map(receipt => {
      
      if (receipt.isSelected){
          i++;
          return receipt;
      }
      
  })  
  
    return ( <div>
      {(i>0 && <ReceiptList heading = "Список избранных рецептов" receipts = {filteredList}
 
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
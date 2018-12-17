import React from 'react';
import PropTypes from 'prop-types';

import './NewReceiptModal.css';

import NewReceiptForm from './NewReceiptForm'

export default class ReceiptPage extends React.PureComponent {
    static propTypes = {
        modalOpen: PropTypes.func.isRequired,

    }

    state = {
        modalClose: this.props.modalOpen,
    }

    onESCPressed = (EO) => {
        if(EO.keyCode == 27){
            
            // выход по кнопке Esc
          this.state.modalClose();
          }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.onESCPressed, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.onESCPressed, false);
      }
    render () {
        return <div className="modal_container">
        
        <NewReceiptForm modalClose = {this.state.modalClose.bind(this)}>
        <button className="modal__close" onClick={this.state.modalClose}>X</button>
        </NewReceiptForm>
        </div>;
    }
}
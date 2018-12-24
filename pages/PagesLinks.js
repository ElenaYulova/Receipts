import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="nav_container">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/receiptlist" className="PageLink" activeClassName="ActivePageLink">Все рецепты</NavLink>
        <NavLink to="/chosenreceipts" className="PageLink" activeClassName="ActivePageLink">Избранные рецепты</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    
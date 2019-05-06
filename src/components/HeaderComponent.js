import React, { Component } from 'react';
import favicon from './HeaderFavicon.svg';
import '../css/HeaderComponent.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="left-links">
          <a>Résumé</a>
          <a>Shop</a>
        </div>
        <img className="favicon" src={favicon} alt="Favicon" />
      </header>
    );
  }
}

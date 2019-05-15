import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import favicon from './HeaderFavicon.svg';
import '../css/Global.css';
import '../css/HeaderComponent.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="left-links">
          {/* <a>Résumé</a>
          <a href='https://society6.com/linarts'>Shop</a> */}
        </div>
        <Link to="/">
          <img className="favicon" src={favicon} alt="Favicon" />
        </Link>
      </header>
    );
  }
}

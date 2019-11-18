import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import favicon from './HeaderFavicon.svg';
import Pdf from '../images/Resume.pdf';
import '../css/Global.css';
import '../css/HeaderComponent.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="links">
          <a href={Pdf} target = "_blank" rel="noopener noreferrer">Résumé</a>
          <NavLink to="/about">About</NavLink>
        </div>
        <Link to="/">
          <img className="favicon" src={favicon} alt="Favicon" />
        </Link>
      </header>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pdf from '../images/CarolinaLiResumeDec15.pdf';
import '../css/Global.css';
import '../css/HeaderComponent.css';

export default class HeaderComponent extends Component {

  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="links pull-right">
            <NavLink exact={true} className="link header-link" activeClassName="active-link" to="/">
              Work
            </NavLink>
            <NavLink className="link header-link" activeClassName="active-link" to="/about">
              About
            </NavLink >
            <a
              className="link header-link"
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </div>
        </header>
      </div>
    );
  }
}

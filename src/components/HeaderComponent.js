import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pdf from '../images/resume-2020-aug.pdf';
import '../css/Global.css';
import '../css/HeaderComponent.css';

export default class HeaderComponent extends Component {

  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="links pull-right">
            <NavLink exact={true} className="header-link" activeClassName="active-link" to="/">
              Work
            </NavLink>
            <NavLink className="header-link" activeClassName="active-link" to="/about">
              About
            </NavLink >
            <a
              className="header-link"
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

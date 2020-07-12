import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pdf from '../images/Resume.pdf';
import '../css/Global.css';
import '../css/HeaderComponent.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="links">
          <NavLink className="header-link" to="/">Work</NavLink>
          <NavLink className="header-link" to="/about">About</NavLink>
          <a className="header-link" href={Pdf} target = "_blank" rel="noopener noreferrer">Résumé</a>
        </div>
      </header>
    );
  }
}

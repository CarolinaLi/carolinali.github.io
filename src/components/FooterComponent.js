import React, { Component } from 'react';
import '../css/Global.css';
import '../css/Footer.css';

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <h2 className="footerh2">Let’s chat</h2>
        <p>ca2li@edu.uwaterloo.ca</p>
      </div>
    );
  }
}

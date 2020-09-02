import React, { Component } from 'react';
import '../css/Global.css';
import '../css/Footer.css';

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="container footer">
        <p>
          <a
            className="link"
            href="https://www.linkedin.com/in/carolinaaokeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="link footer-link"
            href="https://www.instagram.com/caro.linarts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="link footer-link"
            href="https://medium.com/@carolina.aoke.li"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          <a
            className="link footer-link"
            href="https://github.com/CarolinaLi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    );
  }
}

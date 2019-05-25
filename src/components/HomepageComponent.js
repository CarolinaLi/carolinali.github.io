import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';



export default class HompageComponent extends Component {
  // TO-DO: generalize this
  hoverDev() {
    var img = document.getElementById('dev');
    img.src = require('../images/dev-hover.png');
  }
  unhoverDev() {
    var img = document.getElementById('dev');
    img.src = require('../images/dev.png');
  }
  hoverUx() {
    var img = document.getElementById('ux');
    img.src = require('../images/ux-hover.png');
  }
  unhoverUx() {
    var img = document.getElementById('ux');
    img.src = require('../images/ux.png');
  }
  hoverArt() {
    var img = document.getElementById('art');
    img.src = require('../images/art-hover.png');
  }
  unhoverArt() {
    var img = document.getElementById('art');
    img.src = require('../images/art.png');
  }
  render() {
    return (
      <>
        <Header />
        <div className="block">
          <h1>CAROLINA LI</h1>
          <p className="intro">
            Hi! I code and create designs. I strive for simplicity and elegance
            in both.
            <br /> Click to take a look at my projects below.
          </p>
          <div className="social-media block">
            <a href="https://www.instagram.com/caro.linarts/">
              <img src={require('../images/instagram.svg')} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/carolinaaokeli/">
              <img src={require('../images/linkedin.svg')} alt="linkedin" />
            </a>
            <a href="https://github.com/CarolinaLi/">
              <img src={require('../images/github.svg')} alt="github" />
            </a>
          </div>
        </div>
        <div className="container-fluid block projects">
          <div className="row no-gutters">
            <div className="col-sm-4 project dev">
              <a href="https://github.com/CarolinaLi/">
                <img src={require('../images/dev.png')} alt="dev" id="dev" onMouseOver={this.hoverDev} onMouseOut={this.unhoverDev} />
              </a>
            </div>
            <div className="col-sm-4 project ux">
              <NavLink to="/ux">
                <img src={require('../images/ux.png')} alt="ux" id="ux" onMouseOver={this.hoverUx} onMouseOut={this.unhoverUx} />
              </NavLink>
            </div>
            <div className="col-sm-4 project art">
              <a href="https://society6.com/linarts/collection/gallery">
                <img src={require('../images/art.png')} alt="art" id="art" onMouseOver={this.hoverArt} onMouseOut={this.unhoverArt}/>
              </a>
            </div>
          </div>
        </div>
        <div className="block">
          <p className="paragraph">
            Most of my dev experience is in frontend, because I love the visual
            aspect. I’m currently exploring user experience and product design
            roles. My goal is to create delightful experiences for people while
            solving important problems.
          </p>
        </div>
        <div className="block">
          <img
            className="big-picture"
            src={require('../images/PortfolioToronto.jpg')}
            alt="profile"
          />
        </div>
        <div className="container block">
          <h2>Skills</h2>
          <div className="row mt-5">
            <div className="col-sm-4">
              <p>
                Typescript
                <br />
                Javascript
                <br />
                C++
                <br />C<br />
                C#
                <br />
                HTML
                <br />
                CSS
              </p>
            </div>
            <div className="col-sm-4">
              <p>
                React
                <br />
                Redux
                <br />
                Saga
                <br />
                Bootstrap
                <br />
                Powershell
                <br />
                Racket
                <br />
                Agile
              </p>
            </div>
            <div className="col-sm-4">
              <p>
                Wireframing
                <br />
                Prototyping
                <br />
                Sketch
                <br />
                <br />
                Watercolour
                <br />
                Digital Painting
                <br />
                Photoshop
              </p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

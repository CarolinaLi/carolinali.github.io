import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';



export default class HompageComponent extends Component {
  // TO-DO: generalize this
  hoverCrown() {
    var img = document.getElementById('crown');
    img.src = require('../images/dev-hover.png');
  }
  unhoverCrown() {
    var img = document.getElementById('crown');
    img.src = require('../images/crown.jpg');
  }
  hoverUx() {
    var img = document.getElementById('fridgeful');
    img.src = require('../images/fridgeful-hover.png');
  }
  unhoverUx() {
    var img = document.getElementById('fridgeful');
    img.src = require('../images/fridgeful.jpg');
  }
  hoverArt() {
    var img = document.getElementById('art');
    img.src = require('../images/art-hover.png');
  }
  unhoverArt() {
    var img = document.getElementById('art');
    img.src = require('../images/new-art.jpg');
  }
  render() {
    return (
      <>
        <Header />
        <div className="block">
          <h1>CAROLINA LI</h1>
          <p className="intro">
            Designer and artist. Currently a UX design intern at LCBO|next, 
            previously worked as a software developer intern
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
            <div className="col-4 project crown">
              <a href="https://github.com/CarolinaLi/">
                <img className="img-fluid" src={require('../images/crown.jpg')} alt="project-crown" id="crown" onMouseOver={this.hoverCrown} onMouseOut={this.unhoverCrown} />
              </a>
            </div>
            <div className="col-4 project art">
              <a href="https://society6.com/linarts/collection/gallery">
                <img src={require('../images/new-art.jpg')} alt="art" id="art" onMouseOver={this.hoverArt} onMouseOut={this.unhoverArt}/>
              </a>
            </div>
            <div className="col-4 project ux">
              <NavLink to="/ux">
                <img src={require('../images/fridgeful.jpg')} alt="project-fridgeful" id="fridgeful" onMouseOver={this.hoverUx} onMouseOut={this.unhoverUx} />
              </NavLink>
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
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4">
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

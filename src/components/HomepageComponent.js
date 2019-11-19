import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';



export default class HompageComponent extends Component {
  // TO-DO: generalize this
  hoverCrown() {
    var img = document.getElementById('crown');
    img.src = require('../images/crown-hover.jpg');
  }
  unhoverCrown() {
    var img = document.getElementById('crown');
    img.src = require('../images/crown.jpg');
  }
  hoverUx() {
    var img = document.getElementById('fridgeful');
    img.src = require('../images/fridgeful-hover.jpg');
  }
  unhoverUx() {
    var img = document.getElementById('fridgeful');
    img.src = require('../images/fridgeful.jpg');
  }
  hoverArt() {
    var img = document.getElementById('art');
    img.src = require('../images/new-art-hover.jpg');
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
            <a href="https://www.instagram.com/caro.linarts/" target = "_blank" rel="noopener noreferrer">
              <img src={require('../images/instagram.svg')} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/carolinaaokeli/" target = "_blank" rel="noopener noreferrer">
              <img src={require('../images/linkedin.svg')} alt="linkedin" />
            </a>
            <a href="https://github.com/CarolinaLi/" target = "_blank" rel="noopener noreferrer">
              <img src={require('../images/github.svg')} alt="github" />
            </a>
          </div>
        </div>
        <div className="container-fluid block projects">
          <div className="row no-gutters">
            <div className="col-4 project crown">
              <a href="https://medium.com/@carolina.aoke.li/designing-a-product-recommendation-system-for-lcbo-customers-f6063c675c75" target = "_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={require('../images/crown.jpg')} alt="project-crown" id="crown" onMouseOver={this.hoverCrown} onMouseOut={this.unhoverCrown} />
              </a>
            </div>
            <div className="col-4 project art">
              <a href="https://society6.com/linarts/collection/gallery" target = "_blank" rel="noopener noreferrer">
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
        <FooterComponent />
      </>
    );
  }
}

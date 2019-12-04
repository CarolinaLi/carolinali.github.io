import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';
import art from '../images/new-art.jpg';
import artHover from '../images/new-art-hover.jpg';
import crown from '../images/crown.jpg';
import crownHover from '../images/crown-hover.jpg';
import fridgeful from '../images/fridgeful.jpg';
import fridgefulHover from '../images/fridgeful-hover.jpg';



export default class HompageComponent extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      hoverArt: false,
      hoverCrown: false,
      hoverFridgeful: false
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.unhoverHandler = this.unhoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  hoverHandler(field) {
    this.setState({
      [field]: true
    });
  }
  unhoverHandler(field) {
    this.setState({
      [field]: false
    });
  }

  onClickHandler(destination) {
    window.open(destination);
  }

  render() {
    return (
      <>
        <Header />
        <h1 className="black">Hi! My name is</h1>
        <h1>Carolina Li.</h1>
          <p className="intro">
            {'I\'m currently a UX design intern at'} 
            <a className="text-link" href="https://www.lcbonext.com/" target = "_blank" rel="noopener noreferrer">
            LCBO
            </a> 
            {' and a computer science student specializing in HCI at the University of Waterloo. Previously I worked as a software developer intern.'}
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
        <div className="container-fluid block projects">
          <div className="row no-gutters">
            <div className="col-4 project crown">
              <img className="img-fluid" src={this.state.hoverCrown ? crownHover : crown} 
                alt="project-crown"  onMouseOver={() => this.hoverHandler('hoverCrown')} onMouseOut={() => this.unhoverHandler('hoverCrown')} 
                onClick={() => this.onClickHandler('https://medium.com/@carolina.aoke.li/designing-a-product-recommendation-system-for-lcbo-customers-f6063c675c75')}/>
            </div>
            <div className="col-4 project art">
              <img className="img-fluid" src={this.state.hoverArt ? artHover : art} 
                alt="art"  onMouseOver={() => this.hoverHandler('hoverArt')} onMouseOut={() => this.unhoverHandler('hoverArt')} 
                onClick={() => this.onClickHandler('https://society6.com/linarts/collection/gallery')} />
            </div>
            <div className="col-4 project ux">
              <NavLink to="/ux">
                <img className="img-fluid" src={this.state.hoverFridgeful ? fridgefulHover : fridgeful} 
                  alt="fridgeful-project"  onMouseOver={() => this.hoverHandler('hoverFridgeful')} onMouseOut={() => this.unhoverHandler('hoverFridgeful')} />
              </NavLink>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

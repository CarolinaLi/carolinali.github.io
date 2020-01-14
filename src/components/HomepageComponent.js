import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';
import art from '../images/new-art.jpg';
import artHover from '../images/new-art-hover.jpg';
import designSystem from '../images/design-system.jpg';
import designSystemHover from '../images/design-system-hover.jpg';
import ciroc from '../images/ciroc.jpg';
import cirocHover from '../images/ciroc-hover.jpg';
import crown from '../images/crown.jpg';
import crownHover from '../images/crown-hover.jpg';
import fridgeful from '../images/fridgeful.jpg';
import fridgefulHover from '../images/fridgeful-hover.jpg';



export default class HompageComponent extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      hoverArt: false,
      hoverDesignSystem: false,
      hoverCiroc: false,
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
          <h1 className="black title">Hi! My name is</h1>
          <h1 className="title">Carolina Li.</h1>
          <p className="intro">
            {'I\'m currently a UX design intern at '} 
            <a className="text-link" href="https://www.lcbonext.com/" target = "_blank" rel="noopener noreferrer">
            LCBO
            </a> 
            {' and a computer science student specializing in HCI at the University of Waterloo. Previously I worked as a software developer intern.'}
          </p>
          <div className="social-media block">
            <a href="https://www.instagram.com/caro.linarts/" target = "_blank" rel="noopener noreferrer">
              <img className="social-media-icon" src={require('../images/instagram.svg')} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/carolinaaokeli/" target = "_blank" rel="noopener noreferrer">
              <img className="social-media-icon" src={require('../images/linkedin.svg')} alt="linkedin" />
            </a>
            <a href="https://github.com/CarolinaLi/" target = "_blank" rel="noopener noreferrer">
              <img className="social-media-icon" src={require('../images/github.svg')} alt="github" />
            </a>
            <img className="scroll-down" src={require('../images/arrow_downward.svg')} alt="scroll down" />
          </div>
          
        <div className="container-fluid block projects">
          <div className="row homepage-row">
            <div className="col-md-6 pl-0 pr-3 project">
              <img className="img-fluid" src={this.state.hoverCrown ? crownHover : crown} 
                alt="project-crown"  onMouseOver={() => this.hoverHandler('hoverCrown')} onMouseOut={() => this.unhoverHandler('hoverCrown')} 
                onClick={() => this.onClickHandler('https://medium.com/@carolina.aoke.li/designing-a-product-recommendation-system-for-lcbo-customers-f6063c675c75')}/>
              {/* <div className="popup-content">
                <p>Testing content</p>
              </div> */}
            </div>
            <div className="col-md-6 pl-0 pr-3 project">
              <NavLink to="/ciroc">
                <img className="img-fluid" src={this.state.hoverCiroc ? cirocHover : ciroc} 
                  alt="ciroc-project"  onMouseOver={() => this.hoverHandler('hoverCiroc')} onMouseOut={() => this.unhoverHandler('hoverCiroc')} />
              </NavLink>
            </div>
          </div>
          <div className="row homepage-row">
            <div className="col-md-6 pl-0 pr-3 project">
              <NavLink to="/lcboDesignSystem">
                <img className="img-fluid" src={this.state.hoverDesignSystem ? designSystemHover : designSystem} 
                  alt="lcbo-design-system-project"  onMouseOver={() => this.hoverHandler('hoverDesignSystem')} onMouseOut={() => this.unhoverHandler('hoverDesignSystem')} />
              </NavLink>
            </div>
            <div className="col-md-6 pl-0 pr-3 project fridgeful">
              <NavLink to="/fridgeful">
                <img className="img-fluid" src={this.state.hoverFridgeful ? fridgefulHover : fridgeful} 
                  alt="fridgeful-project"  onMouseOver={() => this.hoverHandler('hoverFridgeful')} onMouseOut={() => this.unhoverHandler('hoverFridgeful')} />
              </NavLink>
            </div>
          </div>
          <div className="row homepage-row">
            <div className="col pl-0 pr-3 project art">
              <img className="img-fluid" src={this.state.hoverArt ? artHover : art} 
                alt="art"  onMouseOver={() => this.hoverHandler('hoverArt')} onMouseOut={() => this.unhoverHandler('hoverArt')} 
                onClick={() => this.onClickHandler('https://society6.com/linarts/collection/gallery')} />
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/Global.css';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';
import designSystem from '../images/design-system.jpg';
import designSystemHover from '../images/design-system-hover.jpg';
import ciroc from '../images/ciroc.jpg';
import cirocHover from '../images/ciroc-hover.jpg';
import crown from '../images/crown.jpg';
import crownHover from '../images/crown-hover.jpg';
import fridgeful from '../images/fridgeful.jpg';
import fridgefulHover from '../images/fridgeful-hover.jpg';
import Pdf from '../images/resume-2020-aug.pdf';
import TileComponent from './TileComponent';

export default class HompageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverArt: false,
      hoverDesignSystem: false,
      hoverCiroc: false,
      hoverCrown: false,
      hoverFridgeful: false,
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.unhoverHandler = this.unhoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);

    this.projectRef = React.createRef();
  }

  hoverHandler(field) {
    this.setState({
      [field]: true,
    });
  }
  unhoverHandler(field) {
    this.setState({
      [field]: false,
    });
  }

  onClickHandler(destination) {
    window.open(destination);
  }

  render() {
    return (
      <>
        <Header />
        <div className="container text-section">
          <h1 className="title">
            <span className="black">Hey, there! </span>
            <NavLink classname="link" to="/about">
              <span className="text-link">{'I\'m Carolina.'}</span>
            </NavLink>
          </h1>
          <p className="text">
            {
              'Currently studying CS & HCI at the University of Waterloo. I’m a product designer who’s passionate about visual experiences, strategy, and sustainability. Previously, I designed at'
            }
            <a
              className="link text-link"
              href="https://www.ea.com/en-ca/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              EA
            </a>
            {' and'}
            <a
              className="link text-link"
              href="https://www.lcbonext.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LCBO
            </a>
            {'.'}
            <br />
            <br />
            {'Reach me at'}
            <a
              className="link text-link"
              href="mailto:ca2li@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              ca2li@uwaterloo.ca
            </a>
            {' or discover my works below'}
          </p>
          <img
            className="scroll-down"
            src={require('../images/arrow_downward.svg')}
            alt="scroll down"
            onClick={() => {
              if (this.projectRef && this.projectRef.current) {
                this.projectRef.current.scrollIntoView();
              }
            }}
          />
        </div>
        <div className="container" ref={this.projectRef}>
          <div className="row">
            <div className="col-md-6 pl-0 pr-3">
              <TileComponent 
                image={'slack-hero.png'}
                title={'Redesigning Slack’s sign in process'}
                description={'Personal project exploring ways to improve Slack’s sign in process and how to increase user satisfaction'}
                buttonText={'View case study'}
                buttonColor={'#4D1D52'}
              />
            </div>
          </div>
        </div>
        <div className="container block projects">
          <div className="row homepage-row">
            <div className="col-md-6 pl-0 pr-3 project">
              <img
                className="img-fluid"
                src={this.state.hoverCrown ? crownHover : crown}
                alt="project-crown"
                onMouseOver={() => this.hoverHandler('hoverCrown')}
                onMouseOut={() => this.unhoverHandler('hoverCrown')}
                onClick={() =>
                  this.onClickHandler(
                    'https://medium.com/@carolina.aoke.li/designing-a-product-recommendation-system-for-lcbo-customers-f6063c675c75'
                  )
                }
              />
            </div>
            <div className="col-md-6 pl-0 pr-3 project fridgeful">
              <NavLink to="/fridgeful">
                <img
                  className="img-fluid"
                  src={this.state.hoverFridgeful ? fridgefulHover : fridgeful}
                  alt="fridgeful-project"
                  onMouseOver={() => this.hoverHandler('hoverFridgeful')}
                  onMouseOut={() => this.unhoverHandler('hoverFridgeful')}
                />
              </NavLink>
            </div>
          </div>
          <div className="row homepage-row">
            <div className="col-md-6 pl-0 pr-3 project">
              <NavLink to="/lcboDesignSystem">
                <img
                  className="img-fluid"
                  src={
                    this.state.hoverDesignSystem
                      ? designSystemHover
                      : designSystem
                  }
                  alt="lcbo-design-system-project"
                  onMouseOver={() => this.hoverHandler('hoverDesignSystem')}
                  onMouseOut={() => this.unhoverHandler('hoverDesignSystem')}
                />
              </NavLink>
            </div>
            <div className="col-md-6 pl-0 pr-3 project">
              <NavLink to="/ciroc">
                <img
                  className="img-fluid"
                  src={this.state.hoverCiroc ? cirocHover : ciroc}
                  alt="ciroc-project"
                  onMouseOver={() => this.hoverHandler('hoverCiroc')}
                  onMouseOut={() => this.unhoverHandler('hoverCiroc')}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container text-section outro">
          <h1 className="title">{'Let\'s chat'}</h1>
          <p className="text">
            {'Email me at'}
            <a
              className="link text-link"
              href="mailto:ca2li@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              ca2li@uwaterloo.ca
            </a>
            {' and let\'s talk about anything! Or, check out my'}
            <a
              className="link text-link"
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              résumé
            </a>
          </p>
        </div>
        <FooterComponent />
      </>
    );
  }
}

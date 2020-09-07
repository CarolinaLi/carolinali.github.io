import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/Global.css';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';
import Pdf from '../images/resume-2020-aug.pdf';
import TileComponent from './TileComponent';

export default class HomepageComponent extends Component {
  constructor(props) {
    super(props);
    this.projectRef = React.createRef();
  }

  render() {
    return (
      <>
        <Header />
        <div className="container text-section">
          <div className="intro">
            <h1 className="title">
              <span className="black">Hey, there! </span>
              <NavLink className="link" to="/about">
                <span className="text-link">{'I’m Carolina.'}</span>
              </NavLink>
            </h1>
            <p className="text">
              {
                'Currently studying CS & HCI at the University of Waterloo. I’m a product designer who’s passionate about visual experiences, strategy, and sustainability. Previously, I designed at '
              }
              <a
                className="link text-link"
                href="https://www.ea.com/en-ca/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                EA
              </a>
              {' and '}
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
              {'Reach me at '}
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
              className="arrow"
              src={require('../images/arrow_downward.svg')}
              alt="scroll down"
              onClick={() => {
                if (this.projectRef && this.projectRef.current) {
                  this.projectRef.current.scrollIntoView();
                }
              }}
            />
          </div>
        </div>
        <div className="container text-section" ref={this.projectRef}>
          <div className="row">
            <div className="col-md-6 pl-0 pr-3 pb-5">
              <NavLink to="/slack">
                <TileComponent
                  image={'slack-hero.png'}
                  title={'Redesigning Slack’s sign in process'}
                  description={
                    'Personal project exploring ways to improve Slack’s sign in process and how to increase user satisfaction'
                  }
                  buttonText={'View case study'}
                  buttonColor={'#4D1D52'}
                />
              </NavLink>
            </div>
            <div className="col-md-6 pl-0 pr-3 pb-5">
              <NavLink to="/ea">
                <TileComponent
                  image={'ea-card.png'}
                  title={'Electronic Arts internship'}
                  description={
                    'Worked on products that enhance how players experience the EA community and how they connect with games'
                  }
                  buttonText={'Read more'}
                  buttonColor={'#121142'}
                />
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-0 pr-3">
              <NavLink to="/lcbo">
                <TileComponent
                  image={'lcbo-hero.png'}
                  title={'LCBO internship'}
                  description={
                    'Designed and deployed an in-store beverage recommendation app and started our first design system'
                  }
                  buttonText={'View work'}
                  buttonColor={'#01B456'}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container text-section outro">
          <h1 className="title">{'Let\'s chat'}</h1>
          <p className="text">
            {'Email me at '}
            <a
              className="link text-link"
              href="mailto:ca2li@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              ca2li@uwaterloo.ca
            </a>
            {' and let\'s talk about anything! Or, check out my '}
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

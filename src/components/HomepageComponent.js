import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/Global.css';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';
import Pdf from '../images/CarolinaLiResumeDec5.pdf';
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
                'I’m a product designer currently studying CS, HCI & Fine Arts at the University of Waterloo. Previously, I researched and designed for new users at '
              }
              <a
                className="link text-link"
                href="https://coda.io/welcome"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coda
              </a>
              {' as a '}
              <a
                className="link text-link"
                href="https://fellows.kleinerperkins.com/meet-the-fellows/2021/design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kleiner Perkins Fellow
              </a>
              {'.'}
              <br />
              <br />
              {'Reach me at '}
              <a
                className="link text-link"
                href="mailto:carolina.aoke.li@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                carolina.aoke.li@gmail.com
              </a>
              {' or discover my work below.'}
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
              <NavLink to="/coda">
                <TileComponent
                  image={'coda-card-2.png'}
                  title={'Coda internship'}
                  description={
                    'Researched how new users experience Coda’s document editor and designed solutions to friction points.'
                  }
                  buttonText={'Read more'}
                  buttonColor={'#FF7453'}
                />
              </NavLink>
            </div>
            <div className="col-md-6 pl-0 pr-3 pb-5">
              <NavLink to="/aphrodite">
                <TileComponent
                  image={'ap-card.jpg'}
                  title={'The Aphrodite Project'}
                  description={
                    'Designed our first website and onboarding flow, successfully authenticating 11k+ students for Valentine’s 2021.'
                  }
                  buttonText={'Read more'}
                  buttonColor={'#F31F52'}
                />
              </NavLink>
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-6 pl-0 pr-3 pb-5">
              <NavLink to="/slack">
                <TileComponent
                  image={'slack-hero.png'}
                  title={'Redesigning Slack’s sign in process'}
                  description={
                    'Case study exploring ways to improve Slack’s sign in process, resulting in increased user satisfaction.'
                  }
                  buttonText={'Read more'}
                  buttonColor={'#4D1D52'}
                />
              </NavLink>
            </div>
            <div className="col-md-6 pl-0 pr-3 pb-5">
              <a
                href="https://www.notion.so/230ab95c1afd45c89755c2e98370b0ef?v=c4abdf3a8b5649b5845013eb9fd3ca0a"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TileComponent
                  image={'daily-design-hero.jpg'}
                  title={'100 day design challenge'}
                  description={
                    'Learned about design topics like UI, motion and product thinking every day for 100 days. See the gallery!'
                  }
                  buttonText={'Read more'}
                  buttonColor={'#3430B9'}
                />
              </a>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6 pl-0 pr-3 pb-5">
              <NavLink to="/ea">
                <TileComponent
                  image={'ea-card.png'}
                  title={'Electronic Arts internship'}
                  description={
                    'Designed products that enhance how players experience the EA community and how they connect with games.'
                  }
                  buttonText={'Read more'}
                  buttonColor={'#121142'}
                />
              </NavLink>
            </div>
            <div className="col-md-6 pl-0 pr-3">
              <NavLink to="/lcbo">
                <TileComponent
                  image={'lcbo-hero.jpg'}
                  title={'LCBO internship'}
                  description={
                    'Designed and deployed an in-store beverage recommendation app and started our first design system.'
                  }
                  buttonText={'Read more'}
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
              href="mailto:carolina.aoke.li@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              carolina.aoke.li@gmail.com
            </a>
            {' and let\'s talk about anything! Or, check out my '}
            <a
              className="link text-link"
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              résumé.
            </a>
          </p>
        </div>
        <FooterComponent />
      </>
    );
  }
}

import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import FooterComponent from './FooterComponent';
import '../css/Global.css';
import '../css/AboutPageComponent.css';
import '../css/HomepageComponent.css';
import firstPic from '../images/about1.jpg';
import secondPic from '../images/about2.jpg';

export default class AboutPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.unhoverHandler = this.unhoverHandler.bind(this);
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

  render() {
    return (
      <>
        <Header />
        <div className="container text-section">
          <div className="intro">
            <div className="row no-gutters about-row">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src={this.state.hover ? secondPic : firstPic}
                  alt="portrait"
                  onMouseOver={() => this.hoverHandler('hover')}
                  onMouseOut={() => this.unhoverHandler('hover')}
                />
              </div>
              <div className="col-lg-6">
                <h1 className="about-title" align="left">
                  Nice to meet you!
                </h1>
                <br></br>
                <p className="about-text" align="left">
                  A bit about me —
                </p>
                <br></br>
                <p className="about-text" align="left">
                  I started as a software developer and transitioned to product
                  design because I love the human and visual aspect of tech.
                  I’ve been drawing and painting since I was a kid and started
                  running my {' '}
                  <a
                    className="link text-link"
                    href="https://society6.com/linarts/collection/gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    art store
                  </a>{' '}
                  in high school as a side hustle. Though visuals are what
                  initially drew me to design, I’ve learned through my
                  internships that it goes far beyond just aesthetics.
                </p>
                <br></br>
                <p className="about-text" align="left">
                  Along with my computer science degree, I’m pursuing a
                  specialization in HCI, and a minor in Fine Arts.
                </p>
                <br></br>
                <p className="about-text" align="left">
                  In my free time, I design at the {' '}
                  <a
                    className="link text-link"
                    href="https://thevarsity.ca/2020/07/06/how-a-matchmaking-algorithm-paired-up-thousands-of-hopeless-u-of-t-romantics/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aphrodite Project
                  </a>
                  , swim, bike, run, read books and work on my next art project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <FooterComponent />
      </>
    );
  }
}
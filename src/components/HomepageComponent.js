import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';
import FooterComponent from './FooterComponent';

export default class HompageComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="block">
          <h1>CAROLINA LI</h1>
          <p className="intro">
            Hi! I code and create designs. I strive for simplicity and elegance
            in both.
            <br /> Take a look at my projects below.
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
            <div className="col-sm-4 project">
              <a href="https://github.com/CarolinaLi/">
                <img src={require('../images/green-2.png')} alt="dev" />
              </a>
            </div>
            <div className="col-sm-4 project">
              <Link to="/ux">
                <img src={require('../images/blue-2.png')} alt="ux" />
              </Link>
            </div>
            <div className="col-sm-4 project">
              <a href="https://society6.com/linarts/collection/gallery">
                <img src={require('../images/red-2.png')} alt="art" />
              </a>
            </div>
          </div>
        </div>
        <div className="block">
          <p className="paragraph">
            Most of my dev experience is in frontend, because I love the visual
            aspect. I’m currently searching for user experience design roles. My
            goal is to create delightful experiences for people while solving
            important problems.
          </p>
        </div>
        <div className="block">
          <img
            className="big-picture"
            src={require('../images/PortfolioToronto.jpg')}
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import '../css/HomepageComponent.css';

export default class HompageComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="block">
          <h1>CAROLINA LI</h1>
          <p className="intro">
          Hi! I study computer science at uWaterloo and art in my free time.
            <br /> Welcome to my portfolio.
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
        <div className="container-fluid block">
          <div className="row no-gutters">          
            <div className="col-sm-4">
              <Link to="/dev">
                <img src={require('../images/green.png')} alt="dev" />
              </Link>
            </div>
            <div className="col-sm-4">
              <Link to="/ux">
                <img src={require('../images/blue.png')} alt="ux" />
              </Link>
            </div>
            <div className="col-sm-4">
              <Link to="/art">
                <img src={require('../images/red.png')} alt="art" />
              </Link>
            </div>
          </div>
        </div>
        <div className="block">
          <p className="paragraph">
          I work mainly in frontend development because I love the visual
          aspect. I’m currently exploring user experience design. My goal is to
          create delightful experiences for people while solving meaningful
          problems.
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
        <div className="container-fluid footer">
          <h2>Let’s talk</h2>
          <p>ca2li@edu.uwaterloo.ca</p>
        </div>
      </>
    );
  }
}
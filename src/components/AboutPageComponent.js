import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import FooterComponent from './FooterComponent';
import '../css/Global.css';
import '../css/AboutPageComponent.css';
import '../css/HomepageComponent.css';

export default class AboutPageComponent extends Component {
  render() {  
    return (
      <>
        <Header />
        <div className="container text-section">
          <div className="row no-gutters about-row">
            <div className="col-lg-6">
              <img className="img-fluid" src={require('../images/portrait.png')} 
                alt="portrait" />
            </div>
            <div className="col-lg-6">
              <h1 className="about-title" align="left" >Nice to meet you!</h1>
              <br></br>
              <p className="about-text" align="left">
                A bit about me —
              </p>
              <br></br>
              <p className="about-text" align="left">
                I started as a software developer and transitioned to design because 
                I love the human and visual aspect of tech. I’ve been drawing and 
                painting since I was a kid and started running my<a className="link text-link" href="https://society6.com/linarts/collection/gallery">
                art store</a> in high school as a side hustle. 
              </p>
              <br></br>
              <p className="about-text" align="left">
                In my free time, I design at the<a className="link text-link" href="https://thevarsity.ca/2020/07/06/how-a-matchmaking-algorithm-paired-up-thousands-of-hopeless-u-of-t-romantics/">
                Aphrodite Project</a>, swim, bike, run, read books 
                and work on my next art project.
              </p>
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
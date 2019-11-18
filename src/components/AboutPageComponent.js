import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import FooterComponent from './FooterComponent';
import '../css/Global.css';
import '../css/AboutPageComponent.css';

export default class UXPageComponent extends Component {
  render() {  
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-6">
              <img className="img-fluid" src={require('../images/portrait.png')} 
                alt="portrait" />
            </div>
            <div className="col-6">
              <h1 className="text" align="left" >hey there</h1>
              <p className="text" align="left">
                Nice to meet you! I’m Carolina, a UX Design intern at LCBO|next 
                and a computer science student at uWaterloo.
              </p>
              <br></br>
              <p className="text" align="left">
                I started as a software developer and transitioned to design because 
                I love the human and visual aspect of tech. I’ve been drawing and 
                painting since I was a kid and started running my art store in high 
                school as a side hustle. 
              </p>
              <br></br>
              <p className="text" align="left">
                In my free time, I design at WATonomous, swim, bike, run, read books 
                and work on my next art project.
              </p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}
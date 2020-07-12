import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';

export default class LCBODesignSystemComponent extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="case-title block">LCBO Design System</h1>
          <h2 className="case-subtitle light">Research and Organization</h2>
          <img
            className="block big-picture"
            src={require('../../images/design-system-header.jpg')}
            alt="design system snapshot"
          />
          <p className="paragraph">
            <b>Role: </b> Research, creating the design system <br />
            <b>Timeline: </b> 1 week in December 2019 <br />
            <b>Team: </b> Myself <br />
            <b>Tools Used: </b> Invision Design System Manager <br />
          </p>
          <div className="paragraph">
            <h3> {'Creating LCBO\'s first design system'} </h3>
            <p>
              {'LCBO’s innovation lab gets a new team every four months, so each product looks and feels quite different. In an effort to deliver a consistent user experience, I started laying down the backbone for a design system during the last week of my internship.'}
              <br />
              <br />
              Before I started, I wanted to make sure there was a real 
              need for a design system. I conducted interviews with each developer, 
              the product manager, the lab director, and the previous designer.
              <br />
              <br />
              Both the developers and the designer revealed that it was difficult 
              to start new projects with no visual references. Having a design system 
              would help the team work confidently, knowing that their product is on-brand. 
              It also helps with collaboration and communication, because it’s easier to 
              discuss something when you can see it.
              <br />
              <br />
              The design system needs to be easy to update, since each project typically 
              lasts a couple of months. From the interviews, I discovered that the greatest 
              needs are having assets, colour schemes, and typography guidelines readily 
              available.
              <br />
              <br />
              Most of this project can’t be displayed publicly, but please reach out if 
              you want to learn more.
            </p>
          </div>
        </div>
        <FooterComponent />
    </>
    );
  }
}
import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import CirocAnimation from '../../images/ciroc.gif';
import FooterComponent from '../FooterComponent';

export default class CirocComponent extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="case-title block">LCBO Group Shopping List</h1>
          <h2 className="case-subtitle light">Mobile App</h2>
          <img
            className="block big-picture"
            src={require('../../images/ciroc-header.jpg')}
            alt="phone snapshot"
          />
          <p className="paragraph">
            <b>Role: </b> Research, User Interviews, Wireframing, Prototyping,
            Visual Design <br />
            <b>Timeline: </b> 3 weeks, November - December 2019 <br />
            <b>Team: </b> Product Manager: Pronoy Chaudhuri; Developers: Bill
            Sheng and Justin Cai <br />
            <b>Tools Used: </b> Figma, Photoshop, Illustrator <br />
          </p>
          <div className="paragraph">
            <div className="row">
              <div className="col-lg-8">
                <h3> {'Hassle-free party planning'} </h3>
                <p>
                  The LCBO Group Shopping List is a way for multiple people to put
                  together one wish list, so one person can conveniently pick up
                  everything for the whole group.
                  <br />
                  <br />
                  Instead of searching through endless chats for alcohol requests,
                  party planners can use this app to build a list of products that
                  satisfies everyone. Features include adding group members,
                  checking if all products are available at the user’s selected
                  store, and finding substitute products for anything that’s not in
                  stock.
                  <br />
                  <br />
                  After research, prototyping, and testing, I finished the
                  interfaces for the MVP, and the app is scheduled to be built in
                  January 2020. If you’d like to hear more about this project,
                  please reach out!
                </p>
              </div>
              <div className="col-lg-4 mt-5">
                <img className="phone" src={CirocAnimation}></img>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

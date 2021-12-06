import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import { motion } from 'framer-motion';
import { variantsImg, variantsFrame } from '../ImageVariants';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import interns from '../../images/ea-interns.png';
import internsHover from '../../images/ea-interns-hover.png';
import FooterComponent from '../FooterComponent';

export default class EAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverProblem: false,
      hoverSolutionAuto: false,
      zoomedFooter: false,
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.unhoverHandler = this.unhoverHandler.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
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

  zoomIn(field) {
    this.setState({
      [field]: true,
    });
  }

  zoomOut(field) {
    this.setState({
      [field]: false,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <div className="container-fluid container-hero">
          <img
            className="hero"
            src={require('../../images/ea-hero.png')}
            alt="EA logo on dark background"
          />
        </div>
        <div className="container content">
          <h1 className="title case-study-title">
            EA product design internship
          </h1>
          <div className="container-md block">
            <p className="center-with-margins">
              <p className="text-large">
                I worked on the next generation of{' '}
                <a
                  className="link text-link"
                  href="https://www.origin.com/can/en-us/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Origin
                </a>
                , which is our game distribution platform.{' '}
                <span className="ea-highlight">
                  I also designed and deployed a website for an upcoming social
                  experience product.
                </span>
              </p>
            </p>
            <br></br>
            <div className="row center-with-margins">
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">TIMELINE</b>
                <p>May - Aug 2020</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">MY ROLE</b>
                <p>Visual design, component design, information architecture</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">DELIVERABLES</b>
                <p>Four projects, high fidelity mockups, one Google site</p>
              </div>
            </div>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">
                CHAPTER 1: STEPPING INTO THE ROLE
              </b>
            </p>
            <p className="text-large">
              I redesigned the footer for the next generation of Origin.
            </p>
            <p className="center-with-margins">
              It was my first time working on a product with millions of users,
              and I was responsible for taking the project from requirement
              gathering to handoff.
            </p>
            <br></br>
            <div className="row center-with-margins">
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-1.png')}
                  alt="Notes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">1. GATHERING INFO</b>
                <p>
                  I talked to a cross-functional group of stakeholders to
                  develop how I think about organizing each element.
                </p>
              </div>
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-2.png')}
                  alt="Four footer wireframes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">2. WIREFRAMES</b>
                <p>
                  From the chats, I learned to organize elements based on how
                  our players would likely interact with them.
                </p>
              </div>
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-3.png')}
                  alt="Footer UI, mobile breakpoint"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">3. HIGH FIDELITY DESIGNS</b>
                <p>
                  I designed UI that adheres to our Design System standards of
                  spacing, typography, colours, and components.
                </p>
              </div>
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-4.png')}
                  alt="Spec file"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">4. HAND OFF</b>
                <p>
                  I created a spec file that outlines implementation
                  information. After the code merge, I made sure the site
                  matches the designs.
                </p>
              </div>
            </div>
            <br></br>
            <p className="center-with-margins">
              <p className="text-large">
                <span className="ea-highlight">
                  A challenge I faced was how to organize each link and
                  selector.
                </span>
              </p>
              In my original approach, I wanted to display elements in order of
              importance.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/ea-footer-reqs.png')}
                alt="List of things that go in the footer"
                style={{ maxWidth: '100%' }}
              />
            </p>
            <p className="center-with-margins">
              Later I realized that it’s better to group together elements based
              on how they’ll be used.<br></br>• Helpful links are given more
              prominence than links only included for legal reasons.<br></br>•
              Using font, spacing, and colours to create a home for each
              section.<br></br>• The same layout must extend to different
              breakpoints and regional requirements.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedFooter
                    ? this.zoomOut('zoomedFooter')
                    : this.zoomIn('zoomedFooter')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFooter ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ea-footer.png')}
                alt="Footer UI"
                onClick={() =>
                  this.state.zoomedFooter
                    ? this.zoomOut('zoomedFooter')
                    : this.zoomIn('zoomedFooter')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFooter ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <p className="text-monospace center-with-margins">
              <small>The footer component, desktop view.</small>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">CHAPTER 2: UNDERSTANDING GOALS</b>
            </p>
            <p className="center-with-margins">
              <p className="text-large">
                One month into my internship, I onboarded into a new social
                experience project, where I created a documentation site.
              </p>
              <br></br>
              Before starting the site, I worked with the team to come up with
              overarching goals:
              <br></br>
              <br></br>• Pull together and organize all existing documentation
              so a cross-functional group can find the information that’s most
              relevant to them quickly and easily.
              <br></br>• Help new team members with project onboarding.
              <br></br>
              <br></br>
            </p>
            <div className="row center-with-margins">
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-site-1.png')}
                  alt="Four footer wireframes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">1. RESEARCH</b>
                <p>
                  What does a successful site look like? I interviewed team
                  members both inside and outside of the project to gather their
                  goals and expectations.
                </p>
              </div>
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-site-2.png')}
                  alt="Four footer wireframes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">2. SITE ARCHITECTURE</b>
                <p>
                  With existing documentation in mind, I worked with my
                  design-leads and manager to organize pages into categories
                  that would most benefit the user.
                </p>
              </div>
              <div className="col-sm-6 mb-3 pl-0">
                <img
                  src={require('../../images/ea-site-3.png')}
                  alt="Four footer wireframes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">3. PAGE CONTENT HIERARCHY</b>
                <p>
                  I created templates for each page type to organize the
                  information.
                </p>
              </div>
              <div className="col-sm-6 mb-3 pl-0">
                <a
                  href="mailto:carolina.aoke.li@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require('../../images/ea-site-4.png')}
                    alt="Four footer wireframes"
                    style={{ maxWidth: '100%', marginBottom: '1rem' }}
                  />
                </a>
                <b className="text-monospace">4. VISUALS</b>
                <p>
                  The final site colours match the product’s UI. Our team
                  designed assets, such as cards, that are easily adaptable so
                  we can build pages quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">OVERCOMING HURDLES</b>
            </p>
            <p className="text-large">
              From interviews, I learned my teammates’ expectations for the
              ideal site structure, but when I started to implement this, I
              realized it wouldn’t match our existing docs.
            </p>
            <p className="center-with-margins">
              Working collaboratively, I pivoted to an architecture that best
              showcases our current assets, and learned that{' '}
              <b>user interviews only give us information, not instructions.</b>
            </p>
            <p className="text-large">
              <span className="ea-highlight">
                This site is now being used in EA teams across the world,
              </span>{' '}
              and helps onboard new members into the project’s ever-growing
              team.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">CHAPTER 3: WRAPPING IT UP</b>
            </p>
            <p className="text-large">
              For the rest of the summer, I worked on hard skills.
            </p>
            <p className="center-with-margins">
              • Visual and interaction design.<br></br>• Practicing product
              thinking.<br></br>• Getting more familiar with design deliverable
              expectations.<br></br>
              <br></br>
              <b>
                My final project was creating new icons for web navigation,
                where I gained newfound appreciation for nuances in iconography.
              </b>
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/ea-icons.png')}
                alt="Icons are protected content"
              />
              <p className="text-monospace center-with-margins">
                <small>Secret icons.</small>
              </p>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">
                LEARNINGS AND WHAT I’D DO DIFFERENTLY
              </b>
            </p>
            <p className="text-large">
              I used to think that there’s a perfect design somewhere out there,
              and that it was the designer’s job to find it.{' '}
              <span className="ea-highlight">
                Now I see that it’s more about balancing priorities.
              </span>
            </p>
            <p className="center-with-margins">
              I learned that it’s important to be comfortable with ambiguity and
              making decisions with incomplete information.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={this.state.hoverInterns ? internsHover : interns}
                alt="Current Slack sign in flow"
                onMouseOver={() => this.hoverHandler('hoverInterns')}
                onMouseOut={() => this.unhoverHandler('hoverInterns')}
              />
              <p className="text-monospace center-with-margins">
                <small>{'Intern class of 2020 <3'}</small>
              </p>
              <p className="text-large">
                If I could time travel to the start of my internship,{' '}
                <span className="ea-highlight">
                  I’d focus more on the context of each project and why it’s
                  valuable, instead of just focusing on the deliverables.
                </span>
              </p>
              Though overwhelming at times, I rose to the challenge and grew
              personally and professionally through this experience. I learned
              from so many great mentors: about what it means to be a product
              designer, what kind of designer I want to be, how to ask for
              feedback, how to present more effectively...
              <br></br>
              <br></br>I could go on for ages, so if you want to learn more
              about this internship, don’t hesitate to{' '}
              <a
                className="link text-link"
                href="mailto:carolina.aoke.li@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                reach out!
              </a>
            </p>
          </div>
          <div className="center-with-margins">
            <img
              className="arrow"
              src={require('../../images/arrow_upward.svg')}
              alt="back to top"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
        <div className="center-with-margins">
          <FooterComponent />
        </div>
      </>
    );
  }
}

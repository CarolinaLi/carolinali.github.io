import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import { motion } from 'framer-motion';
import { variantsImg, variantsFrame } from '../ImageVariants';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';

export default class AphroditeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomedReqGath: false,
      zoomedTaskFlow: false,
      zoomedSchoolUIChange: false,
      zoomedBrandEvolution: false,
      zoomedStyleSheet: false,
      zoomedBreakpoints: false,
    };
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
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
            src={require('../../images/ap-hero.jpeg')}
            alt="Aphrodite mockups"
          />
        </div>
        <div className="container content">
          <h1 className="title case-study-title">The Aphrodite Project</h1>
          <div className="container-md block">
            <p className="center-with-margins">
              <p className="text-large">
                I designed the{' '}
                <a
                  className="link text-link"
                  href="https://aphrodite.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  first website
                </a>{' '}
                for a student-run matchmaking project.
              </p>
              <p className="center-with-margins">
                The Aphrodite Project is a once-a-year event that matches
                students to their ideal date from their university. We run the
                Gale-Shapley algorithm on 70 questions about personality, life
                goals and dealbreakers to find each person’s best match.
                <br></br>
                <br></br>I designed the homepage for our first website, which
                includes an authentication flow focused on building trust. In
                2021, we successfully onboarded and matched 11k students from
                seven universities, across three countries.
              </p>
              <br></br>
              <div className="row mt-5 mb-5 center-with-margins">
                <div className="col-sm mb-4 pl-0">
                  <b className="text-monospace">TIMELINE</b>
                  <p>Nov 2020 - Feb 2021</p>
                </div>
                <div className="col-sm mb-4 pl-0">
                  <b className="text-monospace">WHAT I DID</b>
                  <p>UX design, prototyping, visual design, brand identity</p>
                </div>
                <div className="col-sm mb-4 pl-0">
                  <b className="text-monospace">PROJECT TEAM</b>
                  <p>
                    Carolina Li, Design Lead <br></br>Jess Marshall, Design &
                    Marketing
                  </p>
                </div>
              </div>
              <video width="100%" height="100%" controls>
                <source
                  src={require('../../images/ap-demo.mp4')}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-monospace center-with-margins">
                <small>Video demo: Onboarding flow</small>
              </p>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">PRODUCT GOAL</b>
            </p>
            <p className="center-with-margins text-large">
              We want to convince <b>as many people as possible to sign up</b>,
              to create higher quality matches.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">USER NEEDS</b>
            </p>
            <p className="text-large">
              In a previous launch, we noticed that people{' '}
              <span className="ap-highlight">
                were concerned that we’d sell their data.
              </span>
            </p>
            <p className="center-with-margins">
              Students are <b>wary of participating</b> because they’re
              submitting sensitive personal information about their demographics
              and dealbreakers.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">THE OPPORTUNITY</b>
            </p>
            <p className="text-large">
              How might we{' '}
              <span className="ap-highlight">
                create a sense of trust and safety
              </span>{' '}
              in the project?
            </p>
            <p className="center-with-margins">
              I kicked off the project by leading a team-wide brainstorming
              session to find out what we want to include in our site — we
              emphasized security.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedReqGath
                    ? this.zoomOut('zoomedReqGath')
                    : this.zoomIn('zoomedReqGath')
                }
                initial="zoomedOut"
                animate={this.state.zoomedReqGath ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-req-gath.jpg')}
                alt="Requirement gathering brainstorming"
                onClick={() =>
                  this.state.zoomedReqGath
                    ? this.zoomOut('zoomedReqGath')
                    : this.zoomIn('zoomedReqGath')
                }
                initial="zoomedOut"
                animate={this.state.zoomedReqGath ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <p className="text-monospace center-with-margins">
              <small>
                Brainstorm → Vote → Cluster into themes → Prioritize
              </small>
            </p>
            <br></br>
            <p className="center-with-margins">
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedTaskFlow
                    ? this.zoomOut('zoomedTaskFlow')
                    : this.zoomIn('zoomedTaskFlow')
                }
                initial="zoomedOut"
                animate={this.state.zoomedTaskFlow ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-task-flow.jpg')}
                alt="Task flow diagram"
                onClick={() =>
                  this.state.zoomedTaskFlow
                    ? this.zoomOut('zoomedTaskFlow')
                    : this.zoomIn('zoomedTaskFlow')
                }
                initial="zoomedOut"
                animate={this.state.zoomedTaskFlow ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <p className="text-monospace center-with-margins">
              <small>Initial task flow</small>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-large">Solving for trust</p>
            <br></br>
            <p className="center-with-margins">
              If we only needed to fulfill the business goal, I’d make signing
              up as easy as clicking a button. However, to make the project
              successful, it was necessary to design for the people’s need for
              trust.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedTrustSolutions
                    ? this.zoomOut('zoomedTrustSolutions')
                    : this.zoomIn('zoomedTrustSolutions')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedTrustSolutions ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-trust-solutions.jpg')}
                alt="Three ideas for creating trust"
                onClick={() =>
                  this.state.zoomedTrustSolutions
                    ? this.zoomOut('zoomedTrustSolutions')
                    : this.zoomIn('zoomedTrustSolutions')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedTrustSolutions ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <br></br>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-large">
              We decided to pursue{' '}
              <span className="ap-highlight">authentication</span> as the main
              solution.
            </p>
            <p className="center-with-margins">
              This also solves the side problem of students signing up for their
              friends, or signing up under a fake name.
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/ap-auth.jpg')}
                alt="Authenticate by entering a four-digit code"
              />
            </p>
            <br></br>
            <p className="center-with-margins">
              Using a one-time password (OTP), we ensured that everyone gets
              safe matches. We also considered magic links and central
              authentication via schools, but OTPs were the most viable option,
              given our resources.<br></br>
              <br></br>Design-wise, there were no usability issues with OTPs.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">CURVEBALL: SCOPE CHANGE</b>
            </p>
            <p className="text-large">
              Halfway through the design process, we expanded from two schools
              to seven schools, so I adapted the design.
            </p>
            <p className="center-with-margins">
              Originally I displayed email addresses as text, but this didn’t
              scale well. It’s hard to scan and takes too long to figure out
              what to do. Instead, I redesigned the UI to display schools in
              cards.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedSchoolUIChange
                    ? this.zoomOut('zoomedSchoolUIChange')
                    : this.zoomIn('zoomedSchoolUIChange')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedSchoolUIChange ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-school-ui-change.jpg')}
                alt="Chose cards instead of text"
                onClick={() =>
                  this.state.zoomedSchoolUIChange
                    ? this.zoomOut('zoomedSchoolUIChange')
                    : this.zoomIn('zoomedSchoolUIChange')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedSchoolUIChange ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <br></br>
            <br></br>
            <p className="center-with-margins">
              <p className="text-large">
                Bringing attention to all participating schools also helps build
                trust.
              </p>
              Especially for new participants, seeing the Aphrodite Project
              launch across the world makes it more credible.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">VISUAL DESIGN DECISIONS</b>
              <p className="text-large">
                The school selection screen was an opportunity to express each
                university’s individuality.
              </p>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedSchoolCards
                    ? this.zoomOut('zoomedSchoolCards')
                    : this.zoomIn('zoomedSchoolCards')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedSchoolCards ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-school-cards.jpg')}
                alt="Four visual design explorations for selecting the school"
                onClick={() =>
                  this.state.zoomedSchoolCards
                    ? this.zoomOut('zoomedSchoolCards')
                    : this.zoomIn('zoomedSchoolCards')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedSchoolCards ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <br></br>
              <br></br>
              <br></br>
              <b className="text-monospace">THE DECISION</b>
            </p>
            <p className="center-with-margins">
              Between Idea 3 & 4, getting feedback from the team helped me
              realize that Idea 3 was the best choice, since{' '}
              <b>school colours are only recognizable at full opacity.</b>
              <br></br>
              <br></br>
              Compared to the original design with text emails, this layout has
              better interaction capabilities, which lowers the cognitive load.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/ap-cards-analysis.jpg')}
                alt="Card UI has better scannability and is easier to tap"
              />
            </p>
          </div>

          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">PERSONALIZED FOR EACH UNIVERSITY</b>
              <p className="text-large">
                Adding the school selection screen also meant we could{' '}
                <span className="ap-highlight">
                  customize the onboarding flow
                </span>{' '}
                for each of the seven schools.
              </p>
              <img
                className="case-study-img"
                src={require('../../images/ap-individualized.gif')}
                alt="After selecting your school, the rest of onboarding is specific to your school"
              />
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">BRAND EVOLUTION</b>
              <p className="text-large">
                Initially I styled the website to be consistent with our
                existing marketing, but the branding couldn’t scale. To fix
                this, I led a brand redesign.
              </p>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedBrandEvolution
                    ? this.zoomOut('zoomedBrandEvolution')
                    : this.zoomIn('zoomedBrandEvolution')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedBrandEvolution ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-brand-evolution.jpg')}
                alt="Branding evolved from bright red to softer pink"
                onClick={() =>
                  this.state.zoomedBrandEvolution
                    ? this.zoomOut('zoomedBrandEvolution')
                    : this.zoomIn('zoomedBrandEvolution')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedBrandEvolution ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <br></br>
              <br></br>I created new guidelines that impacted everything from
              our{' '}
              <a
                className="link text-link"
                href="https://www.instagram.com/aphroditeprojectofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{' '}
              page to our email themes.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedStyleSheet
                    ? this.zoomOut('zoomedStyleSheet')
                    : this.zoomIn('zoomedStyleSheet')
                }
                initial="zoomedOut"
                animate={this.state.zoomedStyleSheet ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-style-sheet.jpg')}
                alt="Style sheet: colour, typography, visual motifs"
                onClick={() =>
                  this.state.zoomedStyleSheet
                    ? this.zoomOut('zoomedStyleSheet')
                    : this.zoomIn('zoomedStyleSheet')
                }
                initial="zoomedOut"
                animate={this.state.zoomedStyleSheet ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">HAND-OFF & LAUNCH</b>
              <p className="text-large">
                Most students open the questionnaire on their phones and
                complete it on their desktop, so it was important to design for
                all screen sizes.
              </p>
              I covered how the design changes at breakpoints, then worked with
              engineers to launch the site on time.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedBreakpoints
                    ? this.zoomOut('zoomedBreakpoints')
                    : this.zoomIn('zoomedBreakpoints')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedBreakpoints ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/ap-breakpoints.jpg')}
                alt="I designed for the breakpoint edges"
                onClick={() =>
                  this.state.zoomedBreakpoints
                    ? this.zoomOut('zoomedBreakpoints')
                    : this.zoomIn('zoomedBreakpoints')
                }
                initial="zoomedOut"
                animate={
                  this.state.zoomedBreakpoints ? 'zoomedIn' : 'zoomedOut'
                }
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <p className="text-monospace center-with-margins">
                <small>
                  The design changes at 680px to adapt to mobile and desktop
                  users
                </small>
              </p>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">IMPACT</b>
              <p className="text-large">
                We created 11k matches for Valentine’s 2021!
              </p>
              This is the fourth time we ran the Aphrodite Project, and so far
              we’ve created 31k matches. Based on follow-up questionnaires,
              we’ve helped over 100 people start romantic relationships, and
              created countless new friendships.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">LEARNINGS</b>
              <p className="text-large">
                I learned the importance of using real copy.
              </p>
              I previously heard that copy problems reveal design problems. This
              project strengthened that idea because I wouldn’t have discovered
              scaling problems if I hadn’t used real content.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p className="text-large">
                Involve others early and often in the design process.
              </p>
              I sometimes hesitate to reach out because everyone’s so busy, but
              the pros of meshing together everyone’s diverse ideas far outweigh
              any cons. Our brand wouldn’t have grown to where it is today
              without every team member’s input.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">IN THE PRESS</b>
              <div className="row ml-0 mt-4">
                <div className="col-6 col-md-4 pl-0 pr-3 pb-3">
                  <a
                    href="https://kitchener.ctvnews.ca/dating-app-matches-uw-students-through-algorithm-1.5292874?cache="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="black-box"
                      src={require('../../images/ap-press-ctv.png')}
                      alt="Link to CTV"
                      width="100%"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-4 pl-0 pr-3 pb-3">
                  <a
                    href="https://www.thecrimson.com/article/2021/2/11/project-aphrodite-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="black-box"
                      src={require('../../images/ap-press-theharvardcrimson.png')}
                      alt="Link to The Harvard Crimson"
                      width="100%"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-4 pl-0 pr-3 pb-3">
                  <a
                    href="https://www.therecord.com/news/waterloo-region/2020/08/09/how-an-algorithmic-dating-service-matched-up-4000-university-of-waterloo-students.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="black-box"
                      src={require('../../images/ap-press-therecord.png')}
                      alt="Link to The Record"
                      width="100%"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-4 pl-0 pr-3 pb-3">
                  <a
                    href="https://theoctant.org/edition/issue/allposts/features/from-arrow-to-algorithm-the-aphrodite-project-could-find-you-true-love/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="black-box"
                      src={require('../../images/ap-press-theoctant.png')}
                      alt="Link to The Octant"
                      width="100%"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-4 pl-0 pr-3 pb-3">
                  <a
                    href="http://soapbox.sg/2021/01/10/playing-cupid-aphrodite-project-founder-on-rapid-growth-covid-19-and-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="black-box"
                      src={require('../../images/ap-press-soapbox.png')}
                      alt="Link to Soapbox"
                      width="100%"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-4 pl-0 pr-3 pb-3">
                  <a
                    href="https://thestrand.ca/aphrodites-algorithm-students-reflect-on-matchmaking-with-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="black-box"
                      src={require('../../images/ap-press-thestrand.png')}
                      alt="Link to The Strand"
                      width="100%"
                    />
                  </a>
                </div>
              </div>
            </p>
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
        </div>
        <div className="center-with-margins">
          <FooterComponent />
        </div>
      </>
    );
  }
}

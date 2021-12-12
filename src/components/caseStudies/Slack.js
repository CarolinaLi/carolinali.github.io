import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import { motion } from 'framer-motion';
import { variantsImg, variantsFrame } from '../ImageVariants';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import problem from '../../images/slack-problem.png';
import problemHover from '../../images/slack-problem-hover.png';
import solutionAuto from '../../images/slack-final-2.png';
import solutionAutoHover from '../../images/slack-final-2-hover.png';
import solutionName from '../../images/slack-final-3.png';
import solutionNameHover from '../../images/slack-final-3-hover.png';
import FooterComponent from '../FooterComponent';

export default class SlackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverProblem: false,
      hoverSolutionAuto: false,
      zoomedProblem: false,
      zoomedEffort: false,
      zoomedTwoSols: false,
      zoomedLofi: false,
      zoomedFinal1: false,
      zoomedFinal2: false,
      zoomedFinal3: false,
      zoomedFinal4: false,
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
            src={require('../../images/slack-hero.png')}
            alt="desktop showing Slack sign in screen"
          />
        </div>
        <div className="container content">
          <h1 className="title case-study-title">
            Redesigning Slack’s sign in process
          </h1>
          <div className="container-md block">
            <p className="center-with-margins">
              <p className="text-large">
                Motivated by my own experiences and the feedback I gathered from
                others,{' '}
                <span className="slack-highlight">
                  I created a smarter and more streamlined sign in process.
                </span>
              </p>
              <img
                className="case-study-img"
                src={require('../../images/slack.gif')}
                alt="Animated design demonstration"
                style={{ maxWidth: '100%' }}
              />
            </p>
            <br></br>
            <div className="row center-with-margins">
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">TIMELINE</b>
                <p>May - Aug 2020</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">MY ROLE</b>
                <p>Research, wireframing, usability testing</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">DELIVERABLES</b>
                <p>High fidelity flows, documentation</p>
              </div>
            </div>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">THE PROBLEM</b>
            </p>
            <p className="text-large">
              <span className="slack-highlight">
                Users must create a new account and password for every new
                workspace, even if they’ve used Slack before, which is confusing
                and frustrating.
              </span>
            </p>
            <p className="center-with-margins">
              People don’t like managing multiple accounts and passwords — they
              prefer to reuse old accounts.
              <br />
              <br />
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedProblem
                    ? this.zoomOut('zoomedProblem')
                    : this.zoomIn('zoomedProblem')
                }
                initial="zoomedOut"
                animate={this.state.zoomedProblem ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={this.state.hoverProblem ? problemHover : problem}
                alt="Current Slack sign in flow"
                onMouseOver={() => this.hoverHandler('hoverProblem')}
                onMouseOut={() => this.unhoverHandler('hoverProblem')}
                onClick={() =>
                  this.state.zoomedProblem
                    ? this.zoomOut('zoomedProblem')
                    : this.zoomIn('zoomedProblem')
                }
                initial="zoomedOut"
                animate={this.state.zoomedProblem ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <p className="text-monospace center-with-margins">
                <small>Slack’s current flow.</small>
              </p>
            </p>
            <p className="text-large">
              “For this email, I already used it for another Slack, so{' '}
              <span className="slack-highlight">
                I don’t see why I have to create an account.”
              </span>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">SCOPING IT DOWN</b>
            </p>
            <p className="text-large">I focused on a specific use case.</p>
            <p className="center-with-margins">
              The user receives an email invitation at an address that they’ve
              used for Slack before, and joins via the invite button.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedMap
                    ? this.zoomOut('zoomedMap')
                    : this.zoomIn('zoomedMap')
                }
                initial="zoomedOut"
                animate={this.state.zoomedMap ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/slack-map.png')}
                alt="Original Slack sign in flow on web and mobile"
                onClick={() =>
                  this.state.zoomedMap
                    ? this.zoomOut('zoomedMap')
                    : this.zoomIn('zoomedMap')
                }
                initial="zoomedOut"
                animate={this.state.zoomedMap ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <br></br>I mapped out the flow on two platforms: web and mobile.
              Then I recruited five people and designed a user study to learn
              about how they experience the sign in process.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">FINDING THE RIGHT PROBLEM</b>
            </p>
            <p className="text-large">
              <span className="slack-highlight">
                I discovered that different users have different pain points.
              </span>
            </p>
            <p className="center-with-margins">
              From having trouble finding the URL to misremembering their email
              address, participants brought up a wide range of issues. How do we
              determine which problem has the greatest impact?
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedEffort
                    ? this.zoomOut('zoomedEffort')
                    : this.zoomIn('zoomedEffort')
                }
                initial="zoomedOut"
                animate={this.state.zoomedEffort ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/slack-areas-opportunity.png')}
                alt="Chart of areas of opportunity, effort and value"
                onClick={() =>
                  this.state.zoomedEffort
                    ? this.zoomOut('zoomedEffort')
                    : this.zoomIn('zoomedEffort')
                }
                initial="zoomedOut"
                animate={this.state.zoomedEffort ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <br></br>
              For each area of improvement, I scored the development effort and
              how much value it would bring to users.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/slack-graph.png')}
                alt="Chart of areas of opportunity, effort and value"
              />
              <br></br>I chose to focus on the problem with the greatest value
              to effort ratio, which is how users don’t want to create new
              accounts for each workspace.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">IDEATING</b>
            </p>
            <p className="text-large">
              I worked through piles of iterations, eventually finding myself at
              a crossroads —{' '}
              <span className="slack-highlight">
                I had to decide between two solutions.
              </span>
            </p>
            <p className="center-with-margins">
              Idea 1 ensures that users will join workspaces with the{' '}
              <b>same</b> email address that they received the invite with.
              <br></br>
              <br></br>
              Idea 2 enables the user to sign in with <b>any</b> email address,
              as long as they’re using the link in the invite.
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedTwoSols
                    ? this.zoomOut('zoomedTwoSols')
                    : this.zoomIn('zoomedTwoSols')
                }
                initial="zoomedOut"
                animate={this.state.zoomedTwoSols ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/slack-two-solutions.png')}
                alt="Rough sketches of each idea"
                onClick={() =>
                  this.state.zoomedTwoSols
                    ? this.zoomOut('zoomedTwoSols')
                    : this.zoomIn('zoomedTwoSols')
                }
                initial="zoomedOut"
                animate={this.state.zoomedTwoSols ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">COMPARE AND CONTRAST</b>
            </p>
            <p className="text-large">
              To decide, I tested both ideas using low fidelity wireframes, and
              asked participants:{' '}
              <span className="slack-highlight">
                How many emails do you want to associate with a Slack account?
              </span>
            </p>
            <p className="center-with-margins">
              Remember, Slack currently requires creating a new account and
              password to join a workspace. Both solutions avoid this by
              allowing people to reuse accounts.
              <br></br>
              <br></br>I wanted to find out which option made more sense to
              users.{' '}
              <b>
                If users want multiple emails linked to a single account, then
                Idea 2 would give them that flexibility.
              </b>
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedLofi
                    ? this.zoomOut('zoomedLofi')
                    : this.zoomIn('zoomedLofi')
                }
                initial="zoomedOut"
                animate={this.state.zoomedLofi ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/slack-lofi-test.png')}
                alt="Low fidelity wireframes of each idea"
                onClick={() =>
                  this.state.zoomedLofi
                    ? this.zoomOut('zoomedLofi')
                    : this.zoomIn('zoomedLofi')
                }
                initial="zoomedOut"
                animate={this.state.zoomedLofi ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <p className="text-large">
              I learned that people want the ability to link multiple email
              addresses to one Slack account.
            </p>
            <p className="center-with-margins">
              Idea 2 seems like the obvious choice, but I still chose the Idea 1
              in the end.
            </p>
            <p className="text-large">
              <span className="slack-highlight">
                People want to link multiple emails because they think it will
                give them more agility when switching workspaces. In reality,
                you don’t need every email under a single account to have all
                your workspaces available.
              </span>
            </p>
            <p className="center-with-margins">
              Idea 1 is:<br></br>• Simpler — it has less options so it’s easier
              for the user to make decisions.<br></br>• More secure — being able
              to sign in with any address (Idea 2) is too flexible.<br></br>•
              Equally agile when it comes to switching workspaces, once the
              user’s signed in.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">THE SOLUTION</b>
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedFinal1
                    ? this.zoomOut('zoomedFinal1')
                    : this.zoomIn('zoomedFinal1')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal1 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/slack-final-1.png')}
                alt="Email invitation to join a new workspace"
                onClick={() =>
                  this.state.zoomedFinal1
                    ? this.zoomOut('zoomedFinal1')
                    : this.zoomIn('zoomedFinal1')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal1 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedFinal2
                    ? this.zoomOut('zoomedFinal2')
                    : this.zoomIn('zoomedFinal2')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal2 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={
                  this.state.hoverSolutionAuto
                    ? solutionAutoHover
                    : solutionAuto
                }
                alt="Account information automatically displayed"
                onMouseOver={() => this.hoverHandler('hoverSolutionAuto')}
                onMouseOut={() => this.unhoverHandler('hoverSolutionAuto')}
                onClick={() =>
                  this.state.zoomedFinal2
                    ? this.zoomOut('zoomedFinal2')
                    : this.zoomIn('zoomedFinal2')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal2 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <br></br>
            <p className="text-large">
              The redesign automatically displays the email address and profile
              picture.
            </p>
            <p className="center-with-margins">
              Though users just came from their email, they still like to see
              their address confirmed.
              <br></br>
              <br></br>
              <br></br>
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedFinal3
                    ? this.zoomOut('zoomedFinal3')
                    : this.zoomIn('zoomedFinal3')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal3 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={
                  this.state.hoverSolutionName
                    ? solutionNameHover
                    : solutionName
                }
                alt="Users can edit their name"
                onMouseOver={() => this.hoverHandler('hoverSolutionName')}
                onMouseOut={() => this.unhoverHandler('hoverSolutionName')}
                onClick={() =>
                  this.state.zoomedFinal3
                    ? this.zoomOut('zoomedFinal3')
                    : this.zoomIn('zoomedFinal3')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal3 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
              <br></br>
              <br></br>
              Users still have the opportunity to edit their name. People want
              to have control over how they display personal information, which
              can change depending on the workspace’s purpose and members.
              <br></br>
              <br></br>
              <br></br>
              <img />
              <motion.div
                className="frame"
                onClick={() =>
                  this.state.zoomedFinal4
                    ? this.zoomOut('zoomedFinal4')
                    : this.zoomIn('zoomedFinal4')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal4 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsFrame}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.img
                className="case-study-img clickable"
                src={require('../../images/slack-final-4.png')}
                alt="Users enter their password to join the workspace"
                onClick={() =>
                  this.state.zoomedFinal4
                    ? this.zoomOut('zoomedFinal4')
                    : this.zoomIn('zoomedFinal4')
                }
                initial="zoomedOut"
                animate={this.state.zoomedFinal4 ? 'zoomedIn' : 'zoomedOut'}
                variants={variantsImg}
                transition={{ duration: 0 }}
              />
            </p>
            <br></br>
            <p className="text-large">
              The user signs in by entering their password —{' '}
              <span className="slack-highlight">
                they don’t have to create and remember a new one.
              </span>
            </p>
            <p className="center-with-margins">
              This changes how accounts and workspaces relate to each other.
              Instead of having one account per workspace, people can have many
              workspaces under one account.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">IMPACT</b>
            </p>
            <p className="text-large">
              I used the{' '}
              <a
                className="link text-link"
                href="https://www.netpromoter.com/know/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Net Promoter Score
              </a>
              {' in user interviews, asking: '}
            </p>
            <p className="center-with-margins">
              On a scale of 0 to 10, would you recommend Slack to a friend or
              co-worker?{' '}
              <b>Would this redesign make a difference in your rating?</b>
              <br></br>
              <br></br>I received the following feedback:
              <br></br>
              <br></br>
              <p className="text-large">
                “I’d give Slack a 7. One of the reasons I don’t like Slack is
                because of the sign in process. If this change is implemented,
                it would become a 9.{' '}
                <span className="slack-highlight">
                  I see myself using Slack more often if this existed.
                </span>
                ”
              </p>
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/nps.png')}
                alt="In NPS, 0-6 are detractors, 7-8 are passive, and 9-10 are promoters"
              />
              <p className="text-monospace center-with-margins">
                <small>Source: www.netpromoter.com/know</small>
              </p>
              <p className="text-large">
                <span className="slack-highlight">
                  This means the user would go from being passive (7) to
                  becoming a promoter (9).
                </span>
              </p>
              If I had the resources, I’d also use quantitative data to measure
              success:<br></br>• Comparing the sign in completion rate before
              and after this change.<br></br>• Measuring the number of returning
              Slack users.<br></br>• Measuring how many subsequent workspaces
              people join.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">REFLECTION</b>
            </p>
            <p className="text-large">
              Doing a personal project gave me the opportunity to expand my
              design experience, with guidance from my mentor.
            </p>
            <p className="center-with-margins">
              I learned that:<br></br>• Scoping down a problem and{' '}
              <b>saying no to less important problems</b> will help you focus.
              <br></br>• Choosing just one problem was challenging — Effort vs
              Value charts are helpful with these kinds of decisions.<br></br>•
              Benchmarking is vital — find out if the new designs made a
              difference, <b>whether positive or negative.</b>
              <br></br>• Designers should solve for the root of a problem, not
              treat the symptoms.<br></br>
              <br></br>
              If I had more time...<br></br>• I would explore if Slack could
              benefit from having different levels of security for different
              types of workspaces.<br></br>• I’d also look into password-free
              sign in methods.
            </p>
            <div className="center-with-margins">
              <img
                className="moving-arrow"
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

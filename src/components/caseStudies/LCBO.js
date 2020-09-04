import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';
import deck from '../../images/lcbo-deck.pdf';
import landing from '../../images/lcbo-landing.png';
import landingHover from '../../images/lcbo-landing-hover.png';
import questions from '../../images/lcbo-questions.png';
import questionsHover from '../../images/lcbo-questions-hover.png';
import recs from '../../images/lcbo-recs.png';
import recsHover from '../../images/lcbo-recs-hover.png';

export default class LCBOComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverLanding: false,
      hoverQuestions: false,
      hoverRecs: false,
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
            src={require('../../images/lcbo-hero.png')}
            alt="LCBO iPad mockup on a desk"
          />
        </div>
        <div className="container content">
          <h1 className="title">LCBO UX Design internship</h1>
          <div className="container-md block">
            <h2 className="block-title">Overview</h2>
            <p className="block-text">
              LCBO is the world’s largest alcoholic beverage purchaser, and in
              Fall 2019, I interned as the sole UX/UI designer at LCBO’s
              innovation lab. I worked on a team to design a
              <b> beverage recommendation application </b>
              that was deployed to local stores, in collaboration with staff. I
              also
              <b> started our first design system.</b>
            </p>
            <br></br>
            <div className="row block-text">
              <div className="col-sm mb-4">
                <b className="text-monospace">TIMELINE</b>
                <p>Sep - Dec 2019</p>
              </div>
              <div className="col-sm mb-4">
                <b className="text-monospace">MY ROLE</b>
                <p>Research, prototyping, visual design</p>
              </div>
              <div className="col-sm mb-4">
                <b className="text-monospace">DELIVERABLES</b>
                <p>Two projects, wireframe flows, launched app</p>
              </div>
            </div>
          </div>
          <div className="block">
            <h2 className="block-title">
              Designing a product recommendation system for LCBO customers
            </h2>
            <p className="block-text">
              The product recommender helps in-store customers find a beverage
              that fits their requirements and tastes.
              <br />
              <br />
              Almost a year after I finished this internship, I wanted to
              revisit this project and see if there’s anything I’d do
              differently. There was! I improved the UI by creating more visual
              consistency, and removed distractions to help customers focus on
              one thing at a time.
              <br />
              <br />
              <b>Hover over each image to compare the designs</b> before and
              after the update, and
              <a
                className="link text-link"
                href={deck}
                target="_blank"
                rel="noopener noreferrer"
              >
                view my original case study deck
              </a>
              {' for details on my design process.'}
              <br />
              <br />
              <img
                src={this.state.hoverLanding ? landingHover : landing}
                alt="landing screen"
                onMouseOver={() => this.hoverHandler('hoverLanding')}
                onMouseOut={() => this.unhoverHandler('hoverLanding')}
              />
              <br></br>
              <br></br>
              The original design had a video playing in the background, which
              was slow to load. The rotating words were meant to create examples
              of use cases, such as, “I want to find a wine for a holiday
              dinner.” We found that this confused users — they would tap the
              button when they saw the scenario they wanted.
              <br></br>
              <br></br>
              In the redesign, I replaced the landing page with static visuals
              to save space, and a clearer product description to give users a
              better idea of what to expect.
            </p>
            <div className="row">
              <div className="col-md-6 pl-3 pb-4">
                <img
                  className="w-100"
                  src={this.state.hoverQuestions ? questionsHover : questions}
                  alt="landing screen"
                  onMouseOver={() => this.hoverHandler('hoverQuestions')}
                  onMouseOut={() => this.unhoverHandler('hoverQuestions')}
                />
              </div>
              <div className="col-md-6 pl-3 pb-4">
                <img
                  className="w-100"
                  src={this.state.hoverRecs ? recsHover : recs}
                  alt="landing screen"
                  onMouseOver={() => this.hoverHandler('hoverRecs')}
                  onMouseOut={() => this.unhoverHandler('hoverRecs')}
                />
              </div>
            </div>
            <p className="text-monospace">
              <small>Image source: lcbo.com</small>
              <br></br>
              <br></br>
            </p>
            <p className="block-text">
              To create a more cohesive look and feel, I kept the theme dark
              throughout. I realized that both the questionnaire and the
              recommendation page were bombarding the user with too many tasks
              and options, so I made some changes.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">The scope</h2>
            <p className="block-text">
              Since this was going to be a one-person journey, I knew I had to
              scope down the project. I focused on a specific use case: a
              returning user who joins a new workspace on Slack’s web app. In
              other words, the user receives an email invitation at an address
              that they’ve used for Slack before, and joins via the invite
              button.
              <br></br>
              <br></br>
              Now, the recommendation page draws the user’s attention to the
              best choice, so it’s easier for users to make a decision. People
              use this app when they don’t know what to choose, and the original
              design didn’t make this any easier when it displayed rows of
              possibilities.
              <br></br>
              <br></br>
              We learned from interviews that users want to know why they got a
              specific recommendation. The challenge is how to show this,
              especially on an app that can’t track personal data after the
              session ends. I experimented with tags, using the green
              rectangles, but users mistaked them for buttons. In the end, I
              decided to use bolded descriptors because they’re easy to consume
              and space-efficient. If I had more time, I’d run A/B tests to make
              a decision.
              <br></br>
              <br></br>
              As for the questionnaire, I moved away from illustrations since
              they’re difficult to update if we need to change any options, and
              went for a more utilitarian UI with easier-to-read text.
              <br></br>
              <br></br>
              <a
                className="link text-link"
                href={deck}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out the project deck
              </a>
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">Creating our first design system</h2>
            <p className="block-text">
              LCBO’s innovation lab gets a completely new team every four
              months, so each product ends up quite different. In an effort to
              deliver a consistent user experience across all LCBO lab products,
              I started laying down the backbone for a design system during the
              last week of my internship.
              <br></br>
              <br></br>
              Before I started, I wanted to make sure there was a real need for
              a design system. I conducted interviews with each developer, the
              product manager, the lab director, and the previous designer.
            </p>
            <img
              src={require('../../images/lcbo-design-system.png')}
              alt="Snapshot of the design system"
              style={{ maxWidth: '100%' }}
            />
            <br></br>
            <br></br>
            <p className="block-text">
              From the interviews, I discovered that the greatest needs are
              having assets, colour schemes, and typography guidelines readily
              available. I started organizing each of these using Invision’s
              Design System Manager.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">
              Learnings and what I’d do differently
            </h2>
            <p className="block-text">
              This was my first design internship, and I was also the sole
              designer. I was in such a rush to hit as many design check boxes
              as I could. I conducted interviews! I made customer journey maps!
              I created heaps of paper prototypes!
              <br></br>
              <br></br>
              If I could do it all over again, I’d make sure to{' '}
              <b>focus on the purpose of each step in my design process</b>,
              instead of just following the design process because I thought
              that was what I was supposed to do.
              <br></br>
              <br></br>
              I’d also be more mindful of figuring out how to measure impact
              earlier in the project. For the product recommender, I’d think
              about what success looks like. Is it about the percentage of
              customers who use our product? Should we track the number of
              sales? Or the amount of time a shopper takes to make a purchase?{' '}
              <b>
                I would benchmark and evaluate how much the product helps
                customers.
              </b>
            </p>
            <img
              className="arrow"
              src={require('../../images/arrow_upward.svg')}
              alt="back to top"
              onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
              }}
            />
          </div>       
        </div>
        <FooterComponent />
      </>
    );
  }
}

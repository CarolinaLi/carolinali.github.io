import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';
import deck from '../../images/lcbo-deck.pdf';

export default class LCBOComponent extends Component {
  // leftovers from past hovers, keeping it here in case you need to hover again
  constructor(props) {
    super(props);
    this.state = {
      hoverLanding: false,
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
            src={require('../../images/lcbo-hero.jpg')}
            alt="LCBO iPad mockup on a desk"
          />
        </div>
        <div className="container content">
          <h1 className="title case-study-title">LCBO UX design internship</h1>
          <div className="container-md block">
            <p className="center-with-margins">
              <p className="text-large">
                <span className="lcbo-highlight">
                  I designed a beverage recommendation app that was deployed to
                  local stores, and started our first design system.
                </span>
              </p>
              <img
                className="case-study-img"
                src={require('../../images/lcbo.gif')}
                alt="Animated design demonstration"
                style={{ maxWidth: '100%' }}
              />
            </p>
            <br></br>
            <div className="row center-with-margins">
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">TIMELINE</b>
                <p>Sep - Dec 2019</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">MY ROLE</b>
                <p>Research, prototyping, visual design</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">DELIVERABLES</b>
                <p>Two projects, wireframe flows, one launched app</p>
              </div>
            </div>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">THE PROMPT</b>
            </p>
            <p className="text-large">
              Our initial task was solving the purchase abandonment problem:
              customers come to stores intending to buy something, but leave
              empty handed.{' '}
              <span className="lcbo-highlight">
                How do we know if this is a real problem?
              </span>
            </p>
            <p className="center-with-margins">
              To learn more about customers’ shopping experience, our team
              conducted two types of research:<br></br>
              <br></br>
              <b>Qualitative</b> — we visited LCBO stores and asked customers:
              <br></br>• “Can you tell us about your shopping process?”<br></br>
              • “How do you choose your products?”<br></br>
              <br></br>
              <b>Quantitative</b> — we sent out mass surveys using social media
              platforms, asking:<br></br>• “How confident are you when choosing
              products?”<br></br>• “How do you feel about trying new products?”
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">RESULTS</b>
            </p>
            <p className="text-large">
              <span className="lcbo-highlight">
                60% of customers don’t know what product to buy, and 75% of
                customers are unsure if a new product is worth their money.
              </span>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">REFINING THE GOAL</b>
            </p>
            <p className="text-large">
              Motivated by what we learned, we then asked:{' '}
              <span className="lcbo-highlight">
                How might we create an experience that helps customers navigate
                the thousands of products available at LCBO?
              </span>
            </p>
            <p className="center-with-margins">
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-problem.png')}
                alt="Huge selection available"
              />
              <p className="text-monospace center-with-margins">
                <small>The LCBO beer wall.</small>
              </p>
            </p>
            <br></br>
            <p className="text-large">
              Our team created three personas to communicate learnings from
              customer interviews: the Explorer, the Loyalist, and the Bargain
              Buyer.
            </p>
            <p className="center-with-margins">
              Loyalists are customers who already know what they want to buy, so
              our primary users are Explorers and Bargain Buyers.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-persona-explorer.png')}
                alt="Explorers love to try new beverages."
              />
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-persona-bargain.png')}
                alt="Bargain Buyers want the maximum value for the lowest price."
              />
              <br></br>
            </p>
            <p className="text-large">
              Using our personas, we scoped down the goal to focus on our target
              audience: empowering{' '}
              <span className="lcbo-highlight">
                customers who want to explore new products
              </span>{' '}
              to confidently make the best choice at LCBO.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">THE SOLUTION</b>
            </p>
            <p className="text-large">
              We decided to create an in-store kiosk app that customers can use
              to get product recommendations.
            </p>
            <p className="center-with-margins">
              Features include:<br></br>• Discovering why the user is at LCBO.
              What’s the context for their visit?<br></br>• Discovering the
              user’s individual tastes.<br></br>• Showing people the products
              that are best suited for them.<br></br>• Providing all the
              information needed to make a purchase decision.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-landing.png')}
                alt="Landing page with call to action"
              />
              <br></br>
              <b>Landing screen</b>
              <br></br>• Description shows the product’s value.<br></br>• LCBO
              branding creates trust.
              <br></br>
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-questions.png')}
                alt="Example of a question: What are you shopping for? A party, etc."
              />
              <br></br>
              <b>Questionnaire</b>
              <br></br>• Discovers the user’s context, requirements, and tastes.
              <br></br>• Options are represented by icons and text, which are
              easy to read.
              <br></br>
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-recs.png')}
                alt="A user's top recommendation: photo, price, description."
              />
              <br></br>
              <b>Product recommendations</b>
              <br></br>• Clearly show the best choice so it’s easy for customers
              to make a decision.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <b>Note: </b>
              Almost a year after I finished this internship, I revisited this
              project to improve the UI, which I used in this case study. Take a
              look at the original presentation{' '}
              <a
                className="link text-link"
                href={deck}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">PART 2: THE DESIGN SYSTEM</b>
            </p>
            <p className="text-large">
              The lab gets a new team every four months, so each product ends up
              quite different.{' '}
              <span className="lcbo-highlight">
                To deliver a consistent user experience across all LCBO lab
                products, I started a design system as my final project.
              </span>
            </p>
            <p className="center-with-margins">
              I wanted to make sure there was a real need for a design system. I
              conducted interviews with each developer, the product manager, the
              lab director, and the previous designer.
              <br></br>
              <br></br>
              <img
                className="case-study-img"
                src={require('../../images/lcbo-design-system.png')}
                alt="Snapshot of the design system"
              />
            </p>
            <br></br>
            <br></br>
            <p className="center-with-margins">
              I learned that our greatest needs are having assets, colour
              schemes, and typography guidelines readily available. I started
              organizing each of these using InVision’s Design System Manager.
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">
                LEARNINGS AND WHAT I’D DO DIFFERENTLY
              </b>
            </p>
            <p className="center-with-margins">
              <p className="text-large">
                This was my first UX internship and I was also the sole
                designer, so I was in a rush to hit as many design check boxes
                as I could.
              </p>
              Though I got lots of experience, I found myself making customer
              journeys just because I thought it’s what designers were supposed
              to do. Next time,{' '}
              <b>I’d make sure to understand the purpose of each step.</b>
              <br></br>
              <br></br>
              <p className="text-large">
                If I could redo this project,{' '}
                <span className="lcbo-highlight">
                  I would benchmark and evaluate how much the product helps
                  customers.
                </span>
              </p>
              I’d think more about how to measure success:<br></br>• Looking at
              the percentage of customers who use our product.<br></br>•
              Tracking the number of sales before and after the launch.<br></br>
              • Measuring the amount of time a shopper takes to make a purchase.
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

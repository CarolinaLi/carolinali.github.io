import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';

export default class EAComponent extends Component {
  render() {
    window.scrollTo(0, 0);
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
          <h1 className="title">EA product design internship</h1>
          <div className="container-md block">
            <h2 className="block-title">Overview</h2>
            <p className="block-text">
              In Summer 2020, I did a four month remote internship at Electronic
              Arts. I was a product design intern on the EAX team, and I worked
              on the next generation of Origin on web, which is our game
              distribution platform. I also designed and deployed a site for an
              upcoming social experience product.
            </p>
            <br></br>
            <div className="row block-text">
              <div className="col-sm mb-4">
                <b className="text-monospace">TIMELINE</b>
                <p>May - Aug 2020</p>
              </div>
              <div className="col-sm mb-4">
                <b className="text-monospace">MY ROLE</b>
                <p>Visual design, information architecture</p>
              </div>
              <div className="col-sm mb-4">
                <b className="text-monospace">DELIVERABLES</b>
                <p>Four projects, high fidelity mockups, Google site</p>
              </div>
            </div>
          </div>
          <div className="block">
            <h2 className="block-title">Chapter 1 — Stepping into the role</h2>
            <p className="block-text">
              I redesigned the footer for the next generation of Origin. It was
              my first time working on a product with millions of users, and I
              was responsible for taking the project from requirement gathering
              to handoff. I learned that assumptions change constantly, how
              different teams affect each other, and that designs need to adapt.
            </p>
            <br></br>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-3">
                <img
                  src={require('../../images/ea-1.png')}
                  alt="Notes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">GATHERING INFO</b>
                <p>
                  I talked to a cross-functional group of stakeholders to
                  develop how I think about organizing each element.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-3">
                <img
                  src={require('../../images/ea-2.png')}
                  alt="Four footer wireframes"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">WIREFRAMES</b>
                <p>
                  From the chats, I learned to organize elements based on how
                  our players would likely interact with them.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-3">
                <img
                  src={require('../../images/ea-3.png')}
                  alt="Footer UI, mobile breakpoint"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">HIGH FIDELITY DESIGNS</b>
                <p>
                  I designed UI that adheres to our Design System standards of
                  spacing, typography, colours, and components.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-3">
                <img
                  src={require('../../images/ea-4.png')}
                  alt="Spec file"
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
                <b className="text-monospace">HAND OFF</b>
                <p>
                  I created a spec file that outlines implementation
                  information. After the code merge, I made sure the site
                  matches the designs.
                </p>
              </div>
            </div>
            <br></br>
            <b className="text-monospace">DESIGN DECISIONS</b>
            <p className="block-text">
              A challenge I faced was how to organize each link and selector. In
              my original approach, I displayed each element in order of
              importance. Then I learned that it’s better to group together
              elements based on how they’d be used. For example, helpful links
              are separated from links that must be included for legal reasons.
              Using font colours, spacing, and different backgrounds, I
              organized the footer so everything has a home. I also kept in mind
              how the layout would adapt to different breakpoints and regional
              requirements.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">Chapter 2 — Understanding goals</h2>
            <p className="block-text">
              One month into my internship, I moved to a new team and onboarded
              onto a new social experience project. I created a documentation
              site and participated in the first design sprint, focusing on the
              ‘why’ behind every decision.
            </p>
            <br></br>
            <br></br>
            <p className="block-text">
              Before starting the site, I worked with the team to come up with
              overarching goals:
              <br></br>
              <br></br>• Pull together and organize all existing documentation
              so a cross-functional group can find the information that’s most
              relevant to them quickly and easily
              <br></br>
              <br></br>• Help new team members onboard onto the project
              efficiently and without confusion.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </p>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-3">
                <b className="text-monospace">RESEARCH</b>
                <p>
                  What does a successful site look like? I interviewed team
                  members both inside and outside of the project to gather their
                  goals and expectations.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-3">
                <b className="text-monospace">SITE ARCHITECTURE</b>
                <p>
                  With existing documentation in mind, I worked with my
                  design-leads and manager to organize pages into categories
                  that would most benefit the user.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-3">
                <b className="text-monospace">PAGE CONTENT HIERARCHY</b>
                <p>
                  I created templates for each page type to organize the
                  information.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-3">
                <b className="text-monospace">VISUALS</b>
                <p>
                  The final site colours match the product’s UI. Our team
                  designed assets, such as cards, that are easily adaptable so
                  we can build pages quickly.
                </p>
              </div>
            </div>
            <p className="block-text">
              <b className="text-monospace">OVERCOMING HURDLES</b>
              <br></br>
              After conducting research and reading every document we had on the
              project, I tackled the task of organizing the site. From
              interviews, I learned what people thought the ideal site structure
              should be, but when I implemented this, I realized it wouldn’t
              match our existing docs. Working with the team, I pivoted to an
              architecture that best showcases our current assets, and learned
              that user interviews only give us information, not instructions.
              <br></br>
              <br></br>
              This site is now being used in EA teams across the world, and
              helps onboard new members to the project’s ever-growing team.
              <br></br>
              <br></br>
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">Chapter 3 — Wrapping it up</h2>
            <p className="block-text">
              For the rest of the summer, I worked on hard skills, such as
              visual and interaction design. I practiced product thinking and
              got more familiar with design deliverable expectations.
              <br></br>
              <br></br>I worked with the UX Design Program Manager to bring
              consistency to a design sprint template, which will help our teams
              run future sprints.
              <br></br>
              <br></br>
              Finally, I created two new icons for web navigation, gaining
              newfound appreciation for nuances in iconography.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">
              Learnings and what I’d do differently
            </h2>
            <p className="block-text">
              Before this internship, I used to think that there’s a perfect
              design somewhere out there, and that it was the designer’s job to
              find it. Now I see that it’s more about{' '}
              <b>balancing priorities.</b> I also learned that it’s important to
              be comfortable with ambiguity and making decisions with incomplete
              information.
              <br></br>
              <br></br>
              If I could time travel to the start of my internship,{' '}
              <b>
                I’d focus more on the context of each project and why it’s
                valuable
              </b>
              , instead of just focusing on the deliverables.
              <br></br>
              <br></br>
              Though overwhelming at times, I rose to the challenge and grew
              personally and professionally through this experience. I learned
              from so many great mentors: about what it means to be a product
              designer, what kind of designer I want to be, how to ask for
              feedback, and how to present more effectively.
              <br></br>
              <br></br>I could go on for ages, so if you want to learn more
              about this internship, don’t hesitate to
              <a
                className="link text-link"
                href="mailto:ca2li@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                reach out!
              </a>
            </p>
          </div>
          <img
            className="arrow"
            src={require('../../images/arrow_upward.svg')}
            alt="back to top"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
        <FooterComponent />
      </>
    );
  }
}

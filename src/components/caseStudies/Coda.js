import React, { Component } from "react";
import Header from "../../components/HeaderComponent";
import { motion } from "framer-motion";
import { variantsImg, variantsFrame } from "../ImageVariants";
import "../../css/Global.css";
import "../../css/CaseStudy.css";
import FooterComponent from "../FooterComponent";

export default class CodaComponent extends Component {
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
            src={require("../../images/coda-hero.png")}
            alt="Coda new table UI mockup"
          />
        </div>
        <div className="container content">
          <h1 className="title case-study-title">
            Coda product design internship
          </h1>
          <div className="container-md block">
            <p className="center-with-margins">
              <p className="text-large">
                I researched how new users experience{" "}
                <a
                  className="link text-link"
                  href="https://coda.io/welcome/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coda
                </a>{" "}
                and tackled the most common friction points, including shipping
                a new UI for creating tables.
              </p>
              <p className="center-with-margins">
                Coda is an all-in-one document editor. As an intern on the
                Document Experience team, my goal was to flatten the learning
                curve and increase user retention.
                <br></br>
                <br></br>To help make Coda a mainstream product, I discovered
                over 40 friction points and worked closely with a
                cross-functional team to prioritize them. I designed and shipped
                a number of fixes, from new table UIs to making the Explore
                panel more discoverable.
              </p>
              <br></br>
              <div className="row mt-5 mb-5 center-with-margins">
                <div className="col-sm mb-4 pl-0">
                  <b className="text-monospace">TIMELINE</b>
                  <p>
                    Jun - Sep 2021,<br></br>12 weeks
                  </p>
                </div>
                <div className="col-sm mb-4 pl-0">
                  <b className="text-monospace">WHAT I DID</b>
                  <p>
                    Research, UX design, visual design, A/B testing, icon design
                  </p>
                </div>
                <div className="col-sm mb-4 pl-0">
                  <b className="text-monospace">DELIVERABLES</b>
                  <p>
                    Prioritized list of friction points, shipped feature, A/B
                    test variants
                  </p>
                </div>
              </div>
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">FRICTION POINT 1</b>
            </p>
            <p className="center-with-margins text-large">
              People{" "}
              <span className="coda-highlight">accidentally create views</span>{" "}
              when trying to create a new table.
            </p>
            <br></br>
            <br></br>
            <p className="text-monospace center-with-margins">
              <small>
                <video width="100%" height="100%" controls>
                  <source
                    src={require("../../images/coda-vid-table.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                Research clip: User attempts to create a new table but
                accidentally creates a view
              </small>
            </p>
            <br></br>
            <p className="center-with-margins">
              In Coda, <i>views</i> are another way to see table data, but new
              users don’t know what they are. In the current UI for creating tables, too much
              thinking goes into choosing an option.
            </p>
            <br></br>
            <p className="center-with-margins text-large">
              I created a new UI that{" "}
              <span className="coda-highlight">creates distinction</span>{" "}
              between blank tables and views, and uses copy to{" "}
              <span className="coda-highlight">teach users about views</span>.
            </p>
            <p className="center-with-margins">
              I also added a pop up that displays table info, which solves an
              additional problem people have trouble identifying the listed
              tables.
            </p>
            <p className="text-monospace center-with-margins">
              <small>
                <video width="100%" height="100%" controls>
                  <source
                    src={require("../../images/coda-vid-new-table.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                Demo of the newly launched interface
              </small>
            </p>
          </div>

          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">FRICTION POINT 2</b>
            </p>
            <p className="text-large">
              <span className="coda-highlight">
                People have trouble finding the Explore panel.
              </span>
            </p>
            <p className="center-with-margins">
              This is the main panel, where users access tools to build their
              document. However, users don’t notice the Explore button, or they
              don’t expect it to be a way to access these tools.
            </p>

            <p className="text-monospace center-with-margins">
              <small>
                <video width="100%" height="100%" controls>
                  <source
                    src={require("../../images/coda-vid-explore.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                Research clip: User struggles to re-open the Explore panel
              </small>
            </p>
          </div>
          <div className="block">
            <p className="text-large">
              How might we help people access the Explore panel?
            </p>
            <div className="row mt-5 mb-5 center-with-margins">
              <div className="col-sm mb-4 pl-0">
                <img
                  className="case-study-img"
                  src={require("../../images/coda-explore-idea-1.png")}
                  alt="Explore button variants"
                />

                <p>
                  <small>
                    Replace "Explore" with a more building-oriented word and/or
                    add an icon to make it more noticeable
                  </small>
                </p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <img
                  className="case-study-img"
                  src={require("../../images/coda-explore-idea-2.png")}
                  alt="Pop up indicating how to access the Explore panel"
                />

                <p>
                  <small>
                    Show where to find the panel the first time it closes{" "}
                  </small>
                </p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <img
                  className="case-study-img"
                  src={require("../../images/coda-explore-idea-3.png")}
                  alt="Link to Explore panel via Table Options"
                />

                <p>
                  <small>
                    Create another entry point to the Explore panel through
                    Table Options, which users easily discover
                  </small>
                </p>
              </div>
            </div>
            <p className="center-with-margins">
              We went with the first option: redesigning the button so people
              will use it when building their document. This option required the
              lowest effort to implement, but had a high potential impact.
            </p>
          </div>
          <div className="block">
            <p className="text-large">
            <span className="coda-highlight">Launched:</span> the new Explore button has an icon.
            </p>
            <p className="center-with-margins">
            After running A/B tests on different button variants, the Explore button now has an icon that represents building blocks.
              <br></br>
              <br></br>
              <img
                  className="case-study-img"
                  src={require("../../images/coda-explore-launched.png")}
                  alt="New button with a building blocks icon"
                />
            </p>
          </div>
          <div className="block">
            <p className="center-with-margins">
              <b className="text-monospace">WHY SOLVE THESE PROBLEMS?</b>
              <p className="text-large">
              I worked with a team of designers and PMs to prioritize the friction points.
              </p>
              We chose friction points that created the most impact within a limited timeline.
              <br></br>
              <br></br>
              

              <img
                  className="case-study-img"
                  src={require("../../images/coda-chart.png")}
                  alt="Simplicity vs impact chart of friction points"
                />
            </p>
           
              
            
          </div>

          <div className="block">
            <p className="center-with-margins">
              <p className="text-large">
                
                <a
                  className="link text-link"
                  href="mailto:carolina.aoke.li@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email me
                </a>{" "}
                if you have questions!
              </p>
              This was only a preview — I’d love to take you through the full details of the extensive research process, design iterations and trade-offs.
            </p>
         
            <div className="center-with-margins">
              <img
                className="moving-arrow"
                src={require("../../images/arrow_upward.svg")}
                alt="back to top"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
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

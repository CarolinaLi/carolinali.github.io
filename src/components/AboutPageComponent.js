import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import FooterComponent from './FooterComponent';
import '../css/Global.css';
import '../css/AboutPageComponent.css';
import '../css/HomepageComponent.css';
import firstPic from '../images/about1.jpg';
import secondPic from '../images/about2.jpg';
import artWatercolour from '../images/art-watercolour64.gif';
import artWalkcycle from '../images/art-tigerwalk.gif';
import artAcrylic from '../images/art-acrylic.png';
import artAcrylicAnimate from '../images/art-acrylic-animate.gif';
import bookUniversal from '../images/book-universal.png';
import bookStoneAngel from '../images/book-stoneangel.png';
import bookBraveNewWorld from '../images/book-bravenewworld.png';
import bookDune from '../images/book-dune.png';
import iconExternalLink from '../images/icon-external-link.svg';

export default class AboutPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
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

  render() {
    return (
      <>
        <Header />
        <div className="container text-section">
          <div className="intro">
            <div className="row no-gutters about-row">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src={this.state.hover ? secondPic : firstPic}
                  alt="portrait"
                  onMouseOver={() => this.hoverHandler('hover')}
                  onMouseOut={() => this.unhoverHandler('hover')}
                />
              </div>
              <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                <h1 className="about-title" align="left">
                  Nice to meet you!
                </h1>
                <br></br>
                <p className="about-text" align="left">
                  I’m a product designer with a background in computer science.
                  My favourite parts of the design process are the beginning
                  (research) and the end (hand-off), because that’s where teams
                  intersect and collaborate the most.
                </p>
                <br></br>
                <p className="about-text" align="left">
                  Current obsessions: <br></br>· Copy — words are fascinating{' '}
                  <br></br>· Systems thinking <br></br>· Product thinking
                </p>
                <br></br>
                <p className="about-text" align="left">
                  Outside of design I like creating{' '}
                  <a
                    className="link text-link"
                    href="https://society6.com/linarts/collection/gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    art
                  </a>
                  , reading{' '}
                  <a
                    className="link text-link"
                    href="https://www.goodreads.com/carolina-li"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    books
                  </a>
                  , and discovering new{' '}
                  <a
                    className="link text-link"
                    href="https://open.spotify.com/playlist/5UevL1bTnQltqNFw1iMA12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    music
                  </a>
                  . I’m also designing at{' '}
                  <a
                    className="link text-link"
                    href="https://loolabs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LooLabs
                  </a>{' '}
                  and learning guitar 🎸
                </p>
                <br></br>
                <p className="about-text" align="left">
                  Thanks for stopping by!
                </p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container text-section pb-5">
          <div className="row no-gutters about-row">
            <div className="col-lg-7 mb-4">
              <h1 className="title" align="left">
                Artwork
              </h1>
              <p className="about-text" align="left">
                I like watercolours, digital art, and painting outdoors. Currently
                pursuing a minor in Fine Arts and want to learn character art /
                caricatures.
              </p>
            </div>
          </div>
          <div className="row gx-5 about-row">
            <div className="col-lg-4 pl-0">
              <img
                className="img-fluid"
                src={artWatercolour}
                alt="painting of a pond with a flying bird"
              />
              <p>
                <br></br>Animated watercolour
              </p>
            </div>
            <div className="col-lg-4 pl-0">
              <img
                className="img-fluid"
                src={artWalkcycle}
                alt="line drawing of a walking tiger"
              />
              <p>
                <br></br>Walkcycle
              </p>
            </div>
            <div className="col-lg-4 pl-0">
              <img
                className="img-fluid"
                src={this.state.hover ? artAcrylicAnimate : artAcrylic}
                alt="portrait"
                onMouseOver={() => this.hoverHandler('hover')}
                onMouseOut={() => this.unhoverHandler('hover')}
              />
              <p>
                <br></br>Acrylic painting
              </p>
            </div>
          </div>
          <div className="row gx-5 about-row">
            <div className="col text-right">
              <a
                className="link text-link"
                href="https://society6.com/linarts/collection/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                Art store{' '}
              </a>
              <img
                className="img-fluid"
                src={iconExternalLink}
                alt="external link icon"
              />
            </div>
          </div>
        </div>

        <div className="container text-section pt-5 pb-5">


          <div className="row">
            <div className="col-lg-7 mb-4">
              <h1 className="title" align="left">
                Books
              </h1>
              <p className="about-text" align="left">
                Old and new favourites.
              </p>
            </div>
          </div>



          <div className="row gx-5 about-row">
            <div className="col-sm-6 col-lg-3 pl-0 pr-0 pb-5">
              <div className="col-sm-11 pl-0 pr-0">
                <img
                  className="img-fluid"
                  src={bookUniversal}
                  alt="cover of Universal Principles of Design by Lidwell et. al."
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 pl-0 pr-0 pb-5">
              <div className="col-sm-11 pl-0 pr-0">
                <img
                  className="img-fluid"
                  src={bookStoneAngel}
                  alt="cover of Stone Angel by Margaret Laurence"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 pl-0 pr-0 pb-5">
              <div className="col-sm-11 pl-0 pr-0">
                <img
                  className="img-fluid"
                  src={bookBraveNewWorld}
                  alt="cover of Brave New World by Aldous Huxley"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 pl-0 pr-0 pb-5">
              <div className="col-sm-11 pl-0 pr-0">
                <img
                  className="img-fluid"
                  src={bookDune}
                  alt="cover of Dune by Frank Herbert"
                />
              </div>
            </div>
          </div>
          
          {/* attempt to align the right */}
          {/* <div className="row d-flex justify-content-lg-between gx-5 about-row">
            <div className="col-sm-6 col-lg-3 pb-5">
              <img
                className="img-fluid"
                src={bookUniversal}
                alt="cover of Universal Principles of Design by Lidwell et. al."
              />
            </div>
            <div className="col-sm-6 col-lg-3 pb-5">
              <img
                className="img-fluid"
                src={bookStoneAngel}
                alt="cover of Stone Angel by Margaret Laurence"
              />
            </div>
            <div className="col-sm-6 col-lg-3 pb-5">
              <img
                className="img-fluid"
                src={bookBraveNewWorld}
                alt="cover of Brave New World by Aldous Huxley"
              />
            </div>
            <div className="col-sm-6 col-lg-3 pb-5">
              <img
                className="img-fluid"
                src={bookDune}
                alt="cover of Dune by Frank Herbert"
              />
            </div>
          </div> */}



          <div className="row gx-5 about-row">
            <div className="col text-right">
              <a
                className="link text-link"
                href="https://www.goodreads.com/carolina-li"
                target="_blank"
                rel="noopener noreferrer"
              >
                Goodreads{' '}
              </a>
              <img
                className="img-fluid"
                src={iconExternalLink}
                alt="external link icon"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <FooterComponent />
      </>
    );
  }
}

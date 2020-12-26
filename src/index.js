import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; //need to import router or else white screen
import { HashRouter } from 'react-router-dom';
import './index.css';
import AboutPage from './components/AboutPageComponent';
import Homepage from './components/HomepageComponent';
import Ciroc from './components/caseStudies/Ciroc';
import Fridgeful from './components/caseStudies/Fridgeful';
import LCBODesignSystem from './components/caseStudies/LCBODesignSystem';
import Slack from './components/caseStudies/Slack';
import EA from './components/caseStudies/EA';
import LCBO from './components/caseStudies/LCBO';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Use Router for local testing if HashRouter isn't working
  <HashRouter>
    <Switch>
      <Route path = "/" exact component = {Homepage} />
      <Route path = "/about" component = {AboutPage} />
      <Route path = "/ciroc" component = {Ciroc} />
      <Route path = "/fridgeful" component = {Fridgeful} />
      <Route path = "/lcboDesignSystem" component = {LCBODesignSystem} />
      <Route path = "/slack" component = {Slack} />
      <Route path = "/ea" component = {EA} />
      <Route path = "/lcbo" component = {LCBO} />
      <Redirect from='*' to='/' />
    </Switch>
  </HashRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

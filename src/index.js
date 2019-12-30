import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import AboutPage from './components/AboutPageComponent';
import Homepage from './components/HomepageComponent';
import Ciroc from './components/caseStudies/Ciroc';
import Fridgeful from './components/caseStudies/Fridgeful';
import LCBODesignSystem from './components/caseStudies/LCBODesignSystem';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path = "/" exact component = {Homepage} />
      <Route path = "/about" component = {AboutPage} />
      <Route path = "/ciroc" component = {Ciroc} />
      <Route path = "/fridgeful" component = {Fridgeful} />
      <Route path = "/lcboDesignSystem" component = {LCBODesignSystem} />
    </Switch>
  </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

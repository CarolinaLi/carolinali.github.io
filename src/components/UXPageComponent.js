import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import '../css/Global.css';
import FridgefulComponent from './caseStudies/Fridgeful';

export default class UXPageComponent extends Component {
  render() {  
    return (
      <>
        <Header />
        <FridgefulComponent />
      </>
    );
  }
}

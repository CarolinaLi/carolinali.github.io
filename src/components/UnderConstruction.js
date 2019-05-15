import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import '../css/Global.css';

export default class UnderConstructionComponent extends Component {
  render() {  
    return (
      <>
        <Header />
        <h1 className="block">Working on this page right now!</h1>
      </>
    );
  }
}

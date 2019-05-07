import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Homepage from './components/HomepageComponent';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;

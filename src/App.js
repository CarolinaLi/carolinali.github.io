import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="text-block">
          <h1>CAROLINA LI</h1>
          <p>Hi! I study computer science at uWaterloo and art in my free time.</p>
          <p>Welcome to my portfolio.</p>
        </div>
      </div>
    );
  }
}

export default App;

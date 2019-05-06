import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="block">
          <h1>CAROLINA LI</h1>
          <p>
            Hi! I study computer science at uWaterloo and art in my free time.
          </p>
          <p>Welcome to my portfolio.</p>
        </div>
        <div className="container-fluid block">
          <div className="row no-gutters">
            <div className="col-sm-4">
              <img src={require('./images/green.png')} alt="dev" />
            </div>
            <div className="col-sm-4">
              <img src={require('./images/blue.png')} alt="ux" />
            </div>
            <div className="col-sm-4">
              <img src={require('./images/red.png')} alt="art" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

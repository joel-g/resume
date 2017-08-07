import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentContent: null
    }
  }



  hoverHandler(e) {
    e.preventDefault();
    this.setState();
  }




  render() {
    return (
      <div className="App">
        <div className="App-header lime">
          <h1>joel guerra</h1>
          <h2 className="cyan">
            i build things</h2>
            <h2 className="magenta">
            i commit everyday
          </h2>
        </div>
        <div className='what'>
        what can I build?
        </div>
      </div>
    );
  }
}

export default App;

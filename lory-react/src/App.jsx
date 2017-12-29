import React, { Component } from 'react';
import Slideshow from './Slideshow.jsx'

class App extends Component {
  render() {
    console.log('t', this.slideshow)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Slideshow ref={(slideshow) => { window.slideshow = slideshow;}} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import {lory} from 'lory.js';

import './App.css'

const data = [{
  id: 56,
  title: 'Hello'
}, {
  id: 55,
  title: 'Hello'
}, {
  id: 54,
  title: 'Hello'
}, {
  id: 53,
  title: 'Hello'
}]

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.stop = false;
    this.now = null;
    this.elapsed = null;
    this.fps = null;
    this.then = null;
    this.fpsInterval = null;
    this.startTime = null;
    this.timeout = null;
    this.isManualSlide = false;
    this.state = {
        foo: 5
    }


    this.handleClick = this.handleClick.bind(this);
    this.handleSliding = this.handleSliding.bind(this);
  }

  componentDidMount() { 
    // document.addEventListener('DOMContentLoaded', function () {
      // var slider = document.querySelector('.js_slider');

      this.loryInst = lory(this.slider, {
        infinite: 1
      });
      this.autoplay()
      this.slider.addEventListener('after.lory.slide', this.handleSliding)
  }

  renderItem(data) {
    return (<li key={data.id} className="js_slide">{ data.title } { data.id }</li>)
  }

  autoplay() {
    const animate = () => {
      requestAnimationFrame(animate);
      
      this.now = Date.now();
      this.elapsed = this.now - this.then;

      if (this.elapsed > this.fpsInterval && !this.stop) {
        this.then = this.now - (this.elapsed % this.fpsInterval);
        this.loryInst.next();
      }
    }

    const startAnimating = (fps) => {
      this.fpsInterval = 1000 / fps;
      this.then = Date.now();
      this.startTime = this.then;
      animate();
    }

    startAnimating(.4);
  }

  resetTimer() {
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    this.then = this.now - (this.elapsed % this.fpsInterval);
  }

  handleClick(e) {
    this.stop = true;
    this.isManualSlide = true;
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.resetTimer();
      this.stop = false;
    }, 2500)
  }

  handleSliding() {
    //   console.log('f', this.isManualSlide)
    // if(this.isManualSlide) {
    //     this.resetTimer();
    //     this.isManualSlide = false;
    //     this.stop = false;
    // }
  }

  render() {
    return (
      <div className="App">
          <p>{ this.state.foo }</p>
          <div className="slider js_slider" ref={(slider) => { this.slider = slider}}>
            <div className="frame js_frame">
                <ul className="slides js_slides">
                    { data.map(this.renderItem) }
                </ul>
            </div>
            <button onClick={this.handleClick} type="button" className="js_prev prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
            </button>
            <button onClick={this.handleClick} type="button" className="js_next next">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
            </button>
        </div>
      </div>
    );
  }
}

export default Slideshow;

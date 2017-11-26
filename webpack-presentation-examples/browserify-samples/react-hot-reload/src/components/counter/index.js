import React, { Component } from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    updateCounter(type) {
        if(type === 'increment') {
            this.setState({
                value: this.state.value + 1
            })
        } else {
            this.setState({
                value: this.state.value - 1
            })
        }
    }

    render() {
        return (
            <div>
                <h1 className="counter">Counter value: {this.state.value}</h1>
                <button onClick={this.updateCounter.bind(this, 'decrement')}>Decrement</button>
                <button onClick={this.updateCounter.bind(this, 'increment')}>Increment</button>
            </div>
        )
    }
}

export default Counter;
  
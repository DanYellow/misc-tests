import React from 'react';
import Loadable from 'react-loadable';



import { reverse } from 'lodash';
import MySlowComponent from '../my-slow-component';

import styles from './hello-message.css'
import kitten from './kitten.jpg'



class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            MySlowComponent: null
        }
        this.reverseName = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.timeEnd()
    }

    componentWillMount() {
        console.time()
        // import('../my-slow-component').then(MySlowComponent => {
        //     this.setState({ MySlowComponent: MySlowComponent.default });
        // });
    }

    handleChange() {
        this.setState({
            name: reverse(this.state.name.split('')).join('')
        })
    }

    render() {
        // let {MySlowComponent} = this.state;

        return (
            <div className="message">
                {/* <img src={kitten} width="150" /> */}
                Hello {this.state.name}
                <button onClick={this.reverseName}>Reverse it</button>
                <MySlowComponent />
                {/* { MySlowComponent ? <MySlowComponent /> : <div>Loading...</div> } */}
            </div>
        )
    }
}

export default HelloMessage;

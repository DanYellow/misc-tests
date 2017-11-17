import React from 'react';
import { reverse } from 'lodash'

import styles from './hello-message.css'
import kitten from './kitten.jpg'

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
        this.reverseName = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            name: reverse(this.state.name.split('')).join('')
        })
        // import('lodash').then(({reverse}) => {
        //     this.setState({
        //         name: reverse(this.state.name.split('')).join('')
        //     })
        // })
    }

    render() {
        return (
            <div className="message">
                <img src={kitten} width="150" />
                Hello {this.state.name}
    
                <button onClick={this.reverseName}>Reverse it</button>
            </div>
        )
    }
}

export default HelloMessage;

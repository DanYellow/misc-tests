import React from 'react';

export default class MySlowComponent extends React.PureComponent {
    constructor(props) {
        super(props);
   }
    renderMySlowPart () {
        const list = [];
        for (let i = 0; i < 500000; i++) {
            list.push(<li key={i}>{i * (i-1)}</li>)
        }
        return list;
    }
    render() {
        return (
            <div>
                <p>I'm rendered !</p>
                <ul>
                    { this.renderMySlowPart() }
                </ul>
            </div>
        );
    }
}
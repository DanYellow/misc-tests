import React from 'react';

import './reset.css'
import './main.css'
import HelloMessage from './components/hello-message'
import Counter from './components/counter'

const App = () => {
    return (
        <div>
            <HelloMessage name="Qedzébcu !" />
            <Counter />
        </div>
    )
}

export default App;
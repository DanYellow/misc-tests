import ReactDOM from 'react-dom';
import React from 'react';

// import './reset.css'
import HelloMessage from './components/hello-message'
import Counter from './components/counter'

ReactDOM.render(
    <div>
      <HelloMessage name="Mtlof !" />
      <Counter />
    </div>,
    document.getElementById('app')
  );
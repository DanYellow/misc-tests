import ReactDOM from 'react-dom';
import React from 'react';

import './reset.css'
// import HelloMessage from './components/hello-message'
import HelloMessage from './components/react-async-hello-message'
// import HelloMessage from './components/async-hello-message'

ReactDOM.render(
  <HelloMessage name="Québec !" />,
  document.getElementById('app')
);
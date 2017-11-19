import ReactDOM from 'react-dom';
import React from 'react';

import './reset.css'
import HelloMessage from './components/hello-message'

ReactDOM.render(
    <HelloMessage name="Québec !" />,
    document.getElementById('app')
  );
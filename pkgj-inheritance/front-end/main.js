import moment from 'moment';
import voca from 'voca'; // Comes from the local package.json

import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    <div>
        <h1>Hello, @carmen !</h1>
        { moment().format('MMMM Do YYYY, h:mm:ss a') }
        You know what? React, React and react-dom are loaded from my parent folder, this is so cool!
        <p> { voca.kebabCase('TOP KEK') }</p>
    </div>,
    document.getElementById('root')
);
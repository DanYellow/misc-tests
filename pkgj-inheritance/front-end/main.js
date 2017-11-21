import moment from 'moment';

import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    <div>
        <h1>Hello, @carmen !</h1>
        { moment().format('MMMM Do YYYY, h:mm:ss a') }
        You know what? React, React and react-dom are loaded from my parent folder, this is so cool!
    </div>,
    document.getElementById('root')
);
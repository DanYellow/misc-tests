import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader'

import App from './app.js'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    )
}

render(App)

if (module.hot) {
  module.hot.accept('./app.js', () => { render(App) })
}

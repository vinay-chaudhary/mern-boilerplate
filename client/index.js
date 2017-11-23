import React from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';
// import { AppContainer } from 'react-hot-loader';
import App from './App';
// import { configureStore } from './store';


// Initialize store

// const store = configureStore();
const mountApp = document.getElementById('root');

render(
    <App />,
    mountApp
);
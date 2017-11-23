// /* eslint-disable no-console */

import Express from 'express';
import path from 'path';

// // Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Mongoose Conguration
import './db';

import config from '../webpack.config.dev';
import initialRendering from './utils/ssr';
import logger from './utils/logger';

// // Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(Express.static(path.resolve(__dirname, '../dist')));
app.use(Express.static('public'));

// Server Side Rendering based on routes matched by React-router.
app.use(initialRendering);

// start app
const server = app.listen(process.env.PORT || 9000, (error) => {
    if (!error) {
      logger.info(`Traffic Analyser is running on port:${process.env.PORT || 9000}`);
    }
});

server.timeout = 600000;

export default server;


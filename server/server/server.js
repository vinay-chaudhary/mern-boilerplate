// /* eslint-disable no-console */

import Express from 'express';
import path from 'path';

// Mongoose Conguration
import './db';


import initialRendering from './utils/ssr';
import logger from './utils/logger';

// // Initialize the Express App
const app = new Express();

if (process.env.NODE_ENV === 'production') {
    app.use(Express.static(path.resolve(__dirname, '../../client/build')));
    app.use(Express.static('public'));
}

// Server Side Rendering based on routes matched by React-router.
app.use(initialRendering);

// start app
const server = app.listen(process.env.PORT || 9000, (error) => {
    if (!error) {
      logger.info(`App is running on port:${process.env.PORT || 9000}`);
    }
});

server.timeout = 600000;

export default server;


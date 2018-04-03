/**
 * Entry Script
 */
require('dotenv').config()
if (process.env.NODE_ENV === 'production') {
    // process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
    // process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
    // In production, serve the webpacked server file.
    require('babel-register')({
        "plugins": [
            [
                "babel-plugin-webpack-loaders",
                {
                    "config": "./webpack.config.babel.js",
                    "verbose": false
                }
            ]
        ]
    });
    require('babel-polyfill');
    require('./dist/server.bundle.js');
} else {
    // Babel polyfill to convert ES6 code in runtime
    require('babel-register')({
        "plugins": [
            [
                "babel-plugin-webpack-loaders",
                {
                    "config": "./webpack.config.babel.js",
                    "verbose": true
                }
            ]
        ]
    });
    require('babel-polyfill');
    // process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
    // process.env.vendor = JSON.stringify(require('./dist/vendor.js'));
    // process.env.app = JSON.stringify(require('./dist/app.js'));
    // process.env.style = JSON.stringify(require('./dist/app.css'));
    require('./server/server');
}


// process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
// process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
// // In production, serve the webpacked server file.
// require('./dist/server.bundle.js');

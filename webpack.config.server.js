var fs = require('fs');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: path.resolve(__dirname, 'server/server.js'),

    output: {
        path: __dirname + '/dist/',
        filename: 'server.bundle.js',
    },

    target: 'node',

    node: {
        __filename: true,
        __dirname: true,
    },

    externals: [nodeExternals({
        importType: 'commonjs',
    })],

    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        modules: [
            'client',
            'node_modules',
        ],
    },

    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader',
            }
        ],
    },
};

module.exports = {
    output: {
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                use: 'url-loader?limit=10000',
            }
        ],
    },
};

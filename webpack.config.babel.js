var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');

var cssModulesIdentName = '[name]__[local]__[hash:base64:5]';
if (process.env.NODE_ENV === 'production') {
    cssModulesIdentName = '[hash:base64]';
}

module.exports = {
    output: {
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            'client',
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: cssModulesIdentName,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                use: 'url-loader?limit=10000',
            },
        ],
    },
};

// postcss: () => [
//   postcssFocus(),
//   cssnext({
//     browsers: ['last 2 versions', 'IE > 10'],
//   }),
//   postcssReporter({
//     clearMessages: true,
//   }),
// ],

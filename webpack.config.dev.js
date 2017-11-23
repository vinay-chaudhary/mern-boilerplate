var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'hidden-source-map',

    entry: {
        app: [
            'eventsource-polyfill',
            // 'webpack-hot-middleware/client',
            // 'webpack/hot/only-dev-server',
            // 'react-hot-loader/patch',
            // './client/scripts/custom.js',
            './client/index.js',
        ],
        vendor: [
            'babel-polyfill',
            // 'react',
            // 'react-dom',
            // 'jquery',
            // 'bootstrap',
            // 'moment',
            // './client/vendor/jquery/dist/jquery.min.js',
            // './client/vendor/jquery-ui/jquery-ui.min.js',
            // './client/vendor/slimScroll/jquery.slimscroll.min.js',
            // './client/vendor/bootstrap/dist/js/bootstrap.min.js',
            // './client/vendor/metisMenu/dist/metisMenu.min.js',
            // './client/vendor/sparkline/index.js',
            // './client/vendor/highchart/highcharts.js'
        ],
    },

    output: {
        path: __dirname + '/dist/',
        filename: 'app.js',
        publicPath: '/',
    },

    // output: {
    //   path: __dirname,
    //   filename: 'app.js',
    //   publicPath: 'http://0.0.0.0:9080/',
    // },

    resolve: {
        extensions: ['.js', '.jsx'],
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
                            localIdentName: '[local]',
                            sourceMap: true,
                        },
                    },
                    'postcss-loader',
                ],
            }, {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.jsx*$/,
                exclude: [/node_modules/, /.+\.config.js/],
                use: 'babel-loader',
            }, {
                test: /\.(jpe?g|gif|png|svg|jpg)$/i,
                use: 'url-loader?limit=10000',
            }, {
                test: /\.(woff|woff2|eot|ttf|jpg|png)(\?.*$|$)/,
                use: 'file-loader',
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.js',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],

};

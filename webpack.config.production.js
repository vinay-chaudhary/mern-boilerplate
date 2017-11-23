var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var cssnano = require('cssnano');

module.exports = {

    devtool: 'hidden-source-map',

    entry: {
        app: [
            // './client/scripts/custom.js',
            './client/index.js'
        ],
        vendor: [
            'babel-polyfill',
            // 'react',
            // 'react-dom',
            // 'jquery',
            // 'bootstrap',
            // 'moment',
            // './client/vendor/jquery-ui/jquery-ui.min.js',
            // './client/vendor/slimScroll/jquery.slimscroll.min.js',
            // './client/vendor/metisMenu/dist/metisMenu.min.js',
            // './client/vendor/sparkline/index.js',
            // './client/vendor/highchart/highcharts.js'
        ]
    },

    output: {
        path: __dirname + '/dist/',
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },

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
                include: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                })
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                }),
            }, {
                test: /\.jsx*$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }, {
                test: /\.(jpe?g|gif|png|svg|jpg)$/i,
                use: 'url-loader',
            }, {
                test: /\.(woff|woff2|eot|ttf|jpg|png)(\?.*$|$)/,
                use: 'file-loader',
            }
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        new ExtractTextPlugin({
            filename: 'app.[chunkhash].css',
            allChunks: true,
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: '/',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),
        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest',
            inlineManifest: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
};
//
// new webpack.optimize.CommonsChunkPlugin({
//   name: 'vendor',
//   minChunks: Infinity,
//   filename: 'vendor.js',
// }),
// new ExtractTextPlugin({
//    filename: 'app.[chunkhash].css',
//    allChunks: true,
// }),
// new ManifestPlugin({
//   basePath: '/',
// }),
// new ChunkManifestPlugin({
//   filename: "chunk-manifest.json",
//   manifestVariable: "webpackManifest",
//   inlineManifest: false,
// }),

  //    new ExtractTextPlugin('app.[chunkhash].css', {
      //   allChunks: true
      // }),
  // postcss: () => [
  //   postcssFocus(),
  //   cssnext({
  //     browsers: ['last 2 versions', 'IE > 10'],
  //   }),
  //   cssnano({
  //     autoprefixer: false
  //   }),
  //   postcssReporter({
  //     clearMessages: true,
  //   }),
  // ],

'use strict';
var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'out'),
        publicPath: '/public/'
        //path: __dirname + '/out',
        //filename: '[name].js',
        //chunkFilename: '[id].chunk.js',
        //publicPath: '/out/'
    },
    //externals: {
    //    'react': 'React'
    //},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            },
            '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
        }),
        new HtmlWebpackPlugin({
            title: '微房产-运营后台',
            filename: 'index.html',
            template: 'index.template.html',
            favicon: path.join(__dirname, 'public', 'images', 'favicon.ico')
        })
    ],
    //plugins: [
    //    new webpack.optimize.CommonsChunkPlugin('shared', 'shared.js', Infinity),
    //    new webpack.DefinePlugin({
    //        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    //    }),
    //    new webpack.HotModuleReplacementPlugin(),
    //    new webpack.ProvidePlugin({
    //        React: 'react',
    //        ReactDOM: 'react-dom',
    //        reqwest: 'reqwest',
    //    }),
    //],
    module: {
        //loaders: [
        //    //{ test: /\.js$/, loader: "jsx!babel", include: "/backend/src/"},
        //    { test: /\.js$/, exclude: /node_modules/, loader: 'jsx!babel' },
        //    { test: /\.css$/, loader: "style!css"},
        //    { test: /\.scss$/, loader: "style!css!sass"},
        //    { test: /\.less$/, loader: "style!css!less"}
        //]
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' },
            { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'prototype') },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
        ]
    },
    cssnext: {
        browsers: 'last 2 versions'
    }
};
const webpackMerge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

const config = {
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: '/(node_modules|bower_components)/'
    }
};
module.exports = [
    webpackMerge(webpackConfig[0], config),
    webpackMerge(webpackConfig[1], config)
];
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};

const delegationConfig = {
    ...config, ...{
        name: "event-delegation",
        entry: './event-delegation.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'event-delegation.js'
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        mangle: {
                            reserved: ['eventType', 'selector', 'listener', 'useCapture']
                        }
                    }
                })
            ]
        }
    }
};
const exampleConfig = {
    ...config, ...{
        name: "example",
        entry: {
            index: './extras/example/src/index.js'
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],
        output: {
            path: path.resolve('./extras/example/dist')
        },
        optimization: {
            minimize: false
        }
    }
};

// Return Array of Configurations
module.exports = [
    delegationConfig, exampleConfig,
];
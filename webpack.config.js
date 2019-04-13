const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        entry: './src/event-delegation.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'event-delegation.js'
        },
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
            index: './demo/example/src/index.js'
        },
        output: {
            path: path.resolve('./demo/example/dist')
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
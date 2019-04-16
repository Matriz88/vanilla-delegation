const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

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

const delegationConfig = webpackMerge(
  config, {
    name: 'vanilla-delegation',
    entry: {
      'vanilla-delegation': './vanilla-delegation.js',
      'vanilla-delegation.min': './vanilla-delegation.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules|dist/,
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/,
          uglifyOptions: {
            mangle: {
              reserved: [
                'eventType',
                'selector',
                'handler'
              ]
            }
          }
        })
      ]
    }
  }
);
const exampleConfig = webpackMerge(
  config, {
    name: 'example',
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
);
const perfConfig = webpackMerge(
  config, {
    name: 'perf-test',
    entry: {
      index: './extras/perf-test/src/index.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    output: {
      path: path.resolve('./extras/perf-test/dist')
    },
    optimization: {
      minimize: false
    }
  }
);

// Return Array of Configurations
module.exports = [
  delegationConfig,
  exampleConfig,
  perfConfig
];

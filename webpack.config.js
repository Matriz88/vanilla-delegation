const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

const config = {
  stats: {
    all: false,
    modules: true,
    errors: true,
    warnings: true,
    colors: true,
  },
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
  }
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        terserOptions: {
          keep_fargs: true
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

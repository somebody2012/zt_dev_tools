//@ts-check

'use strict';

const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
  context: path.resolve(__dirname),
  mode:"development",
  target: 'node',

  entry: './src/extension.ts',
  output:  { 
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  // devtool: "none",
  externals: [
    {vscode: 'commonjs vscode'}
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      // '@': path.resolve(__dirname,'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.test\.ts$/,
          exclude: /node_modules/,
            use: [
              { loader: 'ignore-loader'}
            ]
      },
      {
        test: /\.ts$/,
          exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader'
              }
            ]
      }
    ]
  }
  
};
module.exports = config;
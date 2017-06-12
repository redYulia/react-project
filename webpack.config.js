webpack = require('webpack');
path = require('path');
module.exports = {
    entry: {
        1: './frontend/js/1.js',
        2: './frontend/js/2.jsx'
    },
    output: {
        path: path.resolve(__dirname, './tmp/js/'),
        filename: "[name].js"
    },
    resolve: {
      modules: [
          path.resolve(__dirname, './node_modules')
      ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));

module.exports = {
    entry: {
        filename:'./src/js/app.jsx'
    },
    output: {
        filename: './public/js/app.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx$/, 
                loader: 'react-hot-loader',
                exclude: /node_modules/ 
            },
            {
                test: /\.jsx$/, 
                loader:'jsx-loader',
                exclude: /node_modules/ 
            },
            {
                test: /\.jsx$/, 
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            }
        ]
       },
    plugins: [
        new CleanWebpackPlugin(['./public'], {
          exclude: ['index.html']
        })
    ],
    watch: true
};

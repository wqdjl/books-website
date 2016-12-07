let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: {
        app: path.resolve(__dirname, '../src/app/main.ts'),
        polyfills: path.resolve(__dirname, '../src/polyfills.ts'),
        //vendors:path.resolve(__dirname, '../src/vendors.ts'),
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader', 'style-loader', 'css-loader'],
                include: path.resolve(__dirname, '../src/app')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: path.resolve(__dirname, '../src/app')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url?limit=10240&name=assets/[name].[hash].[ext]'
            }

        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.css']
    },
    plugins: [

    ]
};

module.exports = config;
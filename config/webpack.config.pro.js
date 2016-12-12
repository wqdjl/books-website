let path=require('path');
let webpack=require('webpack');
let HtmlPlugin=require('html-webpack-plugin');
let ExtractTextPlugin=require('extract-text-webpack-plugin');
let merge=require('webpack-merge');
let commonConfig=require('./webpack.config.common.js');

let proConfig={
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'../build')
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                dev:false
            }
        }),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest: require(path.resolve(__dirname, '../temp/manifest.json'))
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:true,
            comments:false
        }),
        new HtmlPlugin({
            template:path.resolve(__dirname, '../temp/index.html'),
        }),
        new ExtractTextPlugin('style.[hash].css')
    ]
}

module.exports=merge(commonConfig,proConfig);
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:'http://localhost:8080/'
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{importloaders:1}
                    },'postcss-loader']
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        new UglifyJsPlugin(),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
          })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: '8080',
        compress: true
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500,
        ignored: /node_modules/
    }
};


const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    devServer: {
        port: 8080,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    
    module: {
        rules: [
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource'
                
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'SleepBabySleep',
            filename: 'index.html',
            template: 'src/index.html'
        }),
    ],
}
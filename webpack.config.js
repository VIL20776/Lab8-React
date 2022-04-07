const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'/bundle'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: 
                {
                    loader: 'file-loader',
                }
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html'
        })
    ]
}
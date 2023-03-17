const CopyWebpackPlugin = require('copy-webpack-plugin')
__webpack_base_uri__ = 'http://localhost:8080';
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { loader } = require('mini-css-extract-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {

    entry: path.resolve(__dirname, '../src/index.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
        [
            // new CopyWebpackPlugin({
            //     patterns: [
            //         { from: path.resolve(__dirname, '../static') }
            //     ]
            // }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                minify: true
            }),
            new MiniCSSExtractPlugin()
        ],
    module:
    {
        rules:
            [
                // HTML
                {
                    test: /\.(html)$/,
                    use: ['html-loader']
                },

                // JS
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use:
                        [
                            'babel-loader'
                        ]
                },

                // CSS
                {
                    test: /\.css$/,
                    use:
                        [
                            MiniCSSExtractPlugin.loader,
                            'css-loader'
                        ]
                },
        ]
    }
}

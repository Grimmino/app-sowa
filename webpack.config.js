let path = require('path');

const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



let conf = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '',
    },

    devServer: {
        overlay: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        hot: true
    },

    module: {
        rules: [
            //babel
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            //scss
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },

                    {
                        loader: 'sass-loader'
                    },
                ],
            },

            // image
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[path][name].[ext]',
                }
            },

            //fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[path][name].[ext]',
                }
            },

            //svg
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },

            //pug
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
        ],
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin(
            [
                {from: './src/img', to: 'img'}
            ],
            {
                ignore: [
                    {glob: 'svg/*'},
                ]
            }

        ),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, './src/index.pug'),
        }),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production 
                    ? 'source-map'
                    : 'eval-sourcemap';
    return conf;
}
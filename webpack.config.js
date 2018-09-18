//basik vars - переменные
const path = require('path')
const webpack = require('webpack')


//additional plugins - доп. плагины
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var isProduction = (process.env.NODE_ENV === 'production');


//module settings - настройка модуля
module.exports = {
    //бфзовый путь к проекту
    context: path.resolve(__dirname, 'src'),

    //точки входы js
    entry: {
        //основной файл приложения
        app: [
            './js/app.js',
            './scss/style.scss'
        ],
    },

    //путь для собранных файлов
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },

    //devserver configuration
    devServer: {
        contentBase: './app'
    },

    devtool: (isProduction) ? '' : 'inline-source-map',

    module: {
        rules: [
            //scss
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },

                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true }
                    },
                ],
            },

            // Image
            {
                test: /\.(png|gif|jpg?g)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    'img-loader',
                ]
            },

            //Fonts
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                     {
                         loader: 'file-loader',
                         options: {
                             name: '[path][name].[ext]',
                         }
                     },
                 ]
            },

            //SVG
            {
                test:/\.svg$/,
                loader: 'svg-url-loader',
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
        }),

        new CleanWebpackPlugin(['dist']),

        new CopyWebpackPlugin(
            [
                {from: './img', to: 'img'}
            ],
            {
                ignore: [
                    {glob: 'svg/*'},
                ]
            }

        )
    ],
};


//PRODUCTION ONLY
if (isProduction) {
    module.exports.plugins.push(
        new UglifyJSPlugin({
            sourceMap: true
        }),
    );

    module.exports.plugins.push(
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/,
        }),
    );

    module.exports.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    );
}
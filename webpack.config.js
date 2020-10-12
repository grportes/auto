const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, 'src', 'infra', 'utils'),
            '@components': path.resolve(__dirname, 'src', 'infra', 'components'),
            '@indexedDb': path.resolve(__dirname, 'src', 'infra', 'indexedDb'),
            '@repository': path.resolve(__dirname, 'src', 'repository'),
        }
    }    
};
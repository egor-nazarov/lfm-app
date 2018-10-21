const HtmlWebpackPlugin         = require('html-webpack-plugin');
const ExtractTextPlugin         = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin   = require('optimize-css-assets-webpack-plugin');
const path                      = require('path');

module.exports = {
    entry: "./src/scripts/index.tsx",
    output: {
        filename: "./scripts/bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devtool: "source-map",
    mode: 'development',
    watch: false,
    devServer: {
        historyApiFallback: true,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test:/\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            showErrors: true,
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin({filename:'main.css'}),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ],
};

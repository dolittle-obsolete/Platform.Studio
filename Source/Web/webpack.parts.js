const path = require('path');

const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

let sassBuilder = new ExtractTextPlugin({
    filename: "[name].[hash:5].bundle.css",
    allChunks: true
});

module.exports = {
    loaders: {
        htmlLoader: {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    options: {
                        attrs: ["img:src", "link:href"],
                        interpolate: true,
                    }
                }],
        },
        sassLoader: {
            test: /\.scss$/,
            loader: sassBuilder.extract([
                "css-loader",
                "sass-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => ([
                            require("autoprefixer")()
                        ])
                    }
                }])
        },
        svgLoader: {
            test: /\.svg/,
            use: {
                loader: 'svg-inline-loader',
                options: {
                    removeTags: true,
                    removingTags: ['title', 'desc'],
                    removingTagAttrs: ['id', 'data-name']

                }
            }
        },
        imageLoader: {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name]-[hash:5].[ext]",
                    outputPath: "images/"
                }
            }
            ]
        },
        babelLoader: {
            test: /\.js$/i,
            loader: 'babel-loader',
            exclude: nodeModulesDir,
            options: {},
        }
    },
    plugins: {
        cleanDistFolder: new CleanWebpackPlugin(["dist/*"]),
        buildHtmlIndex: new HtmlWebpackPlugin({
            template: "./app/layout.ejs",
            filename: "index.html"
        }),
        sassBuilder: sassBuilder
    }
}

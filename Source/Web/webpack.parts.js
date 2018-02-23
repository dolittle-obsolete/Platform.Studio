const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let sassBuilder = new ExtractTextPlugin({
    filename: "[name].[hash:5].bundle.css",
    allChunks: true
});

module.exports = {
    loaders: {
        htmlLoader: {
            test: /\.html$/,
            exclude: /layout.html/,
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
        }
    },
    plugins: {
        cleanDistFolder: new CleanWebpackPlugin(["dist/*"]),
        buildHtmlIndex: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "index.html"
        }),
        buildHtmlSecond: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "secondpage/index.html"
        }),
        sassBuilder: sassBuilder
    }
}

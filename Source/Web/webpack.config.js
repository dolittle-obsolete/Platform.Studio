const path = require('path');
const configParts = require("./webpack.parts");

const srcDir = path.resolve(__dirname, 'app');
const outputDir = "dist";

module.exports = [{
    entry: ['./app/scripts/index.js', './app/styles/style.scss'],
    output: {
        filename: 'bundle.[hash:5].js',
        path: path.resolve(__dirname, outputDir)
    },
    module: {
        rules: [
            configParts.loaders.htmlLoader,
            configParts.loaders.sassLoader,
            configParts.loaders.svgLoader,
            configParts.loaders.imageLoader
        ]
    },
    plugins: [
        configParts.plugins.cleanDistFolder,
        configParts.plugins.buildHtmlIndex,
        configParts.plugins.sassBuilder
    ],
    devServer: {
        contentBase: './' + outputDir,
        port: 1337,
        open: true
    }
}];

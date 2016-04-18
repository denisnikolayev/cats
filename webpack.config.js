/// <binding ProjectOpened='Hot' />
// ReSharper disable once PossiblyUnassignedProperty
var path = require("path");
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: "",
    entry: [
        "webpack-dev-server/client?http://localhost:3002",
        "webpack/hot/only-dev-server",
        "./Style/app.scss",
        "./scripts/app.tsx"
    ],
    output: {
        path: path.join(__dirname, "wwwroot"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".tsx", ".js", "", ".scss", ".png", ".jpg"]
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ["react-hot", "ts-loader"],
            include: path.join(__dirname, "scripts")
        },
        { test: /\.png|\.jpg$/, loader: "url-loader?limit=100000" },
        {
            test: /\.scss$/,
            exclude: /node_modules|lib/,
            loader: 'style!css!sass',
            include: __dirname
        }]
    },
    plugins:[new WebpackNotifierPlugin()],
    debug: true,
    devServer: {
        contentBase: "./wwwroot",
        host: "localhost",
        port: 3002,
        proxy: {
            '/api/*': {
                target: 'http://localhost:30155',
                secure: false
            }
        },
        historyApiFallback: true
    }
};
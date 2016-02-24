var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: '',
    entry: [
         'webpack-dev-server/client?http://localhost:3002',
         'webpack/hot/only-dev-server',
        './scripts/app.tsx'
    ],
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.js', '']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['react-hot', 'ts-loader'],
            include: path.join(__dirname, 'scripts')
        }]
    },
    debug: true,
    devServer: {
        contentBase: "./wwwroot",
        host: "localhost",
        port: 3002
    },
};
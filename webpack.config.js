const { optimize } = require('webpack');

module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

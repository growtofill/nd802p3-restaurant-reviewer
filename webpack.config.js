const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { dependencies: deps } = require('./package.json');

const excludedDeps = ['bootstrap'];
const vendor = Object.keys(deps).filter(dep => !excludedDeps.includes(dep));

let plugins = [
    new CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
    }),
];
let devtool = 'source-map';

if (process.env.NODE_ENV === 'production') {
    plugins = plugins.concat([
        new UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
    ]);
    devtool = null;
}

module.exports = {
    entry: {
        app: './src',
        vendor,
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    devtool,
    plugins,
};

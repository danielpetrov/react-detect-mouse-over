const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    context: __dirname,
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: `bundle.js`
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: true
            },
            comments: false
        })
    ],
    resolve: {
        extensions: ['', '.js']
    }
}

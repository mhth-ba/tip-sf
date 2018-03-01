// https://robertknight.me.uk/posts/webpack-dll-plugins/
// https://medium.com/@soederpop/webpack-plugins-been-we-been-keepin-on-the-dll-cdfdd6cb8cd7
// https://medium.com/@emilycoco/how-to-use-the-dll-plugin-to-speed-up-your-webpack-build-dbf330d3b13c

const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackConfig = {
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less', '.scss'],
        modules: [__dirname, 'node_modules']
    },

    entry: {
        library: [
            'jquery',
            'bootstrap',
            'dropzone',
            'moment',
            'babel-polyfill',
            'isomorphic-fetch',
            'classnames',
            'particles.js',
            'riek2',
            'lodash',
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'redux-saga',
            'redux-devtools-extension',
            'reactstrap',
            'react-fontawesome',
            'react-number-format',
            'react-dropzone-component',
            'react-moment',
            'react-notification-system',
            'react-notification-system-redux'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'web', 'build', 'library'),
        filename: '[name].dll.js',
        library: '[name]'
    },

    plugins: [
        new CleanWebpackPlugin('web/build/**/*.*'),

        new webpack.DllPlugin({
            name: '[name]',
            path: './web/build/library/[name].json'
        })
    ]
}

module.exports = webpackConfig
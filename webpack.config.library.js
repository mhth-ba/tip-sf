// https://robertknight.me.uk/posts/webpack-dll-plugins/
// https://medium.com/@soederpop/webpack-plugins-been-we-been-keepin-on-the-dll-cdfdd6cb8cd7
// https://medium.com/@emilycoco/how-to-use-the-dll-plugin-to-speed-up-your-webpack-build-dbf330d3b13c

const webpack = require('webpack')
const path = require('path')
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
      'highcharts',
      'dropzone',
      'particles.js',
      'babel-polyfill',
      'isomorphic-fetch',
      'raf',
      'classnames',
      'riek2',
      'lodash',
      'moment',
      'date-fns',
      'sweetalert2',
      'sweetalert2-react-content',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-saga',
      'redux-devtools-extension',
      'reactstrap',
      'react-loading',
      'react-scroll-to-component',
      'react-highcharts',
      'react-hot-loader',
      'react-bootstrap-table',
      'react-fontawesome',
      'react-number-format',
      'react-dropzone-component',
      'react-notification-system',
      'react-notification-system-redux',
      'react-transition-group'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'web', 'build', 'library'),
    filename: '[name].dll.js',
    library: '[name]'
  },

  plugins: [
    new CleanWebpackPlugin('web/build/library'),

    new webpack.DllPlugin({
      name: '[name]',
      path: './web/build/library/[name].json'
    })
  ]
}

module.exports = webpackConfig
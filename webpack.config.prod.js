const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

const useVersioning = true;
const publicPath = '/build/'
const isProduction = process.env.NODE_ENV === 'production';
const useSourcemaps = !isProduction;

const styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap: useSourcemaps
  }
};
const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: useSourcemaps,
    minimize: true
  }
};
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true
  }
};
const resolveUrlLoader = {
  loader: 'resolve-url-loader',
  options: {
    sourceMap: useSourcemaps
  }
};

const webpackConfig = {

  entry: {
    layout: './assets/js/layout.js',
    home: './assets/js/home/index.js',
    rm: './assets/js/meranie-a-odpocty/rm/index.js',
    dpp: './assets/js/efektivnost/dpp/index.js',
    scztv: './assets/js/dispecing/scztv/index.js',
    vco: './assets/js/dispecing/vychladenie-ost/index.js',
    sct: './assets/js/kontroling/sct/index.js',
    admin: './assets/js/admin/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'web', 'build'),
    filename: useVersioning ? '[name].[chunkhash:6].js' : '[name].js',
    publicPath: publicPath,
  },

  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules', 'react')
    }
  },

  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }, {
          loader: 'expose-loader',
          options: 'window.jQuery'
        }]
      },
      {
        test: require.resolve('popper.js'),
        use: [{
          loader: 'expose-loader',
          options: 'Popper'
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: [
                cssLoader
            ],
            // use this, if CSS isn't extracted
            fallback: styleLoader
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            use: [
                cssLoader,
                resolveUrlLoader,
                sassLoader,
            ],
            fallback: styleLoader
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              publicPath: './',
              outputPath: 'images/'
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              publicPath: './',
              outputPath: 'fonts/'
            },
          }
        ]
      }
    ]
  },

  plugins: [

    // commented out becase of 'expose-loader'
    /*new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    }),*/

    new CleanWebpackPlugin('web/build', { exclude: 'library' }),

    new CopyWebpackPlugin([
      // copies to {output}/static
      { from: './assets/static', to: 'static' }
    ]),

    // commented out becase of 'expose-loader'
    /*new webpack.optimize.CommonsChunkPlugin({
        name: [
            // "layout" is an entry file
            // anything included in layout, is not included in other output files
            'layout',
            // dumps the manifest into a separate file
            'manifest'
        ],
        minChunks: Infinity
    }),*/

    new ExtractTextPlugin(
      useVersioning ? '[name].[contenthash:6].css' : '[name].css'
    ),

    new ManifestPlugin({
      basePath: 'build/',
      // always dump manifest
      writeToFileEmit: true
    }),

    // allows for [chunkhash]
    new WebpackChunkHash(),

    // keep module ids consistent between builds
    // so that hashes doesn't suddenly change
    new webpack.HashedModuleIdsPlugin(),

    // DLL plugin to optimize build speed
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./web/build/library/library.json')
    }),

    // optimize javascript files
    new webpack.optimize.UglifyJsPlugin(),

    // passes these options to all loaders
    // but we should really pass these ourselves
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  // do not use source maps in production
  //devtool: useSourcemaps ? 'inline-source-map' : false,

  devServer: {
    contentBase: './web',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};

module.exports = webpackConfig;

const webpack = require('webpack');
const path = require('path');
const agent = require('agentkeepalive')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

// const useDevServer = true;
// const useVersioning = true;
const publicPath = 'http://localhost:9000/tip-sf/web/build';
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

const onlyDevServer = 'webpack/hot/only-dev-server';
const devServerClient = 'webpack-dev-server/client?http://localhost:9000';

const webpackConfig = {

  entry: {
    layout: ['./assets/js/layout.js', onlyDevServer, devServerClient],
    home: './assets/js/home/index.js',
    anm: './assets/js/meranie-a-odpocty/anm/index.js',
    rm: './assets/js/meranie-a-odpocty/rm/index.js',
    dpp: ['./assets/js/efektivnost/dpp/index.js', onlyDevServer, devServerClient],
    scztv: './assets/js/dispecing/scztv/index.js',
    scztz: './assets/js/dispecing/scztz/index.js',
    scztost: './assets/js/dispecing/scztost/index.js',
    ds: './assets/js/dispecing/doplnovanie-siet/index.js',
    doo: './assets/js/dispecing/doplnovanie-ost/index.js',
    vco: './assets/js/dispecing/vychladenie-ost/index.js',
    deo: ['./assets/js/dispecing/evidencia-ost/index.js', onlyDevServer, devServerClient],
    ddhost: ['./assets/js/dispecing/ddh-ost/index.js'],
    ddhhv: ['./assets/js/dispecing/ddh-hv/index.js',],
    mpptpv: './assets/js/prevadzka/mpp-tpv/index.js',
    mpptpz: './assets/js/prevadzka/mpp-tpz/index.js',
    mppvhj: './assets/js/prevadzka/mpp-vhj/index.js',
    sct: ['./assets/js/kontroling/sct/index.js', onlyDevServer, devServerClient],
    vct: ['./assets/js/kontroling/vct/index.js', onlyDevServer, devServerClient],
    dp: ['./assets/js/uctovnictvo/dp/index.js', onlyDevServer, devServerClient],
    prj: './assets/js/projekty/index.js',
    admin: './assets/js/admin/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'web', 'build'),
    filename: '[name].js',
    publicPath: publicPath
  },

  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules', 'react')
    }
  },

  module: {
    rules: [{
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
      }, {
        test: require.resolve('popper.js'),
        use: [
          {
            loader: 'expose-loader',
            options: 'Popper'
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel']
          }
        }
      }, {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [ cssLoader ],
          fallback: styleLoader
        }))
      }, {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            cssLoader,
            resolveUrlLoader,
            sassLoader
          ],
          fallback: styleLoader
        }))
      }, {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              publicPath: './',
              outputPath: 'images/'
            }
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

    new CleanWebpackPlugin('web/build', { exclude: 'library' }),

    new CopyWebpackPlugin([
      // copies to {output}/static
      { from: './assets/static', to: 'static' }
    ]),

    new ExtractTextPlugin({
        filename: '[name].css'
    }),

    new ManifestPlugin({
      basePath: 'build/',
      // always dump manifest
      writeToFileEmit: true
    }),

    // allows for [chunkhash]
    new WebpackChunkHash(),

    // DLL plugin to optimize build speed
    // library packages are separated into library.dll.js
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./web/build/library/library5.json')
    }),

    // hot module replacement
    new webpack.HotModuleReplacementPlugin(),

    // consider using the NamedModulesPlugin for module names
    new webpack.NamedModulesPlugin(),
  ],

  devtool: 'eval',
  // devtool: 'cheap-eval-source-map',
  // devtool: 'inline-source-maps',

  devServer: {
    contentBase: './web',
    publicPath: publicPath,
    compress: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '*': {
        target: 'http://localhost',
        changeOrigin: true,
        agent: new agent({
          keepalive: true,
          keepAliveMsecs: 100000,
          freeSocketKeepAliveTimeout: 90000,
          maxSockets: 100,
          maxFreeSockets: 100,
          timeout: 6000000
        }),
        onProxyRes: (proxyRes, req, res) => {
          let key = 'www-authenticate';
          console.log({...proxyRes.headers})
          proxyRes.headers[key] = proxyRes.headers[key] && proxyRes.headers[key].split(',');
          //console.log(proxyRes.headers[key])
        }
      }
    },
    port: 9000,
    host: 'localhost',
    //disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};

module.exports = webpackConfig;

/*
* devtool                        | build | rebuild | production | quality
*
* (none)                         | +++   | +++     | yes        | bundled code
* eval                           | +++   | +++     | no         | generated code
* cheap-eval-source-map          | +     | ++      | no         | transformed code (lines only)
* cheap-module-eval-source-map   | 0     | ++      | no         | original source (lines only)
* eval-source-map                | --    | +       | no         | original source
* cheap-source-map               | +     | 0       | yes        | transformed code (lines only)
* cheap-module-source-map        | 0     | -       | yes        | original source (lines only)
* inline-cheap-source-map        | +     | 0       | no         | transformed cdode (lines only)
* inline-cheap-module-source-map | 0     | -       | no         | original source (lines only)
* source-map                     | --    | --      | yes        | original source
* inline-source-map              | --    | --      | no         | original source
* hidden-source-map              | --    | --      | yes        | original source
* nosources-source-map           | --    | --      | yes        | without source content
*
* +++ super fast, ++ fast, + pretty fast, o medium, - pretty slow, -- slow
 */
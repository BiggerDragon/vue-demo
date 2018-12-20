/**
 * 此文件是生产环境打包所需的信息
 */

'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')//webpack打包基本的配置信息
const CopyWebpackPlugin = require('copy-webpack-plugin')//可将单个文件或整个目录复制到构建目录中
const HtmlWebpackPlugin = require('html-webpack-plugin')//插入html并可创建新的html
const ExtractTextPlugin = require('extract-text-webpack-plugin')//webpack提取代码并将其和文件分离,如css和js
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')//最小化/优化css资源
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//压缩js文件

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

/**
 * 合并 webpack.base.conf.js中的配置
 */
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,//指定生产环境的输出路径
    filename: utils.assetsPath('j/[name].[chunkhash].js'), //编译输出带hash的文件名,可以指定hash长度(chunkhash:6)
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js') // 没有指定输出名的文件输出的文件名
  },
  plugins: [

    // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
    new webpack.DefinePlugin({
      'process.env': env
    }),

    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),

    //将css文件分离出来
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: true,
    }),

    //压缩css代码
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),

    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {//压缩的方式
        removeComments: true,//移除带html的注释
        collapseWhitespace: true,//移除空格
        removeAttributeQuotes: true//移除属性的引号
      },
      chunksSortMode: 'dependency'//资源按照以来关系去插入
    }),
    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        //任何一个从node_modules中引入的模块都会被打包进来
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    //把webpack的runtime和manifest这些webpack管理所有模块交互的代码
    // 打包到[name].js文件中,防止build之后vendor的hash值被更新
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    //复制自定义的静态资源文件到dist/static文件夹中
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})


// 开启 gzip 的情况下使用下方的配置
if (config.build.productionGzip) {
  // Gzip依赖 compression-webpack-plugin 插件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    // 使用 compression-webpack-plugin 插件进行压缩
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',//目标资源名称
      algorithm: 'gzip',//压缩方式
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),//所有匹配该正则的资源都会被处理。默认值是全部资源。
      threshold: 10240,//只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      minRatio: 0.8//只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
    })
  )
}

//配置项目分析工具加载下方插件
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig

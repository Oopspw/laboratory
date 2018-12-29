'use strict'

// 版本检查 node的版本号  版本有要求"engines": {"node": ">= 4.0.0","npm": ">= 3.0.0"}
// 立即执行
require('./check-versions')()

// process(处理)是node中的global全局对象的属性，process是node中的全局变量，env设置环境变量
process.env.NODE_ENV = 'production'
// ora是一个命令行转圈圈动画插件，好看用的
const ora = require('ora')
// rimraf插件是用来执行UNIX命令rm和-rf的用来删除文件夹和文件，清空旧的文件
const rm = require('rimraf')
const path = require('path')
// node.js路径模块 连接路径，例子：path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');// 返回: '/foo/bar/baz/asdf'var path = require('p//chalk插件，用来在命令行中输入不同颜色的文字
const chalk = require('chalk')
// 引入webpack模块使用内置插件和webpack方法
const webpack = require('webpack')
const config = require('../config')
// webpack 配置
const webpackConfig = require('./webpack.prod.conf')

// 开启转圈圈动画
const spinner = ora('Build up! [production]...')
spinner.start()

// 调用rm方法，第一个参数的结果就是 绝对/工程名/dist/static，表示删除这个路径下面的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop() // 停止动画显示
    if (err) throw err // 如果有错误就抛出错误
    process.stdout.write(
      // stats对象中保存着编译过程中的各种消息
      stats.toString({
        colors: true,
        modules: false, // 设置是否将引用包的信息打印出来
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    )

    // 判断build过程中有无error发生
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    // 输出
    console.log(chalk.cyan('  Build Finish! OLALA~\n'))
    console.log(
      chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
          "  Opening index.html over file:// won't work.\n"
      )
    )
  })
})

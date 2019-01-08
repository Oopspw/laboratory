'use strict'
// check-versions 主要用来比对检查版本
// 定义控制台日志输入的样式
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
// 引入shelljS 注：shell是linux下的脚本语言解析器
const shell = require('shelljs')

function exec (cmd) {
  return require('child_process')
    .execSync(cmd)
    .toString()
    .trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

// 在环境变量PATH中寻找指定命令的地址，判断该命令是否可执行，返回该命令的绝对地址
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(
        mod.name +
          ': ' +
          chalk.red(mod.currentVersion) +
          ' should be ' +
          chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(
      chalk.yellow(
        'To use this template, you must update following to modules:'
      )
    )
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}

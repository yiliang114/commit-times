/*
 * @Author: mrjzhang
 * @Date: 2020-01-30 14:11:30
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-01-31 13:55:29
 */
const core = require('@actions/core')
const github = require('@actions/github')

const { getSum } = require('./lib')

try {
  const username = core.getInput('username')
  core.setOutput('username', username)
  getSum().then(sum => {
    core.setOutput('sum', sum)
  })
} catch (error) {
  core.setFailed(error.message)
}

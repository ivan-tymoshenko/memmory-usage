'use strict'

const { parentPort } = require('node:worker_threads')
const { setTimeout: sleep } = require('node:timers/promises')

const message = 'PING'.repeat(100)

parentPort.postMessage(message)
parentPort.on('message', async () => {
  await sleep(100)
  parentPort.postMessage(message)
})

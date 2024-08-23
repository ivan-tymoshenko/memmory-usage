'use strict'

const { Worker } = require('node:worker_threads')
const { setTimeout: sleep } = require('node:timers/promises')

const worker = new Worker('./worker.js')

const message = 'PONG'.repeat(100)

worker.on('message', async () => {
  await sleep(100)
  worker.postMessage(message)
})

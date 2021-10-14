#!/usr/bin/env node

import http from 'http'
import debug from 'debug'
import app from '@/app'

debug('koa-shop-api')
const port: string | number = process.env.PORT || '3000'

http
  .createServer(app.callback())
  .listen(port)
  .on('listening', () => {
    console.log(`server listening：${port}`)
  })
  .on('connection', () => {
    console.log('server connected')
  })
  .on('close', () => {
    console.log('server close')
  })
  .on('error', (err) => {
    console.log(`server error: ${err.message}`)
  })

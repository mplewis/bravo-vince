#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const del = require('del')
const execa = require('execa')
const ghpages = require('gh-pages')

const cname = 'bravovince.com'
const distPath = path.join(__dirname, '..', 'dist')
const cnamePath = path.join(distPath, 'CNAME')

del.sync(distPath)
execa.sync('yarn', ['build'], { stdio: 'inherit' })
fs.writeFileSync(cnamePath, cname)
ghpages.publish(
  distPath,
  { logger: console.log, message: new Date().toISOString() },
  (err) => { if (err) throw err }
)

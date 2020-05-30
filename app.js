'use strict'

const express = require('express')
const app = express()
const magic = require('express-routemagic')

//Basic usage
//magic.use(app)

//More options

magic.use(app, {
    logMapping: true,
    routesFolder: 'routes',
    invokerPath: __dirname,
    ignoreSuffix: ['_bak'],
    allowSameName: true,
    debug: function(msg) { console.log('\x1b[36m%s\x1b[0m', `Magic: ${msg}`); } // outputs cyan console.log
})
module.exports = app

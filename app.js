'use strict'

const express = require('express')
const app = express()
const magic = require('express-routemagic')

//Basic usage
magic.use(app, __dirname)

//More options

// magic.use(app,  __dirname, {
//     printRoutes: true,
//     routeFolder: 'routes',
//     ignoreSuffix: ['_bak'],
//     allowSameName: true,
//     debug: function(msg) { console.log('\x1b[36m%s\x1b[0m', `From Magic: ${msg}`); } // outputs cyan console.log
// })
module.exports = app

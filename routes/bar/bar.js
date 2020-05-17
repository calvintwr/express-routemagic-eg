'use strict'
const router = require('express').Router()

router.get('/', (req, res) => { res.send('You are in the /bar/bar directory of this server.') })

module.exports = router

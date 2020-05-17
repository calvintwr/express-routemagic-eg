'use strict'
const router = require('express').Router()

router.get('/', (req, res) => { res.send('You are in /foo.') })

module.exports = router

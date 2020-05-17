'use strict'
const router = require('express').Router()

router.get('/', (req, res) => { res.send('You are in the /nested-folder directory of this server.') })

module.exports = router

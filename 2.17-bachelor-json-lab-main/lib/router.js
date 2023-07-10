const express = require('express')
const router = express.router()

router.use('/bachelor', require('./bachelor/router'))
router.use('/bachelorette', require('./bachelorette/router'))

module.exports = router

const express = require('express')
const router = express.Router()
const bacheloretteController = require('./controller')

router.get('/', bacheloretteController.index)
router.get('/:year', bacheloretteController.showYear)
router.get('/:name', bacheloretteController.showName)
router.post('/', bacheloretteController.create)
router.put('/:name', bacheloretteController.edit)
router.delete('/:name', bacheloretteController.delete)

module.exports = router

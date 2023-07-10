const express = require('express')
const router = express.Router()

const bachelorController = require('./controller')

router.get('/', bachelorController.index)
router.get('/:year', bachelorController.showYear)
router.get('/:name', bachelorController.showName)
router.post('/', bachelorController.create)
router.put('/:name', bachelorController.edit)
router.delete('/:name', bachelorController.delete)

module.exports = router

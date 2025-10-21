const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

router.get('/' , itemController.getItem)
router.get('/new' , itemController.newItem)
router.post('/' , itemController.addItem)
router.get('/:id' , itemController.showById)
router.get('/:id/edit' , itemController.editItem)
router.put('/:id' , itemController.updateItem)
router.delete('/:id' , itemController.deleteById)

module.exports = router
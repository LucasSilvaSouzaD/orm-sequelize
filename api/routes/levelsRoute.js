const { Router } = require('express')
const levelController = require('../controllers/LevelController')
 
const router = Router()
router
 .get('/levels', levelController.getAllLevels)
 .get('/levels/:id', levelController.getOneLevel)
 .post('/levels', levelController.createLevel)
 .put('/levels/:id', levelController.updateLevel)
 .delete('/levels/:id', levelController.deleteLevel)
 .post('/levels/:id/restore', levelController.restoreLevel)
module.exports = router
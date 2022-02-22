const { Router } = require('express')
const TeamController = require('../controllers/TeamController')
 
const router = Router()
router
 .get('/team', TeamController.getAllTeam)
 .get('/team/:id', TeamController.getOneTeam)
 .post('/team', TeamController.createTeam)
 .put('/team/:id', TeamController.updateTeam)
 .delete('/team/:id', TeamController.deleteTeam)
module.exports = router
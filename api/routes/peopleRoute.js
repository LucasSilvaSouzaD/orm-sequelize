const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.getAllPeople)
router.get('/people/:id', PersonController.getOnePerson)
router.post('/people', PersonController.createPerson)
router.put('/people/:id', PersonController.updatePerson)
router.delete('/people/:id', PersonController.deletePerson)
router.get('/people/:studentId/matricula/:registrationId',  PersonController.getRegistration)
router.post('/people/:studentId/matricula', PersonController.createRegistration)
router.put('/people/:studentId/matricula/:registrationId',  PersonController.updatedRegistration)
router.delete('/people/:studentId/matricula/:registrationId',  PersonController.deleteRegistration)

module.exports = router
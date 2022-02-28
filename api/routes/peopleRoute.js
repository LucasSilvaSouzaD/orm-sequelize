const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()
router
    .get('/people', PersonController.getAllPeople)
    .get('/people/:id', PersonController.getOnePerson)
    .post('/people', PersonController.createPerson)
    .put('/people/:id', PersonController.updatePerson)
    .delete('/people/:id', PersonController.deletePerson)
    .post('/people/:id/restore', PersonController.restorePerson)
    .post('/pessoas/:studentId/registration/:registrationId/restore', PersonController.restoreRegistration)
    .get('/people/:studentId/registration/:registrationId',  PersonController.getRegistration)
    .post('/people/:studentId/registration', PersonController.createRegistration)
    .put('/people/:studentId/registration/:registrationId',  PersonController.updatedRegistration)
    .delete('/people/:studentId/registration/:registrationId',  PersonController.deleteRegistration)

module.exports = router
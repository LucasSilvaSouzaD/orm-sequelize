const database = require('../models')

class PessoaController {
  static async getAllPeople(req, res){
    try {
      const allPeople = await database.People.findAll()
      return res.status(200).json(allPeople)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOnePerson(req, res) {
    const { id } = req.params
    try {
      const person = await database.People.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(person)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createPerson(req, res) {
    const person = req.body
    try {
      const personCreated = await database.People.create(person)
      return res.status(200).json(personCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params
    const infos = req.body
    try {
      await database.People.update(infos, { where: { id: Number(id) }})
      const personUpdated = await database.People.findOne( { where: { id: Number(id) }})
      return res.status(200).json(personUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params
    try {
      await database.People.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deleted` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params
    try {
      await database.People.restore({ where: { id: Number(id) }})
      return res.status(200).json({ mensage: `${id} restore success`})
    } catch (error) {

    }
  }

  static async restoreRegistration(req, res) {
    const { studentId, registrationId } = req.params
    try {
      await database.Registration.restore({
        where: {
          id: Number(registrationId),
          studentId: Number(studentId)
        }
      })
      return res.status(200).json({ mensagem: `id ${id} restore`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getRegistration(req, res) {
    const { studentId, registrationId } = req.params
    try {
      const registration = await database.Matriculas.findOne( { 
        where: { 
          id: Number(studentId),
          estudante_id: Number(registrationId)
        }
      })
      return res.status(200).json(registration)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createRegistration(req, res) {
    const { studentId } = req.params
    const registration = { ...req.body, estudante_id: Number(studentId) }
    try {
      const registrationCreated = await database.Matriculas.create(registration)
      return res.status(200).json(registrationCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updatedRegistration(req, res) {
    const { studentId, registrationId } = req.params
    const infos = req.body
    try {
      await database.Matriculas.update(infos, { 
        where: { 
          id: Number(studentId),
          student_id: Number(registrationId) 
        }})
      const registrationUpdated = await database.Matriculas.findOne( { where: { id: Number(registrationId) }})
      return res.status(200).json(registrationUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteRegistration(req, res) {
    const { studentId, registrationId } = req.params
    try {
      await database.Matriculas.destroy({ where: { id: Number(registrationId) }})
      return res.status(200).json({ mensagem: `id ${registrationId} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController
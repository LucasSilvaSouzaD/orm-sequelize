const database = require('../models')

class TurmaController {
  static async getAllTeam(req, res){
    try {
      const allTeam = await database.Turmas.findAll()
      return res.status(200).json(allTeam)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOneTeam(req, res) {
    const { id } = req.params
    try {
      const oneTeam = await database.Turmas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(oneTeam)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createTeam(req, res) {
    const team = req.body
    try {
      const teamCreated = await database.Turmas.create(team)
      return res.status(200).json(teamCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateTeam(req, res) {
    const { id } = req.params
    const infos = req.body
    try {
      await database.Turmas.update(infos, { where: { id: Number(id) }})
      const teamUpdated = await database.Turmas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(teamUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteTeam(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = TurmaController
const database = require('../models')

class TurmaController {
  static async getAllTeam(req, res){
    try {
      const allTeam = await database.Team.findAll()
      return res.status(200).json(allTeam)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOneTeam(req, res) {
    const { id } = req.params
    try {
      const oneTeam = await database.Team.findOne( { 
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
      const teamCreated = await database.Team.create(team)
      return res.status(200).json(teamCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateTeam(req, res) {
    const { id } = req.params
    const infos = req.body
    try {
      await database.Team.update(infos, { where: { id: Number(id) }})
      const teamUpdated = await database.Team.findOne( { where: { id: Number(id) }})
      return res.status(200).json(teamUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteTeam(req, res) {
    const { id } = req.params
    try {
      await database.Team.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restoreTeam(req, res) {
    const { id } = req.params
    try {
      await database.Team.restore({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} restored` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = TurmaController
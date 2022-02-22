const database = require('../models')

class LevelController {
  static async getAllLevels(req, res){
    try {
      const allLevels = await database.Niveis.findAll()
      return res.status(200).json(allLevels)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOneLevel(req, res) {
    const { id } = req.params
    try {
      const level = await database.Niveis.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createLevel(req, res) {
    const level = req.body
    try {
      const levelCreated = await database.Niveis.create(level)
      return res.status(200).json(levelCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params
    const infos = req.body
    try {
      await database.Niveis.update(infos, { where: { id: Number(id) }})
      const levelUpdated = await database.Niveis.findOne( { where: { id: Number(id) }})
      return res.status(200).json(levelUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deleted` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = LevelController
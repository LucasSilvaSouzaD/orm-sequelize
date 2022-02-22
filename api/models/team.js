'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    date_start: DataTypes.DATEONLY
  }, {});
  Team.associate = function(models) {
    Team.hasMany(models.Registration, {
      foreignKey: 'team_id'
    })
    Team.belongsTo(models.People, {
      foreignKey: 'teacher_id'
    })
    Team.belongsTo(models.Levels, {
      foreignKey: 'level_id'
    })
  };
  return Team;
};
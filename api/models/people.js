'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  People.associate = function(models) {
    People.hasMany(models.Team, {
      foreignKey: 'docente_id'
    }) 
    People.hasMany(models.Registration, {
      foreignKey: 'student_id'
    })

  };
  return People;
};
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('Team', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.removeColumn('Team', 'deletedAt');
     
  }
};

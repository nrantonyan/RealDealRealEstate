'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type: Sequelize.STRING
      },
      projectAddressName: {
        type: Sequelize.STRING
      },
      projectCity: {
        type: Sequelize.STRING
      },
      projectState: {
        type: Sequelize.STRING
      },
      projectZip: {
        type: Sequelize.INTEGER
      },
      arv: {
        type: Sequelize.INTEGER
      },
      desiredProfit: {
        type: Sequelize.INTEGER
      },
      repairCosts: {
        type: Sequelize.INTEGER
      },
      bcc: {
        type: Sequelize.INTEGER
      },
      scc: {
        type: Sequelize.INTEGER
      },
      realitorFees: {
        type: Sequelize.INTEGER
      },
      monthlyHold: {
        type: Sequelize.INTEGER
      },
      daysRehab: {
        type: Sequelize.INTEGER
      },
      projectStatus: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projects');
  }
};
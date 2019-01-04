'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type:DataTypes.STRING,
        allowNull: true
      },
      projectAddressName: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      projectCity: {
        type:DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
      projectState: {
          type:DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
      projectZip: {
        type:DataTypes.INTEGER,
        allowNull: false,
      },
      arv: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      desiredProfit: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      repairCosts: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      bcc: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      scc: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      realitorFees: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      monthlyHold: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      daysRehab: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      projectStatus: {
        type:DataTypes.BOOLEAN,
        defualtValue: false
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
    return queryInterface.dropTable('project');
  }
};
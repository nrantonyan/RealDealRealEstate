'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectName: DataTypes.STRING,
    projectAddressName: DataTypes.STRING,
    projectCity: DataTypes.STRING,
    projectState: DataTypes.STRING,
    projectZip: DataTypes.INTEGER,
    arv: DataTypes.INTEGER,
    desiredProfit: DataTypes.INTEGER,
    repairCosts: DataTypes.INTEGER,
    bcc: DataTypes.INTEGER,
    scc: DataTypes.INTEGER,
    realitorFees: DataTypes.INTEGER,
    monthlyHold: DataTypes.INTEGER,
    daysRehab: DataTypes.INTEGER,
    projectStatus: DataTypes.BOOLEAN
  }, {});
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};
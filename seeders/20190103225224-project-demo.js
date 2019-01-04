'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projects', [{
      projectName: "Project1",
      projectAddressName: "somewhere",
      projectCity: "somewhere Else",
      projectState: "California",
      projectZip: "90027",
      arv: 1,
      desiredProfit: 1,
      repairCosts: 1,
      bcc: 1,
      scc: 1,
      realitorFees: 1,
      monthlyHold: 1,
      daysRehab: 1,
      projectStatus: 1,
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {});
  }
};

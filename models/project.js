<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      ProjectName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      ProjectAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      ProjectCity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      ProjectState: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      ProjectZip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      AfterRepairValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      DesiredProfit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      EstimatedRepairCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      BuyersClosingCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      SellersClosingCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      RealtorFees: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      MonthlyHoldingCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      DaysToRehab: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      ProjectStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          len: [1]
        }
      },
    });
  
    Project.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Project.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Project;
=======
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
>>>>>>> origin/calc
  };
  return project;
};
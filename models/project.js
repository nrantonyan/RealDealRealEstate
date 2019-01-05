

module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectName: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    projectAddress: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    projectCity: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    projectState: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    projectZip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        len: [5, 9]
      }
    },
    arv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    desiredProfit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    repairCosts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    bcc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    scc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    realtorFees: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    monthlyHold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    daysRehab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    projectStatus: {
      type: DataTypes.BOOLEAN,
      defualtValue: false
    }
  });
  project.associate = function (models) {
    // associations can be defined here
    project.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  }
  return project;
}
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
      },

      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,  
          len: [10]
        }
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }

      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.project, {
      onDelete: "cascade"
    });
  }
  return User;
};
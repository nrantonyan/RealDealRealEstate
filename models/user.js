module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      PhoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      UserAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1],
            isEmail: true,
        }
      },
      UserPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
    });
  
    User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.Project, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  
"use strict"
const { Model } = require("sequelize")
const { hashPass } = require("../helpers/validator")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email already exists",
        },
        validate: {
          isEmail: { msg: "Invalid Email Format" },
          notNull: { msg: "Email is Required" },
          notEmpty: { msg: "Email is Required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 5,
            msg: "Minimum password length is 5 characters",
          },
          notNull: { msg: "Password is required" },
          notEmpty: { msg: "Password is required" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Role is required" },
          notEmpty: { msg: "Role is required" },
        },
      },
      imgUrl: DataTypes.STRING,
      banner: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      hireable: DataTypes.BOOLEAN,
    },

    {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPass(user.password)
        },
      },
      modelName: "User",
    }
  )
  return User
}

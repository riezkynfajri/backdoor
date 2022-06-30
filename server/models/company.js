"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Job, { foreignKey: "companyId" })
    }
  }
  Company.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        isUnique: {
          args: true,
          msg: "Company name already exists",
        },
        validate: {
          notNull: { msg: "Company name is required" },
          notEmpty: { msg: "Company name is required" },
        },
      },
      companyLogo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Company logo is required" },
          notEmpty: { msg: "Company logo is required" },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Company location is required" },
          notEmpty: { msg: "Company location is required" },
        },
      },
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Company description is required" },
          notEmpty: { msg: "Company description is required" },
        },
      },
      companyBanner: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
    }
  )
  return Company
}

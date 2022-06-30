"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" })
      this.belongsTo(models.Company, { foreignKey: "companyId" })
    }
  }
  Rating.init(
    {
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Rating is required" },
          notEmpty: { msg: "Rating is required" },
          len: {
            args: [1, 5],
            msg: "Rate must be between 1 and 5",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User is required" },
          notEmpty: { msg: "User is required" },
        },
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Company is required" },
          notEmpty: { msg: "Company is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Rating",
    }
  )
  return Rating
}

"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" })
      this.belongsTo(models.Job, { foreignKey: "jobId" })
    }
  }
  Bookmark.init(
    {
      userId: DataTypes.INTEGER,
      jobId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bookmark",
    }
  )
  return Bookmark
}

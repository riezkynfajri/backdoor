"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Job, { foreignKey: "jobId" })
    }
  }
  Skill.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Skill name is required" },
          notEmpty: { msg: "Skill name is required" },
        },
      },
      level: DataTypes.STRING,
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Job is required" },
          notEmpty: { msg: "Job is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Skill",
    }
  )
  return Skill
}

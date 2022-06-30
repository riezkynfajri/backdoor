"use strict"
const bc = require("bcryptjs")

module.exports = {
  async up(queryInterface, Sequelize) {
    const input = [
      {
        username: "admin",
        password: null,
        role: "admin",
        email: "admin@email.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "staff",
        password: null,
        role: "staff",
        email: "staff@email.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    input.forEach((input) => {
      input.password = bc.hashSync("qwerty", 10)
    })
    await queryInterface.bulkInsert("Users", input)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  },
}

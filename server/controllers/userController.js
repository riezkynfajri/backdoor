"use strict"
const { User } = require("../models")
const { comparePass, createToken } = require("../helpers/validator")

class UserController {
  static async createStaff(req, res, next) {
    try {
      const { username, email, password } = req.body
      await User.create({
        username,
        email,
        password,
        role: "staff",
      })
      res.status(201).json({
        message: "Account Created",
      })
    } catch (err) {
      next(err)
    }
  }
  static async login(req, res, next) {
    try {
      const { email, username, password } = req.body
      const input = { where: {} }
      email ? (input.where.email = email) : (input.where.username = username)
      if (!input.where.email && !input.where.username) throw { message: "email" }
      if (!password) throw { message: "no password" }

      const user = await User.findOne(input)
      if (!user) throw { message: "invalid" }
      if (user.role === "client") throw { message: "not admin" }

      const correctPass = comparePass(password, user.password)
      if (!correctPass) throw { message: "wrong password" }

      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
      }
      const access_token = createToken(payload)
      res.status(200).json({
        message: "You're Logged In",
        access_token,
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController

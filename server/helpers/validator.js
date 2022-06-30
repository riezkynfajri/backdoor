"use strict"
const jwt = require("jsonwebtoken")
const bc = require("bcryptjs")

const hashPass = (pass) => {
  return bc.hashSync(pass, 10)
}

const comparePass = (pass, hash) => {
  return bc.compareSync(pass, hash)
}

const createToken = (data) => {
  return jwt.sign(data, process.env.SECRET)
}

const readToken = (token) => {
  return jwt.verify(token, process.env.SECRET)
}

module.exports = {
  hashPass,
  comparePass,
  createToken,
  readToken,
}

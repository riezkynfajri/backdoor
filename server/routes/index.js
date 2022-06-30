"use strict"
const express = require("express")
const UserController = require("../controllers/userController")
const { authN } = require("../middlewares/authn")
const router = express.Router()
const jobs = require("./jobRoutes")
const companies = require("./companyRoutes")
const publics = require("./publicRoutes")
const { isNotAdmin } = require("../middlewares/authorization.js")

router.post("/login", UserController.login)
router.use("/public", publics)
router.use(authN)
router.post("/staff", isNotAdmin, UserController.createStaff)
router.use("/jobs", jobs)
router.use("/companies", companies)
module.exports = router

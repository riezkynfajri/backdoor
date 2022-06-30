"use strict"
const express = require("express")
const router = express.Router()
const JobController = require("../controllers/jobController.js")

router.get("/", JobController.companies)
router.post("/", JobController.addCompany)
router.get("/:id", JobController.company)
router.put("/:id", JobController.updateCompany)
router.delete("/:id", JobController.deleteCompany)

module.exports = router

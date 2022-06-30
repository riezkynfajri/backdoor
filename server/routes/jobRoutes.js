"use strict"
const express = require("express")
const router = express.Router()
const JobController = require("../controllers/jobController.js")

router.get("/", JobController.jobs)
router.post("/", JobController.addJob)
router.post("/skill", JobController.addSkill)
router.put("/skill/:id", JobController.updateSkill)
router.get("/:id", JobController.job)
router.put("/:id", JobController.updateJob)
router.patch("/:id", JobController.updateJobVacancy)
router.delete("/:id", JobController.deleteJob)

module.exports = router

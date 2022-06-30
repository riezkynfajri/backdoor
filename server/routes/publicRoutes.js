"use strict"
const express = require("express")
const router = express.Router()
const PublicController = require("../controllers/publicController.js")
const { authN } = require("../middlewares/authn")

// router.post("/register", PublicController.register)
// router.post("/login", PublicController.login)

// router.use(authN)
router.get("/", PublicController.about)
router.get("/companies", PublicController.companies)
router.get("/companies/:id", PublicController.company)
router.get("/jobs", PublicController.jobs)
router.get("/jobs/:id", PublicController.job)
// router.get("/profile", PublicController.profile)
// router.put("/profile", PublicController.updateProfile)
// router.patch("/profile", PublicController.updateProfilePic)
// router.patch("/profile/status", PublicController.updateHire)
// router.post("/bookmark", PublicController.addBookmark)
// router.delete("/bookmark/:id", PublicController.removeBookmark)
module.exports = router

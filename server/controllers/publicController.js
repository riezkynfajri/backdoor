"use strict"
const { User, Job, Company, Rating, Bookmark, Skill } = require("../models")
const { comparePass, createToken } = require("../helpers/validator")

class PublicController {
  static async about(req, res, next) {
    try {
      const companies = await Company.count()
      const jobs = await Job.count()
      const users = await User.count({ where: { role: "client" } })

      res.status(200).json({
        data: {
          companies,
          jobs,
          users,
        },
      })
    } catch (err) {
      next(err)
    }
  }
  static async register(req, res, next) {
    try {
      const {
        email,
        password,
        phoneNumber = "-",
        username = "-",
        address = "-",
        hireable = false,
      } = req.body
      const input = { email, password, phoneNumber, username, address, hireable, role: "client" }

      await User.create(input)

      res.status(201).json({
        statusCode: 201,
        message: "Account created successfully!",
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, username, password } = req.body
      const input = { where: {}, attributes: ["id", "email", "role", "password"] }
      email ? (input.where.email = email) : (input.where.username = username)
      if (!input.where.email && !input.where.username) throw { message: "email" }
      if (!password) throw { message: "no password" }

      const user = await User.findOne(input)
      if (!user) throw { message: "invalid" }
      if (user.role !== "client") throw { message: "not client" }

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
      console.log(err)
      next(err)
    }
  }

  static async jobs(req, res, next) {
    try {
      const jobs = await Job.findAll({
        attributes: ["id", "title", "companyId", "updatedAt", "jobType"],
        order: ["updatedAt"],
        include: {
          model: Company,
          attributes: ["name", "companyLogo", "location"],
        },
      })
      res.status(200).json({ data: jobs })
    } catch (err) {
      next(err)
    }
  }

  static async companies(req, res, next) {
    try {
      const companies = await Company.findAll({
        attributes: ["id", "name", "companyLogo", "companyBanner", "location", "description"],
        include: {
          model: Job,
          attributes: ["title"],
        },
      })
      res.status(200).json({ data: companies })
    } catch (err) {
      next(err)
    }
  }

  static async company(req, res, next) {
    try {
      const { id } = req.params
      const company = await Company.findOne({
        where: { id },
        include: {
          model: Job,
          attributes: ["id", "title", "description", "jobType", "updatedAt"],
        },
      })

      if (!company) throw { message: "company not found" }

      res.status(200).json({ data: company })
    } catch (err) {
      next(err)
    }
  }

  static async job(req, res, next) {
    try {
      const { id } = req.params
      const job = await Job.findOne({
        where: { id },
        include: [
          {
            model: Company,
            attributes: ["id", "name", "companyLogo", "location", "email"],
          },
          { model: Skill, attributes: ["id", "name", "level"] },
        ],
      })

      if (!job) throw { message: "job not found" }

      res.status(200).json({ data: job })
    } catch (err) {
      next(err)
    }
  }

  static async profile(req, res, next) {
    try {
      const { id } = req.userData
      const user = await User.findOne({
        where: { id },
        attributes: ["username", "email", "imgUrl", "banner", "phoneNumber", "address", "hireable"],
      })
      const bookmarks = await Bookmark.findAll({
        where: { userId: id },
        include: {
          model: Job,
          attributes: ["id", "title", "description", "minSalary", "maxSalary"],
        },
      })
      res.status(200).json({ data: user, bookmarks })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async addBookmark(req, res, next) {
    try {
      const { id: jobId } = req.headers
      const { id } = req.userData

      const job = await Job.findOne({ where: { id: jobId } })

      if (!job) throw { message: "job not found" }

      const [bookmark, created] = await Bookmark.findOrCreate({ where: { userId: id, jobId } })
      if (!created) throw { message: "already" }

      res.status(201).json({ message: "Bookmarked this job" })
    } catch (err) {
      next(err)
    }
  }

  static async removeBookmark(req, res, next) {
    try {
      const { id } = req.params
      const { id: userId } = req.userData

      const bookmark = await Bookmark.findOne({ where: { id } })
      if (!bookmark) throw { message: "bookmark not found" }
      if (bookmark.userId !== userId) throw { message: "not yours" }

      await Bookmark.destroy({ where: { id } })
      res.status(200).json({ message: "Removed from Your Bookmark" })
    } catch (err) {
      next(err)
    }
  }

  static async updateProfilePic(req, res, next) {
    try {
      const { id } = req.userData
      const { imgUrl } = req.body

      await User.update({ imgUrl }, { where: { id } })
      res.status(200).json({ message: "Updated Your Profile Picture" })
    } catch (err) {
      next(err)
    }
  }

  static async updateProfile(req, res, next) {
    try {
      const { id } = req.userData
      const { username, email, banner, phoneNumber, address } = req.body
      const input = { username, email, banner, phoneNumber, address }

      await User.update(input, { where: { id } })
      res.status(200).json({ message: "Updated Your Profile" })
    } catch (err) {
      next(err)
    }
  }

  static async updateHire(req, res, next) {
    try {
      const { id } = req.userData
      const { hireable } = req.body
      if (hireable !== false && hireable !== true) throw { message: "hire" }

      await User.update({ hireable }, { where: { id } })
    } catch (err) {}
  }
}

module.exports = PublicController

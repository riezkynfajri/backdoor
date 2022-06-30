"use strict"

const { Company, Job, Skill } = require("../models")

class JobController {
  static async jobs(req, res, next) {
    try {
      const jobs = await Job.findAll({
        include: {
          model: Company,
          attributes: ["name"],
        },
      })
      res.status(200).json({ data: jobs })
    } catch (err) {
      next(err)
    }
  }

  static async companies(req, res, next) {
    try {
      const companies = await Company.findAll()
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
          attributes: ["id", "title", "description", "jobType"],
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
        include: {
          model: Company,
        },
      })

      if (!job) throw { message: "job not found" }

      res.status(200).json({ data: job })
    } catch (err) {
      next(err)
    }
  }

  static async addCompany(req, res, next) {
    try {
      const { name, companyLogo, location, email, description, companyBanner = "" } = req.body
      const company = await Company.create({
        name,
        companyLogo,
        location,
        email,
        description,
        companyBanner,
      })
      res.status(201).json({ message: `successfully created ${company.name}` })
    } catch (err) {
      next(err)
    }
  }

  static async deleteJob(req, res, next) {
    try {
      const id = req.params.id
      const job = await Job.findOne({
        where: { id },
      })
      if (!job) throw { message: "job not found" }
      await Job.destroy({ where: { id } })
      res.status(200).json({ message: "job deleted" })
    } catch (err) {
      next(err)
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const id = req.params.id

      const company = await Company.findOne({
        where: { id },
      })
      if (!company) throw { message: "company not found" }
      await Company.destroy({ where: { id } })
      res.status(200).json({ message: "company deleted" })
    } catch (err) {
      next(err)
    }
  }

  static async addJob(req, res, next) {
    try {
      const {
        title,
        description,
        jobType,
        companyId,
        minSalary = 0,
        maxSalary = 0,
        benefit = "",
      } = req.body
      const { id: authorId } = req.userData

      const company = await Company.findByPk(companyId)
      if (!company) throw { message: "company not found" }
      const job = await Job.create({
        title,
        description,
        jobType,
        minSalary,
        maxSalary,
        benefit,
        vacant: "vacant",
        companyId,
        authorId,
      })
      res.status(201).json({ message: `successfully created ${job.title}` })
    } catch (err) {
      next(err)
    }
  }

  static async addSkill(req, res, next) {
    try {
      const { name, level = "", jobId } = req.body
      const job = await Job.findByPk(jobId)
      if (!job) throw { message: "job not found" }

      const skill = await Skill.create({ name, level, jobId })
      res.status(201).json({ message: `successfully added ${skill.name}` })
    } catch (err) {
      next(err)
    }
  }

  static async updateJob(req, res, next) {
    try {
      const { title, description, jobType, minSalary, maxSalary, benefit = "" } = req.body
      const { id } = req.params
      const input = { title, description, jobType, minSalary, maxSalary, benefit }

      const job = await Job.findByPk(id)
      if (!job) throw new Error("job not found")

      await Job.update(input, { where: { id } })

      res.status(200).json({ message: "successfully updated" })
    } catch (err) {
      next(err)
    }
  }

  static async updateCompany(req, res, next) {
    try {
      const { name, companyLogo, location, email, description, companyBanner = "" } = req.body
      const { id } = req.params
      const input = { name, companyLogo, location, email, description, companyBanner }

      const company = Company.findByPk(id)
      if (!company) throw new Error("company not found")

      await Company.update(input, { where: { id } })

      res.status(200).json({ message: "successfully updated" })
    } catch (err) {
      next(err)
    }
  }

  static async updateSkill(req, res, next) {
    try {
      const { name, level } = req.body
      const { id } = req.params
      const input = { name, level }

      const skill = Skill.findByPk(id)
      if (!skill) throw new Error("skill not found")

      await Skill.update(input, { where: { id } })

      res.status(200).json({ message: "successfully updated" })
    } catch (err) {
      next(err)
    }
  }

  static async updateJobVacancy(req, res, next) {
    try {
      const { vacant = true } = req.body
      const { id } = req.params

      const job = await Job.findByPk(id)
      if (!job) throw new Error("job not found")

      await Job.update({ vacant }, { where: { id } })
      res.status(200).json({ message: `Job Status Updated to ${vacant}` })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = JobController

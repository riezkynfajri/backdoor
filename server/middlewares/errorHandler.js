const errorHandler = (err, req, res, next) => {
  let code = 500
  let msg = "Internal Server Error"

  if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    code = 400
    msg = err.errors.map((err) => err.message).join(", ")
  } else if (err.message === "email") {
    code = 400
    msg = "Email/Username is required"
  } else if (err.message === "no password") {
    code = 400
    msg = "Password is required"
  } else if (err.message === "invalid") {
    code = 401
    msg = "Invalid Email/Username"
  } else if (err.message === "not admin") {
    code = 400
    msg = "This account is not an Admin"
  } else if (err.name === "JsonWebTokenError" || err.message === "user not found") {
    code = 401
    msg = "You're Unauthorized"
  } else if (err.message === "not authorized") {
    code = 403
    msg = "You're not authorized to access this feature"
  } else if (err.message === "wrong password") {
    code = 401
    msg = "Wrong Password"
  } else if (err.message === "company not found") {
    code = 404
    msg = "Can not find Company"
  } else if (err.message === "job not found") {
    code = 404
    msg = "Can not find Job with this id"
  } else if (err.message === "company not found") {
    code = 404
    msg = "Can not find Company with this id"
  } else if (err.message === "skill not found") {
    code = 404
    msg = "Can not find Skill with this id"
  } else if (err.message === "not client") {
    code = 400
    msg = "This account is registered as Admin/Staff"
  } else if (err.message === "already") {
    code = 400
    msg = "You've already Bookmarked this Job"
  } else if (err.message === "not yours") {
    code = 403
    msg = "You can't delete other people's bookmarked job"
  } else if (err.message === "hire") {
    code = 400
    msg = "Please Choose Your Hireability Status"
  }
  res.status(code).json({ message: msg })
}

module.exports = errorHandler

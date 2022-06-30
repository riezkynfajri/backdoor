const isNotAdmin = async (req, res, next) => {
  try {
    const { role } = req.userData
    if (role !== "admin") throw new Error("not authorized")
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = { isNotAdmin }

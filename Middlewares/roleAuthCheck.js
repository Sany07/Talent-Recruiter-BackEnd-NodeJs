const roleAuthCheck = (req, res, next) => {
  try {
    const { role } = req.headers || {};
    switch (role) {
      case "admin":
        return next();

      default:
        next("authorization failed");
    }
  } catch (error) {
    console.log("any error authorization", error);
    next("authorization failed" + error);
  }
};

module.exports = roleAuthCheck;

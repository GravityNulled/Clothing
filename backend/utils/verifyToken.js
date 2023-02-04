const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) {
        return res.status(401).send("Unauthorized");
      }
      req.user = user;
    });
    next();
  } else {
    return res.status(403).send("You are not authenticated");
  }
};

const verifytokenAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("You are not allowed to access this");
    }
  });
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("Forbiden");
    }
  });
};

module.exports = { verifyToken, verifytokenAuth, verifyTokenAdmin };

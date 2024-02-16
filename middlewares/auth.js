const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  // get le token dans le headers
  try {
    const tokenInHeaders = req.get("Authorization");
    if (!tokenInHeaders) {
      res.status(401).send("pas de token");
    }

    const [type, token] = tokenInHeaders.split(" ");

    if (type !== "Bearer") {
      res.status(401).send("le token doit etre de type ....");
    }
    // de verifier le token
    const { user_id } = jwt.verify(token, "privateKey");

    req.params = { user_id };
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  verifyPassword,
  verifyToken, 
};
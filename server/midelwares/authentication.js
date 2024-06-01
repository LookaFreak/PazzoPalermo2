const jwt = require("jsonwebtoken");

exports.authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).send({ message: "Auth Failed", success: false });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Auth Failed", success: false });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        return res.status(401).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    res.status(401).send({ message: "Auth Failed", success: false });
  }
};

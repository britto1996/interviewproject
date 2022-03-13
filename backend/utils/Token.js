const jwt = require("jsonwebtoken");

const Token = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
};

module.exports = Token;

const asyncHandler = require("express-async-handler");
const Token = require("../utils/Token");
const User = require("../models/User");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: Token(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("This email already registered");
  }
  const user = await User.create({ email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: Token(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = { authUser, registerUser };

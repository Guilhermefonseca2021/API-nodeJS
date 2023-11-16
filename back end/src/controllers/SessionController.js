const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");

async function CreateSession(request, response) {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({ error: "User or password invalid" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    
    if (!checkPassword) {
      return response.status(401).json({ msg: "Email ou senha invalidos!" });
    }

    const { id } = user;

    return response.json({
      user: {
        id,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  } catch (error) {
    return response.status(500).json(error);
  }
}

module.exports = CreateSession;

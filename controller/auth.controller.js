const Auth = require("../model/auth.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    var user = await Auth.findOne({ email: email });
    if (user) {
      return res.status(401).json({
        message: "User Already Exist",
      });
    }
    const newpass = await bcrypt.hash(password, 10);
    const userData = new Auth({
      userName,
      email,
      password: newpass,
    });

    await userData.save();
    return res.status(201).json({
      message: "User created!",
      result: userData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    var user = await Auth.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        message: "User doesn't Exist",
      });
    }

    const doMatch = await bcrypt.compare(password, user.password)
    if(!doMatch) return res.status(400).json({ message: 'password incorrect' });

    if(doMatch){
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SUSPENSE);
        const { _id, email, userName } = user;
        return res.status(200).json({
            status: 200,
            token,
            user: {
              _id,
              email,
              userName
            },
          });
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  login
};

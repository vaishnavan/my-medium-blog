const Auth = require('../model/auth.model')
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(404).json({ message: 'you must be logged in' });
  } else {
    //getting accesstoken
    const accesstoken = authorization.replace('Bearer ', '');
    //verifying the accesstoken
    jwt.verify(accesstoken, process.env.JWT_SUSPENSE, (err, payload) => {
      if (err) {
        return res.status(404).json({ message: 'you must be logged in' });
      } else {
        const { _id } = payload;
        Auth.findOne({ _id }).then(userData => {
          (req.user = userData), next();
        });
      }
    });
  }
};
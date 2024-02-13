const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: 'Invalidttt token' });
      } else {
        const user = await User.findById(decodedToken._id);
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Token not provided' });
  }
};

module.exports = requireAuth;

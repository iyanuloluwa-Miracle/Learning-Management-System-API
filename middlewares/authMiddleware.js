const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

exports.generateToken = (payload) => {
  return jwt.sign(payload, jwtSecret, {
    expiresIn: '1h',
  });
};

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};
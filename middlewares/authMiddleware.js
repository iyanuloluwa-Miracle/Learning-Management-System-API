// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, jwtSecret, (error, decodedToken) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = decodedToken.userId;
    next();
  });
}

module.exports = authenticateToken;

// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'your-secret-key', (error, decodedToken) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = decodedToken.userId;
    next();
  });
}

module.exports = authenticateToken;

const crypto = require('crypto');

// Generate a unique ID
exports.generateUniqueId = () => {
  return crypto.randomBytes(8).toString('hex');
};
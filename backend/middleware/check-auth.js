const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
  const token = req.headers.authorization.split(' ')[1] // alternative req.query.auth, split on bearer word. "bearer kl1jusdfguh73ssd2"
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = {email: decodedToken.email, userId: decodedToken.userId}; // add more info to the req for next middleware in chain.
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth failed!"
    });
  }
}

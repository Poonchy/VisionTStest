function CheckValidRegister(req, res, next) {
  if (!req.body.userId) {
    return res.status(400).json('Missing userId.');
  }
  if (!req.body.name) {
    return res.status(400).json('Missing name.');
  }
  if (!req.body.lastName) {
    return res.status(400).json('Missing lastName.');
  }
  next();
}

module.exports = {CheckValidRegister};

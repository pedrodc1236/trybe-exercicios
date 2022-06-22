module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  try {
    if (!Authorization || Authorization.length !== 16) {
      return res.status(401).json({ message: "Token inválido!" })
    }

    next();
  } catch(err) {
    return res.status(500).end();
  }
};

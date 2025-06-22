module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== "your-secret-key") {
    return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }
  next();
};

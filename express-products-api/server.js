const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");
const productsRouter = require("./routes/products");

const app = express();

app.use(logger);
app.use(bodyParser.json());
app.use(auth);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productsRouter);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

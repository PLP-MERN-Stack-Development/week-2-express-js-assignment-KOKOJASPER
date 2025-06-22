const express = require("express");
const validation = require("../middleware/validation");
const Product = require("../models/product");

const router = express.Router();

// GET /api/products
router.get("/", (req, res) => {
  res.json(Product.getAll());
});

// GET /api/products/:id
router.get("/:id", (req, res) => {
  const product = Product.getById(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// POST /api/products
router.post("/", validation, (req, res) => {
  const product = Product.create(req.body);
  res.status(201).json(product);
});

// PUT /api/products/:id
router.put("/:id", validation, (req, res) => {
  const product = Product.update(req.params.id, req.body);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// DELETE /api/products/:id
router.delete("/:id", (req, res) => {
  const product = Product.remove(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json({ message: "Product deleted" });
});

module.exports = router;

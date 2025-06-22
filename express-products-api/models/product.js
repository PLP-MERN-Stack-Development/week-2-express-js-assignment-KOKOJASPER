const { v4: uuidv4 } = require("uuid");

let products = [];

function getAll() {
  return products;
}

function getById(id) {
  return products.find((p) => p.id === id);
}

function create(data) {
  const product = { id: uuidv4(), ...data };
  products.push(product);
  return product;
}

function update(id, data) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...data };
  return products[index];
}

function remove(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  return products.splice(index, 1)[0];
}

module.exports = { getAll, getById, create, update, remove };

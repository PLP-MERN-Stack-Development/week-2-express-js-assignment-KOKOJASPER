# Express Products API

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

1. Clone the repository and navigate to the project folder:

   ```sh
   git clone <your-repo-url>
   cd express-products-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file based on `.env.example` and set your API key.

4. Start the server:
   ```sh
   node server.js
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

---

## 🔑 Authentication

All endpoints require an API key in the request headers:

```
x-api-key: your-secret-key
```

---

## 📚 API Endpoints

### Root

- **GET /**  
  Returns: `"Hello World"`

---

### Products

- **GET /api/products**  
  List all products.

  **Query Parameters:**

  - `category` (optional): Filter by category
  - `page` (optional): Page number for pagination
  - `limit` (optional): Number of items per page
  - `search` (optional): Search by product name

  **Example Response:**

  ```json
  [
    {
      "id": "uuid",
      "name": "Product 1",
      "description": "Description",
      "price": 10,
      "category": "Category",
      "inStock": true
    }
  ]
  ```

- **GET /api/products/:id**  
  Get a product by ID.

  **Example Response:**

  ```json
  {
    "id": "uuid",
    "name": "Product 1",
    "description": "Description",
    "price": 10,
    "category": "Category",
    "inStock": true
  }
  ```

- **POST /api/products**  
  Create a new product.

  **Request Body:**

  ```json
  {
    "name": "Product 1",
    "description": "Description",
    "price": 10,
    "category": "Category",
    "inStock": true
  }
  ```

  **Example Response:**

  ```json
  {
    "id": "uuid",
    "name": "Product 1",
    "description": "Description",
    "price": 10,
    "category": "Category",
    "inStock": true
  }
  ```

- **PUT /api/products/:id**  
  Update an existing product.

  **Request Body:** (same as POST)

  **Example Response:** (updated product)

- **DELETE /api/products/:id**  
  Delete a product.

  **Example Response:**

  ```json
  { "message": "Product deleted" }
  ```

---

## 🧪 Example Requests

**Using curl:**

```sh
curl -X POST http://localhost:3000/api/products \
  -H "x-api-key: your-secret-key" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","description":"desc","price":10,"category":"cat","inStock":true}'
```

**Using Postman:**

- Set `x-api-key` header to your API key.
- Set `Content-Type` to `application/json`.
- Use the endpoints as described above.

---

## ⚙️ Error Responses

- `401 Unauthorized` – Missing or invalid API key
- `400 Bad Request` – Validation error
- `404 Not Found` – Product not found
- `500 Internal Server Error` – Server error

---

## 📄 .env.example

```
# filepath: express-products-api/.env.example
API_KEY=your-secret-key
PORT=3000
```

---

**Replace `your-secret-key` with your actual API key in your `.env` file.**

This project is a Backend API application built using:

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Middleware
* REST APIs

The project demonstrates how to build secure backend services with authentication, product management, user management, and protected routes.

---

# 🚀 Features

## ✅ User Authentication

* User Registration
* User Login
* JWT Token Generation
* Protected Routes

---

## ✅ Product Management

* Add Products
* Get Products
* Update Products
* Delete Products

---

## ✅ Middleware Authentication

* Verify JWT Token
* Secure API Endpoints
* Authorization Handling

---

# 📂 Project Structure

```bash id="04b4xv"
Backend/
│
├── APIs/
│   ├── Product-Api.js
│   └── User-Apis.js
│
├── Middlewares/
│   └── VerifyToken.js
│
├── Models/
│   ├── Product-Model.js
│   └── User-Model.js
│
├── node_modules/
├── package.json
├── package-lock.json
├── req.http
└── server.js
```

---

# 📘 Technologies Used

| Technology | Purpose            |
| ---------- | ------------------ |
| Node.js    | JavaScript Runtime |
| Express.js | Backend Framework  |
| MongoDB    | Database           |
| Mongoose   | MongoDB ODM        |
| JWT        | Authentication     |
| Middleware | Request Validation |

---

# 📌 Important Concepts

---

# 🔹 Node.js

## Definition

Node.js is a JavaScript runtime environment used to execute JavaScript outside the browser.

### Features

* Fast execution
* Non-blocking architecture
* Server-side programming

---

# 🔹 Express.js

## Definition

Express.js is a lightweight Node.js framework used for building APIs and web applications.

### Example

```js id="l4gz36"
const express = require("express");
const app = express();
```

---

# 🔹 REST API

## Definition

REST API allows communication between frontend and backend using HTTP methods.

### HTTP Methods

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Create data |
| PUT    | Update data |
| DELETE | Remove data |

---

# 🔹 MongoDB

## Definition

MongoDB is a NoSQL database used to store data in JSON-like documents.

### Features

* Flexible schema
* High performance
* Easy scalability

---

# 🔹 Mongoose

## Definition

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

### Purpose

* Schema creation
* Validation
* Database interaction

---

# 📄 Models

---

# 📄 User-Model.js

## Purpose

Defines schema for user data.

### Common Fields

* Username
* Email
* Password
* Role

### Example

```js id="9fkt34"
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
```

---

# 📄 Product-Model.js

## Purpose

Defines schema for product data.

### Common Fields

* Product Name
* Price
* Description
* Category

---

# 📄 APIs

---

# 📄 User-Apis.js

## Purpose

Handles:

* User Registration
* Login Authentication
* Token Generation

### Features

* Password validation
* JWT token creation
* Secure login system

---

# 📄 Product-Api.js

## Purpose

Handles:

* Add product
* Fetch products
* Update product
* Delete product

### Features

* CRUD Operations
* Database interaction
* Protected routes

---

# 📄 Middleware

---

# 📄 VerifyToken.js

## Purpose

Middleware used to verify JWT tokens before accessing protected APIs.

### Features

* Checks authentication token
* Prevents unauthorized access
* Secures private routes

### Example

```js id="x1d1x6"
app.use("/products", verifyToken);
```

---

# 🔹 JWT (JSON Web Token)

## Definition

JWT is used for secure authentication between client and server.

### Workflow

1. User logs in
2. Server generates token
3. Client stores token
4. Token sent with requests
5. Middleware verifies token

---

# 📌 API Flow

```text id="0wmytr"
Client Request
      ↓
Express Server
      ↓
Middleware Verification
      ↓
API Route Handler
      ↓
MongoDB Database
      ↓
Response Sent Back
```

---

# 📌 Important Backend Concepts

---

# 🔹 Middleware

## Definition

Middleware functions execute before request reaches the API route.

### Uses

* Authentication
* Validation
* Logging
* Error handling

---

# 🔹 CRUD Operations

| Operation | Meaning     |
| --------- | ----------- |
| Create    | Add data    |
| Read      | Fetch data  |
| Update    | Modify data |
| Delete    | Remove data |

---

# 🔹 Authentication

## Definition

Authentication verifies user identity.

### Example

* Login using email/password
* JWT verification

---

# 🔹 Authorization

## Definition

Authorization checks user permissions after authentication.

---

# 📌 request.http File

## Purpose

Used to test APIs directly.

### Common Requests

* Register user
* Login user
* Add product
* Get products

---

# ▶ How to Run the Project

---

## Step 1: Install Dependencies

```bash id="r1dktv"
npm install
```

---

## Step 2: Start Server

```bash id="b2rw3e"
node server.js
```

OR

```bash id="97olvt"
nodemon server.js
```

---

## Step 3: Open Browser/Postman

Example:

```text id="d27a7j"
http://localhost:5000
```

---

# 📌 Example API Endpoints

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| POST   | `/register`     | Register user    |
| POST   | `/login`        | Login user       |
| GET    | `/products`     | Get all products |
| POST   | `/products`     | Add product      |
| PUT    | `/products/:id` | Update product   |
| DELETE | `/products/:id` | Delete product   |

---

# 📌 Conclusion

This project demonstrates a complete backend API architecture using Node.js, Express.js, MongoDB, and JWT authentication. It provides practical experience in building secure REST APIs, handling database operations, implementing middleware, and organizing backend applications using modular structure.

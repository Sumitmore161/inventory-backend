# Inventory Management Backend

This project is a **Node.js backend** for an Inventory Management system, using **PostgreSQL** for the database. The backend includes user authentication, JWT-based authorization, and product management APIs. The database is configured to run via **Docker**, making setup easy and consistent.

---

## 🚀 Prerequisites

Before starting the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://docs.docker.com/desktop/)
- PostgreSQL and PGAdmin (via Docker)
- Optional: [Thunder Client](https://www.thunderclient.io/) for testing APIs in VS Code

---

## 🐳 Docker Setup for PostgreSQL

1. **Install Docker**  
   Download Docker Desktop from the [official website](https://docs.docker.com/desktop/) and install it.

    2. **Pull PostgreSQL Image**  
    Open your terminal and run:  
    ```bash
    docker pull postgres
    ```

3. **Run PostgreSQL Image**  
   Open your terminal and run: 
   Replace <your_password> with your desired password: 
   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=<your_password> -p 5432:5432 -d postgres
   ```

3. **Install PGAdmin4**  
   You can install PGAdmin4 in Docker or locally to manage the database. Create a database named: 

   ```bash
    inventory
    ```
    ⚡ The backend will automatically connect to this database when started.

## ⚙️ Project Setup

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Sumitmore161/inventory-backend
   cd inventory-backend
   ```

2. **Install Dependencies**  
   Install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5001
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=inventory
    DB_PORT=5432
    DB_PASSWORD=<your_password>
    JWT_SECRET=<your_jwt_secret>
   ```

4. **Run Start Script**  
   Run the start script to initailize the project:
   ```bash
    nodemon src/index.js
   ```

##  🧪 Testing the API

1. **Register a User**  
   Use the following API endpoint to register a new user:
   ```
   Method : POST 
   url : http://localhost:5001/api/auth/register
   ```
   Request Body:
   ```json
    {
    "name": "Your Name",
    "email": "your_email@example.com",
    "password": "your_password"
    }

   ```
2. **Login a User**  
   Use the following API endpoint to login an existing user:
   ```
   Method : POST
   url : http://localhost:5001/api/auth/login
   ```
   Request Body:
   ```json
   {
     "email": "your_email@example.com",
     "password": "your_password"
   }
   ```
Save the JWT token from the response.

Add it to the Authorization header for subsequent requests:

``` make
Authorization: Bearer <your_jwt_token>
```

3. Create a Product
   Use the following API endpoint to create a new product:
   ```
   Method : POST
   url : http://localhost:5001/api/products
   ```
   Request Body:
   ```json
   {
     "name": "product_name",
     "type": "type_of_product",
    "sku": "unique_sku_value",
    "image_url": "https://image_url.com/image.jpg",
    "description": "description for the product",
    "quantity": 10,
    "price": 100,
    "created_at": ""
   }
   ```
   ```
   ⚠️ The sku field must be unique.
    ```

4. **Get All Products**
   Use the following API endpoint to retrieve all products:
   ```
   Method : GET
   url : http://localhost:5001/api/products?page=1&limit=10
   ```
   you can customize page and limit value as you want 
   Add the JWT token to the Authorization header:
   ``` make
   Authorization: Bearer <your_jwt_token>
   ```

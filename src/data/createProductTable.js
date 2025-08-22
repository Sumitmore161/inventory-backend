import pool from "../config/db.js";

const createProductTable = async () => {
    const queryTxt = `
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50),
    sku VARCHAR(100) UNIQUE NOT NULL,
    image_url TEXT,
    description TEXT,
    quantity INTEGER DEFAULT 0,
    price NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
`;


    try {
       await pool.query(queryTxt);
        console.log("products table created if not exist");
    } catch (error) {
             console.log("error creating products table : ",error);
    }
     
 };

 export default createProductTable;
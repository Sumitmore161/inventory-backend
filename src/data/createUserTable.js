import pool from "../config/db.js";

 const createUserTable = async () => {
    const queryTxt = `CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
`;


    try {
       await pool.query(queryTxt);
        console.log("User table created if not exist");
    } catch (error) {
             console.log("error creating users table : ",error);
    }
     
 };

 
 export default createUserTable;
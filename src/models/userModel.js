// import pool from "../config/db.js";
import bcrypt from "bcrypt";
import pool from '../config/db.js';

export const createUserService = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, hashedPassword]
    );
    return result.rows[0];
};


export const getAllUserService =  async () =>{
    const result = await pool.query("SELECT * FROM USERS"); 
    return result.rows; 
};

export const getUserByEmail = async (email) =>{
    const result = await pool.query("SELECT * FROM users WHERE email= $1 ",[email]);
    return result.rows[0];
}
export const getUserByIdService  =  async (id) =>{
    const result = await pool.query("SELECT * FROM USERS where id = $1",[id]);
    return result.rows[0];
};
// export const createUserService  =  async (name ,email ,password) =>{
//     const hashedPassword = await bcrypt.hash(password,10); 
//     const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2) RETURNING *",[name, email, hashedPassword] );
//     return result.rows[0];
// };

export const updateUserByIdService  =  async (name, email , id) =>{
    const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",[name,email,id])
    return result.rows[0];
};

export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *",[id]);
    return result.rows[0];
};

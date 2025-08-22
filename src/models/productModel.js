import pool from "../config/db.js";

export const createProductService = async (product) => {
    const {
        name,
        type,
        sku,
        image_url,
        description,
        quantity,
        price
    } = product;

    const result = await pool.query(
        `INSERT INTO products 
        (name, type, sku, image_url, description, quantity, price) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [name, type, sku, image_url, description, quantity, price]
    );

    return result.rows[0];
};

export const updateProductQuantityService = async (id, quantity) => {
    const result = await pool.query(
        `UPDATE products SET quantity = $1 WHERE id = $2 RETURNING *`,
        [quantity, id]
    );
    
    return result.rows[0]; // If product not found, this will be undefined
};

export const getAllProductsService = async (limit, offset) => {
    const query = `SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2`;
    const values = [limit, offset];
    const result = await pool.query(query, values);
    return result.rows;
};

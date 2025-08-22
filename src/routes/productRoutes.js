import express from "express";
import validateProduct from "../middlewares/productValidator.js";
import { createProduct ,updateProductQuantity } from "../controllers/productController.js";
import authenticate from "../middlewares/authMiddleware.js"; // your JWT middleware
import { getAllProducts } from "../controllers/productController.js";
const router = express.Router();
router.get("/products", authenticate, getAllProducts);

router.post("/products", authenticate, validateProduct, createProduct);
router.put("/products/:id/quantity", authenticate, updateProductQuantity);


export default router;

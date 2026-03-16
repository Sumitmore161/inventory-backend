import express from "express";
import validateProduct from "../middlewares/productValidator.js";
import { createProduct ,updateProductQuantity } from "../controllers/productController.js";
import authenticate from "../middlewares/authMiddleware.js"; // your JWT middleware
import { getAllProducts } from "../controllers/productController.js";
const router = express.Router();
router.use(authenticate)
router.get("/products", getAllProducts);
router.post("/products", validateProduct, createProduct);
router.put("/products/:id/quantity", updateProductQuantity);


export default router;

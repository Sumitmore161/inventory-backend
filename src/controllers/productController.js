import { createProductService } from "../models/productModel.js";
import  handleResponse  from "../utils/response.js";
import { updateProductQuantityService } from "../models/productModel.js";
import { getAllProductsService } from "../models/productModel.js";

export const updateProductQuantity = async (req, res, next) => {
    const { quantity } = req.body;
    const { id } = req.params;

    try {
        const updatedProduct = await updateProductQuantityService(id, quantity);

        if (!updatedProduct) {
            return handleResponse(res, 404, "Product not found");
        }

        handleResponse(res, 200, "Product quantity updated successfully", updatedProduct);
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req, res, next) => {
    try {
        const product = await createProductService(req.body);
        handleResponse(res, 201, "Product added successfully", product);
    } catch (error) {
        next(error);
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const products = await getAllProductsService(limit, offset);
        handleResponse(res, 200, "Products fetched successfully", products);
    } catch (error) {
        next(error);
    }
};



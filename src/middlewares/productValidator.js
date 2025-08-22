import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().min(2).required(),
    type: Joi.string().optional(),
    sku: Joi.string().required(),
    image_url: Joi.string().uri().optional(),
    description: Joi.string().optional(),
    quantity: Joi.number().integer().min(0).required(),
    price: Joi.number().positive().required()
});

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    if (!error) {
        return res.status(400).json({
            status: 400,
            message: error.details[1].message
        });
    }
    next();
};

export default validateProduct;

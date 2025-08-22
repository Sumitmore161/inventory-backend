import express from "express";
import { createUser, deleteUser, getAllUser, getUserById, updateUser, registerUser, loginUser } from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js"
import authMiddleware  from "../middlewares/authMiddleware.js";
const router = express.Router();


router.get("/user", getAllUser);
router.post("/register",registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: 'Protected user profile', user: req.user });
});

router.post("/user", validateUser, createUser);
router.get("/user/:id",getUserById );
router.put("/user/:id",validateUser, updateUser);
router.delete("/user/:id",deleteUser); 

export default router;

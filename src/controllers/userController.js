import { deleteUserService, getAllUserService, getUserByIdService, updateUserByIdService, createUserService , getUserByEmail } 
from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
import handleResponse from "../utils/response.js";

export const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const user = await createUserService(name, email, password);
        handleResponse(res, 201, 'User registered successfully', user);
    } catch (error) {
        next(error);
    }
};


export const loginUser = async (req, res ,next) =>{
    const {email, password} = req.body
    try {
        const user = await getUserByEmail(email);
        if(!user) return handleResponse(res, 404, "User Not Found");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return handleResponse(res, 401, "Invalid Credentials");

        const token = jwt.sign(
            {
                id: user.id, email : user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        handleResponse(res, 200, "Login Successfull",{token});
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    const {name, email, password} = req.body;
    try {
        const newUser = await createUserService(name , email, password); 
        handleResponse(res, 201, "User Created Successfully",{
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        });

    } catch (error) {
        next(error)
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const users = await getAllUserService(); 
        handleResponse(res, 202, "User fetched Successfully",users);

    } catch (error) {
        next(error)
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id); 
        if(!user) return handleResponse(res,404, "User Not Found"); 
        handleResponse(res, 202, "User fetched Successfully",user);

    } catch (error) {
        next(error)
    } 
};

export const updateUser = async (req,res ,next) => {
    const {name, email} = req.body;
    try {
        const updateUser = await updateUserByIdService(name, email,req.params.id);
        
        if(!updateUser) return handleResponse(res, 404, "User Not Found");
        
        handleResponse(res, 200, "user updated Successfully",updateUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req,res ,next) => {
    const {name, email} = req.body;
    try {
        const deleteUser = await deleteUserService(req.params.id);
        if(!deleteUser) return handleResponse(res, 404, "User Not Found");
        handleResponse(res, 200, "user deleted Successfully",deleteUser);
    } catch (error) {
        next(error);
    }
}

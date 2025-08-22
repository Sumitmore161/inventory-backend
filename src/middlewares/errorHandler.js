const errorHandler =  (err, req, res, next) =>{
    console.log(err.stack);
    const statuscode = err.statuscode || 500;

    if(err.code = '23505')
    {
        return res.status(409).json({
            status:409,
            message:"Email already exists"
        })
    }
    req.status(500).json({
        status : 500,
        message: "Something gone wrong",
         error: err.message

    })
}   

export default errorHandler;
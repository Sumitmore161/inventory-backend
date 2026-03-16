const errorHandler =  (err, req, res, next) =>{
    console.log(err.stack);
    const statuscode = err.statuscode || 500;

    if(err.code = '23505')
    {
        return res.status(409).json({
            status:409,
            message:err.message
        })
    }
    req.status(err.statuscode).json({
        status : err.statuscode,
        message: "Something gone wrong",
         error: err.message
        
    })
}   

export default errorHandler;
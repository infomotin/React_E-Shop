import jwt from 'jsonwebtoken'
// import expressAsyncHandler from 'express-async-handler'

import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'

const protect = asyncHandler( async(req,res,next) =>{
    let token
    
    // const authorToken = req.headers.authorization
    // console.log(authorToken)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('Have Token')

        try{
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token,process.env.JWT_TOKEN)

            req.user = await User.findById(decode.id).select('-password')

            console.log(decode)

            next()
        }catch(error){
            console.error(error)
            res.status(401)
            throw new Error('Not Authorize')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not token')
    }


})

export {protect}
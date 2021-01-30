import User from '../model/userModel.js'
import asyncHandler from 'express-async-handler'

    //@decs Auth user & get token
    //@route POST /api/user/login
    //@access public 
const authUser =asyncHandler(async(req, res) =>{

    const {email,password} = req.body
    console.log(req.body.email)
    console.log(req.body.password)

    res.send({email,password})
})

export { authUser }
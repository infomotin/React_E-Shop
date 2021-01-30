import User from '../model/userModel.js'
import asyncHandler from 'express-async-handler'

    //@decs Auth user & get token
    //@route POST /api/user/login
    //@access public 
const authUser =asyncHandler(async(req, res) =>{

    const {email,password} = req.body
    // console.log(req.body.email)
    // console.log(req.body.password)

    // res.send({email,password})

    const user = await User.findOne({email})
    if(user && user.matchPassword(password) ){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null,

        })
    }else{
        res.status(401)
        throw new Error('Invalide user or password')
    }


})

export { authUser }
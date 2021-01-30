import User from '../model/userModel.js'
import genTokrn from '../utilite/genToken.js'
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
            token: genTokrn(user._id),

        })
    }else{
        res.status(401)
        throw new Error('Invalide user or password')
    }


})
//reg new new user 
const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('Email are Exiesting ')
    }else{

    }
})

//@decs Get user profile
//@route GET /api/user/profile
//@access Privat
const getUserProfile =asyncHandler(async(req, res) =>{

// // const {email,password} = req.body
// // console.log(req.body.email)
// // console.log(req.body.password)

// // res.send({email,password})

// const user = await User.findById(req.user._id)
// if(user && user.matchPassword(password) ){
//     res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         token: genTokrn(user._id),

//     })
// }else{
//     res.status(401)
//     throw new Error('Invalide user or password')
// }

const user = await User.findById(req.user._id)
if(user){
    res.json({
        _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
     })
}else{
    res.status(404)
    throw new Error('User Not Found')
}
// res.send('Successful')
})


export { authUser,getUserProfile }

// using jwt_token for user 
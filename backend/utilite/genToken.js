import jwt from 'jsonwebtoken'

const genTokrn = (id) =>{
    return jwt.sign({id},process.env.JWT_TOKEN,{expiresIn:'30d'})
}

export default genTokrn
import bcrypt from 'bcryptjs'

const users = [{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
}, {
    name: 'Jhon Dog',
    email: 'jhon@example.com',
    password: bcrypt.hashSync('123456', 10)
}, {
    name: 'Motin Abdul',
    email: 'motin@example.com',
    password: bcrypt.hashSync('123456', 10)
}]

export default user
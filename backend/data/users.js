import bcrypt from 'bcryptjs'

const users = [{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true
}, {
    name: 'Jhon Dog',
    email: 'jhon@example.com',
    password: xxxx
}, {
    name: 'Motin Abdul',
    email: 'motin@example.com',
    password: xxxx
}]
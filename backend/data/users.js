import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ahmad',
        email: 'ahmad@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Akshat',
        email: 'akshat@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];

export default users;
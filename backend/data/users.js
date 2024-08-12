import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Akshat',
    email: 'akshat@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anusk',
    email: 'anusk@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

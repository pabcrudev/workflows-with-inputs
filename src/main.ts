enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

interface User {
  name: string;
  role: UserRole;
}

const user: User = {
  name: 'John Doe',
  role: UserRole.ADMIN,
};

console.log(user);

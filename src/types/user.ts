export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface User {
  name: string;
  role: UserRole;
}

import { User, UserRole } from "../types/user";

export const USER_CONSTRUCTOR_ERROR = {
  EMPTY_NAME: "Name cannot be empty",
  INVALID_ROLE: "Invalid role",
};

export class UserEntity implements User {
  name: string;
  role: UserRole;

  constructor(name: string, role: UserRole = UserRole.USER) {
    this.validateName(name);
    this.validateRole(role);

    this.name = name;
    this.role = role;
  }

  private validateName(name: string) {
    if (!name) {
      throw new Error(USER_CONSTRUCTOR_ERROR.EMPTY_NAME);
    }
  }

  private validateRole(role: UserRole) {
    if (!Object.values(UserRole).includes(role)) {
      throw new Error(USER_CONSTRUCTOR_ERROR.INVALID_ROLE);
    }
  }
}

import { describe, expect, it } from "vitest";
import { UserEntity } from "../../src/entities/user.entity";
import { UserRole } from "../../src/types/user";

describe("UserEntity", () => {
  it("should create a user with the correct name and role", () => {
    const user = new UserEntity("Pablo", UserRole.ADMIN);
    expect(user.name).toBe("Pablo");
    expect(user.role).toBe(UserRole.ADMIN);
  });

  it("should validate user name is not empty", () => {
    expect(() => new UserEntity("", UserRole.USER)).toThrow(
      "Name cannot be empty"
    );
  });

  it("should validate user role is valid", () => {
    expect(() => new UserEntity("Pablo", "INVALID_ROLE" as UserRole)).toThrow(
      "Invalid role"
    );
  });

  it("should create a user with USER role by default", () => {
    const user = new UserEntity("Pablo");
    expect(user.role).toBe(UserRole.USER);
  });

  it("should allow updating user name", () => {
    const user = new UserEntity("Pablo");
    user.name = "John";
    expect(user.name).toBe("John");
  });
});

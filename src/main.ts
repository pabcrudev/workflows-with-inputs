import { UserEntity } from "./entities/user.entity";
import { UserRole } from "./types/user";
import { displayUser } from "./utils/display-user";

const theUser = new UserEntity("Pablo", UserRole.ADMIN);

displayUser(theUser);

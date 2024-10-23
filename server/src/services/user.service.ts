import { User } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { hashSync } from "bcryptjs";

export const createUser = async (user: User) => {
  user.password = hashSync(user.password, 10);
  const response = await userModel.create(user);
  return response;
};

import { CustomError } from "../classes/customErrors";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { checkPass, encrypt } from "../utils/password.handle";
import { genToken } from "../utils/token.handle";

export const registerService = async ({
  username,
  password,
  name,
  role,
  organization,
}: User) => {
  const checkExist = await userModel.findOne({ username });
  if (checkExist)
    throw new CustomError("User alredy exist", 409, "InvalidCrendentials");
  const hashedPass = encrypt(password);
  const newUser = userModel.create({
    username,
    password: hashedPass,
    name,
    role,
    organization,
  });
  return newUser;
};

export const loginService = async ({ username, password }: Auth) => {
  const checkExist = await userModel.findOne({ username });
  if (!checkExist) return "Invalid credentials";
  const isMatch = checkPass(password, checkExist.password);
  const token: string = genToken(checkExist.toJSON());
  if (isMatch) return { user: checkExist, token };
  throw new CustomError("Invalid credentials", 401, "InvalidCrendentials");
};

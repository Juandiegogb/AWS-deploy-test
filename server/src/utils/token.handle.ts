import { sign } from "jsonwebtoken";
import { User } from "../interfaces/user.interface";

export const genToken = (data: User) => {
  const secret = process.env.SECRET as string;
  return sign(data, secret, { expiresIn: "12h" });
};

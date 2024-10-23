import { hashSync, compareSync } from "bcryptjs";

export const encrypt = (password: string) => {
  return hashSync(password, 10);
};

export const checkPass = (password: string, hashedPass: string) => {
  return compareSync(password, hashedPass);
};

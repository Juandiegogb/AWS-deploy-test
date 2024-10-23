import { Auth } from "./auth.interface";

type Role = "admin" | "employee";

export interface User extends Auth {
  name: string;
  role: Role;
  organization: string;
}

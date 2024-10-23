import { Element } from "./element.interface";
import { User } from "./user.interface";

export type payment = "nequi" | "cash";

export interface Sale {
  seller: User;
  date: String;
  elements: Array<Element>;
  amount: number;
  payMethod: payment;
}

import { model, Schema } from "mongoose";
import { Sale } from "../interfaces/sale.interface";

const saleSchema = new Schema<Sale>(
  {
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    elements: { type: [], required: true },
    seller: { type: String, ref: "users", required: true },
    payMethod: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

export const saleModel = model("sale", saleSchema);

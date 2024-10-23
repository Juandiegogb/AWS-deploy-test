import { Schema, model } from "mongoose";
import { Element } from "../interfaces/element.interface";

const elementSchema = new Schema<Element>(
  {
    name: { type: String, required: true, uppercase: true },
    code: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    provider: { type: String },
  },
  { timestamps: false, versionKey: false }
);

export const elementModel = model("element", elementSchema);

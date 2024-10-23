import { model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
  {
    username: { type: String, unique: true, required: true },
    name: { type: String },
    password: { type: String },
    role: { type: String },
    organization: { type: String, required: true },
  },

  { timestamps: false, versionKey: false }
);

userSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.password;
    return ret;
  },
});

export const userModel = model("User", userSchema);

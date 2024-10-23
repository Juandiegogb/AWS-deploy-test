import "dotenv/config";
import { connect } from "mongoose";

export const dbConnect = async (): Promise<void> => {
  console.log(process.env.MONGO_TEST);
  const env = process.env.NODE_ENV;
  const uri =
    <string>env !== "production"
      ? process.env.MONGO_TEST
      : process.env.MONGO_URI;

  try {
    await connect(uri ?? "", { dbName: "AsStock" });
    console.log("DB is ready");
  } catch (error) {
    console.log(error);
  }
};

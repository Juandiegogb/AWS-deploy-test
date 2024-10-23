import express from "express";
import { router } from "./routes/mainRouter";
import cors from "cors";
import { dbConnect } from "./config/db";
import { errorHandler } from "./middlewares/error.middle";

export const app = express();

dbConnect();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(errorHandler);

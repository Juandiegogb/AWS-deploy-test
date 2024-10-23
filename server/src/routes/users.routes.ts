import { Router } from "express";
import { postUser } from "../controllers/user.controller";

export const router = Router();

router.post("/", postUser);
router.get("/test", () => {
  const name = "juan diego";
  console.log(name);
});

import { Router } from "express";
import {
  createElementController,
  deleteElementController,
  obtainElementsController,
  updateElementController,
} from "../controllers/element.controller";

export const router = Router();

router.get("/", obtainElementsController);
router.post("/", createElementController);
router.delete("/:id", deleteElementController);
router.put("/:id", updateElementController);

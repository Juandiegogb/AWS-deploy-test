import { Router } from "express";
import {
  createSaleController,
  deleteSaleController,
  obtainSalesController,
} from "../controllers/sale.controller";

export const router = Router();

router.get("/", obtainSalesController);
router.post("/", createSaleController);
router.delete("/:id", deleteSaleController);

import { NextFunction, Request, Response } from "express";
import { deleteSale, getSales, postSale } from "../services/sale.service";

export const obtainSalesController = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  getSales()
    .then((response) => res.send(response))
    .catch((error) => next(error));
};

export const createSaleController = (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  postSale(body)
    .then((response) => res.send(response))
    .catch((error) => next(error));
};

export const deleteSaleController = (
  { params }: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = params;
  deleteSale(id)
    .then((response) => res.send(response))
    .catch((error) => next(error));
};

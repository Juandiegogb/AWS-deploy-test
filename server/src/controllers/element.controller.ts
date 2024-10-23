import { NextFunction, Request, Response } from "express";
import {
  deleteElement,
  getElements,
  postElement,
  putElement,
} from "../services/elements.service";
import { CustomError } from "../classes/customErrors";

export const obtainElementsController = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  getElements()
    .then((response) => res.send(response))
    .catch((error) => next(error));
};

export const createElementController = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  postElement(body)
    .then((response) => res.send(response))
    .catch((error: Error) => {
      if (error.message.includes("E11000")) {
        const duplicateError = new CustomError(
          "Duplicate code for the element",
          409,
          "DuplicateCodeElement"
        );
        next(duplicateError);
      }
    });
};

export const deleteElementController = async (
  { params }: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = params.id;
  deleteElement(id)
    .then((response) => res.send(response))
    .catch((error: Error) => {
      next(error);
    });
};

export const updateElementController = async (
  { body, params }: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = params;
  putElement(id, body)
    .then((response) => res.send(response))
    .catch((error) => next(error));
};

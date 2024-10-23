import { NextFunction, Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";

export const loginController = (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  loginService(body)
    .then((response) => res.send(response))
    .catch((error) => next(error));
};

export const registerController = (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  registerService(body)
    .then((response) => res.status(200).json(response))
    .catch((error) => next(error));
};

import { NextFunction, Request, Response } from "express";
import { createUser } from "../services/user.service";

export const postUser = (req: Request, res: Response, next: NextFunction) => {
  createUser(req.body)
    .then((response) => res.status(200).json(response))
    .catch((error) => next(error));
};

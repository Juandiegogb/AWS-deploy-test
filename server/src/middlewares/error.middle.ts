import { NextFunction, Response, Request } from "express";
import { CustomError } from "../classes/customErrors";

export const errorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(error);
  const errorName = error.name;

  switch (errorName) {
    case "ValidationError":
      res.status(error.statusCode).json({ message: "Incomplete information" });
      break;

    case "InvalidCrendentials":
      res.status(error.statusCode).json({ message: error.message });
      break;

    case "DuplicateCodeElement":
      res.status(error.statusCode).json({ message: error.message });
      break;
    default:
      res.status(500).json(error);
      break;
  }
};

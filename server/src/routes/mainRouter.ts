import { Router } from "express";
import { readdirSync } from "fs";

export const router = Router();

const path = `${__dirname}`;

const cleanFileName = (file: string): string => {
  return file.split(".").shift() ?? "";
};

readdirSync(path).filter((file) => {
  const cleanName = cleanFileName(file);
  if (cleanName !== "mainRouter") {
    import(`./${cleanName}.routes`).then((routerModule) => {
      router.use(`/${cleanName}`, routerModule.router);
    });
  }
});

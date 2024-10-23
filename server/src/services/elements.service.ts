import { Element } from "../interfaces/element.interface";
import { elementModel } from "../models/element.model";

export const getElements = async () => {
  const response = await elementModel.find();
  return response;
};

export const postElement = async (data: Element) => {
  const response = await elementModel.create(data);
  return response;
};

export const deleteElement = async (id: string) => {
  const response = await elementModel.findByIdAndDelete(id);
  return response;
};

export const putElement = async (id: string, data: Element) => {
  data.quantity = Number(data.quantity);
  const response = await elementModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

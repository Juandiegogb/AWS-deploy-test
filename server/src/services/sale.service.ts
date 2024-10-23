import { Sale } from "../interfaces/sale.interface";
import { elementModel } from "../models/element.model";
import { saleModel } from "../models/sale.model";

export const getSales = async () => {
  const response = await saleModel.find();
  return response;
};

export const postSale = async (data: Sale) => {
  const { elements } = data;
  const date = new Date();
  data.date = date.toDateString();
  const querys = elements.map(async (e) => {
    const element = await elementModel.findOne({ code: e.code });
    if (element) {
      element.quantity -= e.quantity;
    }

    const updatedElement = await elementModel.findOneAndUpdate(
      { code: e.code },
      { quantity: element?.quantity },
      { new: true }
    );

    return updatedElement;
  });
  await Promise.all(querys);

  saleModel.create(data);

  return "Sale is done";
};

export const deleteSale = async (id: string) => {
  console.log(id);
};

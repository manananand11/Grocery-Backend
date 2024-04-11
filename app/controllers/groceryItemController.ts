import { NextFunction, Request, Response } from "express";
import GroceryItemService from "../services/GroceryItemService";

class GroceryItemController {
  async createGroceryItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, quantity, description } = req.body;
      const addedBy = parseInt(req.headers["userid"] as string, 10);

      const groceryItemService = new GroceryItemService();
      const groceryItem = await groceryItemService.createGroceryItem({
        name,
        price,
        quantity,
        description,
        addedBy,
      });
      res.status(201).json(groceryItem);
    } catch (error) {
      next(error);
    }
  }
  async getGroceryItemById() {}
  async getAllGroceryItems() {}
  async updateGroceryItem() {}
  async deleteGroceryItem() {}
}

export default new GroceryItemController();

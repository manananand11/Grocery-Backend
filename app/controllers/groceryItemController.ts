import GroceryItemService from "../services/GroceryItemService";

class GroceryItemController {
  async createGroceryItem(req:any, res:any) {
    const { name, price, quantity, description } = req.body;

    const groceryItemService = new GroceryItemService();
    const groceryItem = await groceryItemService.createGroceryItem({
        name,
        price,
        quantity,
        description,
        addedyBy:req.user.id,
    });
    res.status(201).json(groceryItem);
  }
  async getGroceryItemById() {}
  async getAllGroceryItems() {}
  async updateGroceryItem() {}
  async deleteGroceryItem() {}
}

export default new GroceryItemController();

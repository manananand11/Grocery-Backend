import GroceryItem from "../models/GroceryItem";

class GroceryItemService{
    async createGroceryItem({ name, price, quantity, description,addedyBy }) {
    
        const groceryItem = await GroceryItem.create({
            name,
            price,
            quantity,
            description,
            addedyBy,
        });
        return groceryItem;
      }
}

export default GroceryItemService;
import GroceryItem from "../models/GroceryItem";

class GroceryItemService{
    async createGroceryItem({ name, price, quantity, description,addedBy }:{
    name: string, 
    price: number, 
    quantity: number, 
    description: string, 
    addedBy: number, 
    }) {
        const groceryItem = await GroceryItem.create({
            name,
            price,
            quantity,
            description,
            addedBy,
        });
        return groceryItem;
      }
}

export default GroceryItemService;
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
      async getGroceryItemById(groceryItemId:number) {
        const groceryItem = await GroceryItem.findOne({
          where: { id: groceryItemId},
        });
        if (!groceryItem) {
          throw new Error('Grocery item not found for the menu');
        }
        return groceryItem;
      }
      async getAllGroceryItems() {
        const allGroceryItems = await GroceryItem.findAll();
        return allGroceryItems;
      }
}


export default GroceryItemService;
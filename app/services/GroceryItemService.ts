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
      async updateGroceryItem(groceryItemId: number, updatedFields: {
        name?: string,
        price?: number,
        quantity?: number,
        description?: string,
      }) {
        const groceryItem = await GroceryItem.findByPk(groceryItemId);
        if (!groceryItem) {
          throw new Error('Grocery item not found');
        }
        
        await groceryItem.update(updatedFields);
        return groceryItem;
      }
      async deleteGroceryItem(groceryItemId: number) {
        const groceryItem = await GroceryItem.findByPk(groceryItemId);
        if (!groceryItem) {
          throw new Error('Grocery item not found');
        }
        
        await groceryItem.destroy();
      }
}


export default GroceryItemService;
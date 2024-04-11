import Order from '../models/Order';
import OrderItem from '../models/OrderItem';

class OrderService {
  async createOrder(userId: number, items: { groceryItemId: number, quantity: number, price: number }[]) {
    // Calculate the total amount
    const totalAmount = this.calculateTotalAmount(items);
    console.log('User ID:', userId);
    console.log('Items:', items);
    console.log('Total Amount:', totalAmount);
    // Create the order
    const order = await Order.create({
      userId,
      amount: totalAmount,
      status: 'Pending', // Initial status of the order is 'Pending'
    });

    // Create order items for each item in the request
    const orderItemsPromises = items.map(async (item) => {
      const { groceryItemId, quantity } = item;
      await OrderItem.create({
        orderId: order.id,
        groceryItemId,
        quantity,
        price: item.price, // Store the provided price in the order item
      });
    });

    // Wait for all order items to be created
    await Promise.all(orderItemsPromises);

    return order;
  }

  private calculateTotalAmount(items: { groceryItemId: number, quantity: number, price: number }[]) {
    // Calculate the total amount by summing up the price * quantity for each item
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
}

export default OrderService;

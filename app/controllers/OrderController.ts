import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, items } = req.body; 

      const orderService = new OrderService();
      const order = await orderService.createOrder(userId, items);

      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
}

export default new OrderController();

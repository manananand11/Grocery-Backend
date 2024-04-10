import express from 'express';
import groceryItemRouter from './../app/routes/groceryItemRouter'
import orderItemRouter from './../app/routes/orderItemRouter'
import orderRouter from './../app/routes/orderRouter'

const mainRouter = express.Router();

mainRouter.use('/orders', orderRouter);
mainRouter.use('/order-items', orderItemRouter);
mainRouter.use('/grocery-items', groceryItemRouter);

export default mainRouter;

import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

router.post('/', OrderController.createOrder);

export default router;
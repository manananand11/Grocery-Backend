import express from 'express';
import authenticate from '../app/middleware/authMiddleware';
import adminMiddleware from '../app/middleware/adminMiddleware';

const mainRouter = express.Router();

mainRouter.get('/protected-route',authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});
mainRouter.get('/admin-route',adminMiddleware, (req, res) => {
  res.json({ message: 'This is an admin protected route' });
});

export default mainRouter;

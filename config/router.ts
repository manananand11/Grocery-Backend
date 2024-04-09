import express from 'express';
import authenticate from '../app/middleware/authMiddleware';

const mainRouter = express.Router();

mainRouter.get('/protected-route',authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});
mainRouter.get('/admin-route',authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

export default mainRouter;

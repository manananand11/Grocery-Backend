import express from 'express';
import adminMiddleware from '../middleware/adminMiddleware';
import groceryItemController from '../controllers/groceryItemController';

const router = express.Router();

router.post('/',adminMiddleware, (groceryItemController.createGroceryItem));
router.get('/', (groceryItemController.getGroceryItemById));
router.get('/:id', (groceryItemController.getAllGroceryItems));
router.put('/:id',adminMiddleware, (groceryItemController.updateGroceryItem));
router.delete('/:id',adminMiddleware, (groceryItemController.deleteGroceryItem));


export default router;
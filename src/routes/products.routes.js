import express from 'express';
const router = express.Router();
import { authentication } from '../middlewares/authentication.js';
import { getProductById, createProduct, getAllProducts, deleteProduct } from '../controllers/products.controller.js';

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create', authentication, createProduct);
router.delete('/:id', authentication, deleteProduct);

export default router;
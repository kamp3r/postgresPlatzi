import express from 'express';

import { router as productsRouter } from './products.router.js';
import { router as categoriesRouter } from './categories.router.js';
import { router as usersRouter } from './users.router.js';
import { router as orderRouter } from './orders.router.js';

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
}

export default routerApi;

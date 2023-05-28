/**
 * file: src/routes/index.ts
 * description: file responsible for
 * data: 05/28/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Application, Request, Response } from 'express';
import ApiController from '../controllers/api';

const router = express.Router();

router.get('/api', async(req: Request, res: Response) => {
  const apiController = new ApiController();
  const response = await apiController.getMessage();

  return res.send(response);
});

export default router;
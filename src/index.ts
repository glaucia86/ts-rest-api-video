/**
 * file: index.ts
 * description: file responsible for the main entry point of the application.
 * data: 05/28/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import Router from './routes';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json'
    }
  })
);

app.use(Router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
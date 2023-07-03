/**
 * file: src/typeorm/data-source.ts
 * description: file responsible for the connection with the database.
 * data: 07/03/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  ssl: true,
  logging: true,
  synchronize: true,
  entities: [],
});

export default AppDataSource;

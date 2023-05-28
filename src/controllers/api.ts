/**
 * file: src/controllers/api.ts
 * description: file responsible for the
 * data: 05/28/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Get, Route } from 'tsoa';

interface ApiResponse {
  message: string;
}

@Route('api')
export default class ApiController {
  @Get('/')
  public async getMessage(): Promise<ApiResponse> {
    return {
      message: 'Welcome to the Node.js & TypeScript API w/ Azure Database for PostgreSQL!'
    };
  }
}
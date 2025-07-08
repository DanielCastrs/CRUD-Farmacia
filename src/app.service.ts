import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Projeto BACKEND Farmacia!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'now World!';
  }
  put(): string {
    return 'put';
  }
  post(): string {
    return 'post';
  }
  delete(): string {
    return 'delete';
  }
}

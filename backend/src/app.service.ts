import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<string, string> {
    return {
      category: 'Test category',
      contents: 'Test contents',
      updated_at: 'Test date',
    };
  }
}

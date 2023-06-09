import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // write middleware logic here
    console.log('Example middleware')
    next();
  }
}

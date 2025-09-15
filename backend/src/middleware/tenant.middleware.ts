import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const X_TENANT = `x-tenant`;

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const tenant = (req.headers[X_TENANT] as string)?.toLowerCase();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (req as any).tenant = tenant;

    next();
  }
}

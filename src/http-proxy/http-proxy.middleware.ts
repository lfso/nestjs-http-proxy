import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { HTTP_PROXY_TARGET } from '../constants/http-proxy.constant';

@Injectable()
export class HttpProxyMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: HTTP_PROXY_TARGET,
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/proxy': '',
    },
  });

  use(req: Request, res: Response, next: NextFunction) {
    return this.proxy(req, res, next);
  }
}

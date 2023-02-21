import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RawHeaders = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string[] => {
    const req = ctx.switchToHttp().getRequest();
    const { rawHeaders } = req;
    return rawHeaders;
  },
);

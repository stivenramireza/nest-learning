import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '../entities/user.entity';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    const { user } = req;

    if (!user) throw new InternalServerErrorException('Internal server error');

    if (user.hasOwnProperty(data)) return user[data];

    return user;
  },
);

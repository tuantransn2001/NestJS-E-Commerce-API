import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { isEmpty } from '..';

export const User = createParamDecorator((_: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return isEmpty(request.currentUser) ? {} : request.currentUser;
});

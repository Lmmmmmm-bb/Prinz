import { applyDecorators, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { ResponseInterceptor } from '../interceptors/response.interceptor';

export const BaseSecurity = () =>
  applyDecorators(UseGuards(AuthGuard), UseInterceptors(ResponseInterceptor));

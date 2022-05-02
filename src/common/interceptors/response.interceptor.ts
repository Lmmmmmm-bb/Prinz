import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { IBaseResponse } from '../models/response.model';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(
    ctx: ExecutionContext,
    next: CallHandler,
  ): Observable<IBaseResponse> {
    const status = this.reflector.get('status', ctx.getHandler()) || 0;
    const message = this.reflector.get('message', ctx.getHandler());
    return next.handle().pipe(map((data) => ({ status, data, message })));
  }
}

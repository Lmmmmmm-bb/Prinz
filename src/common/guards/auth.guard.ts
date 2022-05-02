import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { parseToken } from '../utils/jwt.util';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  canActivate(ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const token = parseToken(authorization);
      this.authService.transform(token);
    } catch {
      return false;
    }

    return true;
  }
}

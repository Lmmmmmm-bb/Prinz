import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  canActivate(ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest();
    const { authorization } = request.headers;
    try {
      this.authService.transform(authorization);
    } catch {
      return false;
    }

    return true;
  }
}

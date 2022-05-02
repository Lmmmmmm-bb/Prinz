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

  private getToken(authorization: string) {
    if (authorization.startsWith('Bearer')) {
      return authorization.split(' ')[1];
    }
    return authorization;
  }

  canActivate(ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const token = this.getToken(authorization);
      this.authService.transform(token);
    } catch {
      return false;
    }

    return true;
  }
}

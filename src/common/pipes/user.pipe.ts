import { Inject, Injectable, PipeTransform } from '@nestjs/common';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  transform(token: string) {
    return this.authService.transform(token);
  }
}

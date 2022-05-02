import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  transform(token: string, metadata: ArgumentMetadata) {
    const user = this.authService.transform(token);
    return metadata.data ? user[metadata.data] : user;
  }
}

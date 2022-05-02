import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/common/interceptors/response.interceptor';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@UseInterceptors(ResponseInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '获取用户信息' })
  @Get('github')
  async findAll(@Query('code') code: string) {
    return this.authService.signGithubJwt(code);
  }
}

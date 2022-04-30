import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '获取用户信息' })
  @Get('github')
  async findAll(@Query('code') code: string) {
    return this.authService.signGithubJwt(code);
  }
}

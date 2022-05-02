import { ApiProperty } from '@nestjs/swagger';
import { IdentityTypeEnum } from '../auth.type';

export class CreateAuthUserDto {
  @ApiProperty({
    example: 1,
    description: '关联的用户 ID',
    required: true,
  })
  userId: number;

  @ApiProperty({
    example: IdentityTypeEnum.GitHub,
    enum: IdentityTypeEnum,
    description: '登录的身份类型',
    required: true,
  })
  identityType: IdentityTypeEnum;

  @ApiProperty({
    example: '54026110',
    description: '登录身份标识',
    required: true,
  })
  identifier: string;

  @ApiProperty({
    example: '50612f7be0228253d8da',
    description: '登录凭证',
    required: true,
  })
  credential: string;
}

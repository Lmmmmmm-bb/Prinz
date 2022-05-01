import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '_lmmmmmm',
    description: '用户昵称',
    required: true,
  })
  nickname: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/54026110?v=4',
    description: '用户头像地址',
  })
  avatar?: string;

  @ApiProperty({
    example: true,
    description: '用户性别',
  })
  gender?: boolean;

  @ApiProperty({
    example: 'Shenzhen, China',
    description: '用户地址',
  })
  area?: string;

  @ApiProperty({
    example: '...',
    description: '用户个性签名',
  })
  signature?: string;

  @ApiProperty({
    example: '2022-04-30 14:36:11',
    description: '用户生日',
  })
  birthday?: string;
}

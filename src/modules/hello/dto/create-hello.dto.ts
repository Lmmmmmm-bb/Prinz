import { ApiProperty } from '@nestjs/swagger';

export class CreateHelloDto {
  @ApiProperty({
    example: 'e3bae61d-92b3-408f-b6ba-ee737682cf8f',
    default: 'e3bae61d-92b3-408f-b6ba-ee737682cf8f',
    description: 'This is Hello UUID',
    required: true,
  })
  id: string;
}

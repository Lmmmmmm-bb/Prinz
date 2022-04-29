import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    example: '2022-04-28 21:18:14',
    description: '提醒日期',
    required: true,
  })
  date: Date;

  @ApiProperty({
    example: '每天早上8点起床',
    description: '待办事项内容',
    required: true,
  })
  content: string;

  @ApiProperty({
    example: false,
    description: '该待办是否已完成',
    required: true,
  })
  isComplete: boolean;
}

import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({
    example: '2022-04-28 21:18:14',
    description: '提醒日期',
    required: false,
  })
  date?: Date;

  @ApiProperty({
    example: '每天早上8点起床',
    description: '待办事项内容',
    required: false,
  })
  content?: string;

  @ApiProperty({
    example: true,
    description: '该待办是否已完成',
    required: false,
  })
  isComplete?: boolean;
}

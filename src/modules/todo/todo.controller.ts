import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { BaseSecurity } from 'src/common/decorators/base-security.decorator';
import { UserPipe } from 'src/common/pipes/user.pipe';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@ApiTags('User Todo')
@ApiBearerAuth()
@BaseSecurity()
@Controller('user-todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '根据用户 ID 获取该用户所有待办事项' })
  @Get(':id')
  getAllTodoByUserId(@Param('id') id: string) {
    return this.todoService.findTodoAllByUserId(id);
  }

  @ApiOperation({ summary: '创建待办事项' })
  @Post()
  create(
    @Body() createTodoDto: CreateTodoDto,
    @Auth('id', UserPipe) id: string,
  ) {
    return this.todoService.createTodo(id, createTodoDto);
  }

  @ApiOperation({ summary: '根据待办事项 ID 删除待办事项' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  @ApiOperation({
    summary: '根据待办事项 ID 更新待办事项',
    description: '至少需要更新一个字段',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodoById(id, updateTodoDto);
  }
}

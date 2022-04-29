import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@ApiTags('User Todo')
@Controller('user-todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // TODO: 使用 JWT 获取用户 ID 替代当前的 ID 参数
  @ApiOperation({ summary: '根据用户 ID 获取该用户所有待办事项' })
  @Get(':id')
  getAllTodoByUserId(@Param('id') id: string) {
    return this.todoService.findTodoAllByUserId(id);
  }

  // TODO: 根据 JWT 获取用户 ID 创建待办
  @ApiOperation({ summary: '创建待办事项' })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo('1', createTodoDto);
  }

  @ApiOperation({ summary: '根据待办事项 ID 删除待办事项' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  // TODO: 使用 JWT 获取用户 ID 替代当前的 ID 参数
  @ApiOperation({
    summary: '根据待办事项 ID 更新待办事项',
    description: '至少需要更新一个字段',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodoById(id, updateTodoDto);
  }
}

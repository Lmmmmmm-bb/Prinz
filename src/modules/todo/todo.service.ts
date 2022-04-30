import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  findTodoAllByUserId(userId: string) {
    this.logger.log(`[findTodoAllByUserId] userId: ${userId}`);
    return this.todoRepository.find({ userId: +userId });
  }

  createTodo(id: string, todo: CreateTodoDto) {
    this.logger.log(`[createTodo] id: ${id}, todo: ${JSON.stringify(todo)}`);
    return this.todoRepository.save({ ...todo, userId: +id });
  }

  deleteTodo(id: string) {
    this.logger.log(`[deleteTodo] id: ${id}`);
    return this.todoRepository.delete(id);
  }

  updateTodoById(id: string, updateTodoDto: UpdateTodoDto) {
    this.logger.log(
      `[updateTodoById] id: ${id}, updateTodoDto: ${JSON.stringify(
        updateTodoDto,
      )}`,
    );
    return this.todoRepository.update(id, updateTodoDto);
  }
}

// src/tasks/tasks.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body() taskData: Partial<Task>): Task {
    return this.tasksService.create(taskData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Task>): Task {
    return this.tasksService.update(+id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.tasksService.delete(+id);
  }
}

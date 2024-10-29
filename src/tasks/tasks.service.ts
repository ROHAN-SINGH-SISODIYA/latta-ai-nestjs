// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Sample Task',
      description: 'This is a sample task',
      completed: false,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((task) => task.description === id);
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  create(taskData: Partial<Task>): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: taskData.title || 'Untitled Task',
      description: taskData.description || '',
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updateData: Partial<Task>): Task {
    const task = this.findOne(id);
    Object.assign(task, updateData);
    return task;
  }

  delete(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1)
      throw new NotFoundException(`Task with ID ${id} not found`);
    this.tasks.splice(index, 1);
  }
}

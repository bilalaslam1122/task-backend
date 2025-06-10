import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskInput } from './dto/create-task.input';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: number): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id });
  }

  async create(input: CreateTaskInput): Promise<Task> {
    const task = this.taskRepository.create(input);
    return this.taskRepository.save(task);
  }
}

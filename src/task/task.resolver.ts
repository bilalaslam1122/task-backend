import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskInput } from './dto/create-task.input';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(() => [Task])
  tasks() {
    return this.taskService.findAll();
  }

  @Query(() => Task, { nullable: true })
  task(@Args('id', { type: () => Int }) id: number) {
    return this.taskService.findOne(id);
  }

  @Mutation(() => Task)
  createTask(@Args('input') input: CreateTaskInput) {
    return this.taskService.create(input);
  }
}

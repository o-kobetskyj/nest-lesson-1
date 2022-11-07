import { Body, Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { ITask } from './task.interface';



@Controller('task')
export class TestController {
  tasks: any;
  
  @Get('')
  @HttpCode(206)
  @Header('Lesson-1', 'Nest.js')
  getTask(): ITask[] {
    return [];
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): ITask {
    const task = this.tasks.find((t) => t.id === +id);

    return task;
  }

  @Post()
  createTask(@Body('task') task:ITask): ITask {
    this.tasks.push(task);
    return task
  }
}

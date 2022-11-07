import { Body, Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { ITask } from './task.interface';
import { TaskService } from './task.service';



@Controller('task')
export class TaskController {
  constructor(private testService: TaskService) {

  }

  @Get()  
  getTask(): ITask[] {
    return this.testService.getTask();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): ITask {
    return this.testService.getTaskById(id);
  }

  @Post()
  createTask(@Body('task') task:ITask): ITask {
    return this.testService.createTask(task)
  } 
}

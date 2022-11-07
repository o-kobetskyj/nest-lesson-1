import { Body, Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { ITask } from './task.interface';
import { TestService } from './test.service';



@Controller('task')
export class TestController {
  constructor(private testService: TestService) {

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

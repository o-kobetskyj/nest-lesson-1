import { Controller, Get, Header, HttpCode, Param } from '@nestjs/common';
import { log } from 'console';

interface Task {
    id: number; task: string
}

@Controller('task')
export class TestController {
  private tasks: Task[] = [
    { id: 1, task: 'task-1' },
    { id: 2, task: 'task-2' },
  ];
  @Get('')
  @HttpCode(206)
  @Header('Lesson-1', 'Nest.js')
  getTask(): Task[] {
    return this.tasks;
  }

  @Get(':id')
  getTaskById(@Param('id', {transform:(id) => Number(id)}) id: number): Task {
    console.log({id});
    
const task = this.tasks.find(t => t.id=== id);
console.log({task});
return task

  }
}

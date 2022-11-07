import { Controller, Get, Header, HttpCode } from "@nestjs/common";

@Controller('test')
export class TestController {
@Get('')
@HttpCode(206)
@Header("Lesson-1", 'Nest.js' )
test() {
    return {result: 'All is/are work', status: 200}
}
} 
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

class HelloDto {
  @ApiProperty()
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/set-hello')
  setHello(@Body() input: HelloDto): string {
    return this.appService.setHello(input.name);
  }
}

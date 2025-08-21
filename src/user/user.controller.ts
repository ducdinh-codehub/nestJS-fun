import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.services';
import { CreateUserDto } from './user.dto';
import { UserInterface } from './user.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/create')
  create(@Body() createCatDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.create(createCatDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/find-all')
  findAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/find-by-name')
  find(@Param() username: string): Promise<any> {
    return this.userService.findByUsername(username);
  }
}

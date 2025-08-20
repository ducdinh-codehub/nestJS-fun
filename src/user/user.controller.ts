import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { ApiBasicAuth, ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  create(): string {
    return this.authService.create();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/delete')
  delete(): string {
    return this.authService.delete();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/update')
  update(): string {
    return this.authService.update();
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(@Body() loginInfor: AuthDto): Promise<{ access_token: string }> {
    return this.authService.login(loginInfor);
  }
}

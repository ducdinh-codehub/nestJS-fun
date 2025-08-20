import { Injectable } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
    private jwtService: JwtService
  ) {}

  create(): string {
    return 'Create';
  }

  delete(): string {
    return 'Delete';
  }

  update(): string {
    return 'Update';
  }

  async login(loginInfor: AuthDto): Promise<{ access_token: string }> {
    const user = {
        userId: 1,
        username: 'nva'
    }
    const payload = { sub: user.userId, username: loginInfor.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

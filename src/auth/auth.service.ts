import { Inject, Injectable } from '@nestjs/common';
import { AuthDto, CreateAccountDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.services';
import { AuthInterface } from './auth.interface';
import { Model } from 'mongoose';
import crypto from 'crypto';
import { encryptKey } from './auth.constants';
import { CreateUserDto } from 'src/user/user.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
    @Inject('AUTH_MODEL')
    private authModel: Model<AuthInterface>,
  ) {}

  async create(createAccDto: CreateAccountDto): Promise<any> {
    const existAcc = await this.authModel.findOne({
      email: createAccDto.email,
    });

    if (existAcc) {
      return { message: 'Email is already used to create an account' };
    } else {
      var hashpassword = crypto
        .createHash('md5')
        .update(Object.values(createAccDto.password).join(''))
        .update(encryptKey.encryptionKey)
        .digest('hex');
      var tmp: CreateAccountDto = {
        username: createAccDto.username,
        password: hashpassword,
        fullname: createAccDto.fullname,
        email: createAccDto.email,
        phone: createAccDto.phone,
        age: createAccDto.age,
        dob: createAccDto.dob,
        address: createAccDto.address,
        gender: createAccDto.gender,
      };

      const createdAcc = new this.authModel(tmp);
      await createdAcc.save();

      var tmp2: CreateUserDto = {
        fullname: createAccDto.fullname,
        age: createAccDto.age,
        dob: createAccDto.dob,
        email: createAccDto.email,
        phone: createAccDto.phone,
        address: createAccDto.address,
        gender: createAccDto.gender,
      }
      const createdUser = await this.userService.create(tmp2);

    }

    return { message: 'Account is already created' };
  }

  delete(): string {
    return 'Delete';
  }

  update(): string {
    return 'Update';
  }

  async login(loginInfor: AuthDto): Promise<{ access_token: string }> {
    const user = await this.userService.findByUsername(loginInfor.username);
    var access_tk: any = null;

    if (user) {
      const payload = { sub: user._id, username: user.fullname };
      access_tk = await this.jwtService.signAsync(payload);
    } else {
      access_tk = null;
    }

    //console.log('users', users);
    return {
      access_token: access_tk,
    };
  }
}

import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<UserInterface>,
  ) {}

  async create(createCatDto: CreateUserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(createCatDto);
    return createdUser.save();
  }

  async findAll(): Promise<UserInterface[]> {
    const rst = await this.userModel.find().exec();
    console.log('rst', rst);
    return rst;
  }

  async findByUsername(username: string): Promise<any> {
    const rst = await this.userModel.findOne({ fullname: username }).exec();
    console.log('rst', rst);
    return rst;
  }
}

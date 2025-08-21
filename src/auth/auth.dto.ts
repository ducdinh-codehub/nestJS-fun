import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class CreateAccountDto {
  @ApiProperty()
  username: String;
  @ApiProperty()
  password: String;
  @ApiProperty()
  fullname: String;
  @ApiProperty()
  email: String;
  @ApiProperty()
  phone: String;
  @ApiProperty()
  age: Number;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  address: String;
  @ApiProperty()
  gender: String;
}

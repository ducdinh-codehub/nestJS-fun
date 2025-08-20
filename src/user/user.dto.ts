import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto{
    @ApiProperty()
    fullname: String;
    @ApiProperty()
    age: Number;
    @ApiProperty()
    dob: Date;
    @ApiProperty()
    email: String;
    @ApiProperty()
    phone: String;
    @ApiProperty()
    address: String;
    @ApiProperty()
    gender: String;
}
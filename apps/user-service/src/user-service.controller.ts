import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { CreateUserDto } from './create-user-dto';

@Controller('users')
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @Get('/hello')
  getHello(): string {
    return this.userServiceService.getHello();
  }

  @Get()
  async findAll() {
    return this.userServiceService.findAll();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userServiceService.create(createUserDto);
  }
}

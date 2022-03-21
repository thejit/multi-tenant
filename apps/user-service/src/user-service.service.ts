import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/sequelize';
import { Connection } from 'mysql2';
import { resourceUsage } from 'process';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from './create-user-dto';
import { Users } from './user.model';

@Injectable()
export class UserServiceService {
  constructor(
    // @InjectConnection('development') private readonly sequelize: Sequelize,
    @InjectModel(Users)
    private readonly userModel: typeof Users,
  ) {}

  async findAll(): Promise<Users[]> {
    const result = await this.userModel.findAll();
    //this.sequelize.close()  // optional or you can manage it
    return result;
  }

  async create(createUserDto: CreateUserDto): Promise<Users> {
    return this.userModel.create(<Users>createUserDto);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

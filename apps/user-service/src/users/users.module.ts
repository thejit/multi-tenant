import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organizations } from '../organizations.model';
import { Users } from '../user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrivilegeService } from './privilege.service';
import { PrivilegeController } from './privilege.controller';
import { PrivilegeGroup } from './privilegeGroup.model';
import { GroupUser } from './groupUser.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Users,
      Organizations,
      PrivilegeGroup,
      GroupUser,
    ]),
  ],
  controllers: [UsersController, PrivilegeController],
  providers: [UsersService, PrivilegeService],
  exports: [],
})
export class UsersModule {}

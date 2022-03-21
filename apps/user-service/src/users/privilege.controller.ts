import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateGroup, CreateGroupDto } from './create-group-dto';
import { CreateGroupUserDto } from './create-groupuser-dto';
import { PrivilegeService } from './privilege.service';

@Controller('privilege')
export class PrivilegeController {
  constructor(private readonly privilegeService: PrivilegeService) {}

  @Get('/')
  getGroupList() {
    return this.privilegeService.getGroupList();
  }
  @Get('/:id')
  getGroup(@Param('id') id: number) {
    return this.privilegeService.getGroup(id);
  }

  @Post('/add')
  async createGroup(@Body() createGroup: CreateGroup) {
    return this.privilegeService.createGroup(createGroup);
  }
  @Post('/group-users/save')
  async addUserGroup(@Body() createGroupUserDtoList: CreateGroupUserDto[]) {
    return this.privilegeService.addUserGroup(createGroupUserDtoList);
  }
  @Delete('/group-users/delete')
  async deleteUserGroup(
    @Query('userId') userId: number,
    @Query('privilegeGroupId') privilegeGroupId: number,
  ) {
    return this.privilegeService.deleteUserGroup(userId, privilegeGroupId);
  }

  @Get('/group-users/user/:userId')
  getUserGroup(@Param('userId') userId: number) {
    return this.privilegeService.getUserGroup(userId);
  }
}

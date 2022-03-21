import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroup, CreateGroupDto } from './create-group-dto';
import { CreateGroupUserDto } from './create-groupuser-dto';
import { GroupUser } from './groupUser.model';
import { PrivilegeGroup } from './privilegeGroup.model';

@Injectable()
export class PrivilegeService {
  constructor(
    @InjectModel(PrivilegeGroup)
    private readonly privilegeModel: typeof PrivilegeGroup,
    @InjectModel(GroupUser) private readonly groupUserModel: typeof GroupUser,
  ) {}

  getGroupList() {
    return this.privilegeModel.findAll();
  }

  getGroup(id: any) {
    return this.privilegeModel.findOne({ where: { id: id } });
  }

  async createGroup(createGroup: CreateGroup): Promise<PrivilegeGroup> {
    const createGroupDto = new CreateGroupDto();
    createGroupDto.groupName = createGroup.groupName;
    createGroupDto.roles = JSON.stringify(createGroup.roles);
    return this.privilegeModel.create(<PrivilegeGroup>createGroupDto);
  }

  async addUserGroup(
    createGroupUserDto: CreateGroupUserDto[],
  ): Promise<GroupUser[]> {
    return this.groupUserModel.bulkCreate(createGroupUserDto);
  }

  async deleteUserGroup(userId: any, privilegeGroupId: any) {
    return this.groupUserModel.destroy({
      where: { userId: userId, privilegeGroupId: privilegeGroupId },
    });
  }
  getUserGroup(id: any) {
    return this.groupUserModel.findAll({ where: { userId: id } });
  }
}

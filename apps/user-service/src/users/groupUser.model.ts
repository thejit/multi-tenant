import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { PrivilegeGroup } from './privilegeGroup.model';
import { Users } from '../user.model';

@Table
export class GroupUser extends Model {
  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => PrivilegeGroup)
  @Column
  privilegeGroupId: number;
}

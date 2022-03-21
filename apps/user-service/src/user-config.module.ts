import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './sequelize-config-service';
import { UsersModule } from './users/users.module';

@Module({
  providers: [SequelizeConfigService],
  exports: [SequelizeConfigService],
  imports: [UsersModule],
})
export class UserConfigModule {}

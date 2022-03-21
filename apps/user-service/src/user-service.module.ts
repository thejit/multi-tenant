import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose-config-service';
import { SequelizeConfigService } from './sequelize-config-service';
import { UserConfigModule } from './user-config.module';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { Users } from './user.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SequelizeModule.forRootAsync({
      imports: [UserConfigModule],
      // name: 'development',
      useExisting: SequelizeConfigService,
    }),
  ],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}

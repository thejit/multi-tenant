import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose-config-service';
import { SequelizeConfigService } from './sequelize-config-service';
import { UserConfigModule } from './user-config.module';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { Users } from './user.model';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SequelizeModule.forRootAsync({
      imports: [UserConfigModule],
      // name: 'development',
      useExisting: SequelizeConfigService,
    }),
    SequelizeModule.forFeature([Users]),
  ],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27021/testnodb?replicaSet=replication&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    ),
    MessageModule,
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
